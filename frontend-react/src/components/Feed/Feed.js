import React, { useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender/MessageSender'
import Post from './Post/Post'
import StoryReel from './StoryReel/StoryReel'
import db from '../../firebase';
import axios from '../axios/axios'
import { useEffect } from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import Pusher from'pusher-js'

function Feed() {
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])
    const [{user}, dispatch] = useStateValue()
    

    const syncFeed = () => {
        axios.get('/retrieve/posts')
            .then((res)=>{
                console.log(res.data)
                setPostsData(res.data)
            })
    };

    useEffect(()=>{

        const pusher = new Pusher('528486e13de6e0d2d326', {
            cluster: 'ap2'
          });
        
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', function(data) {
        syncFeed()

    });
    return ()=>{
        channel.unbind_all(); // to unbind so it will no listen to all messages everytime, only listen new message
        channel.unsubscribe();
      };
    },[])

    useEffect(()=>{
        syncFeed()
    }, [postsData])

    {postsData.map((entry)=>{
        console.log(entry)
    })}

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

        {postsData.map((entry) => (
            <Post 
            profilePic={user.photoURL}
            message={entry.text}
            timestamp={entry.timestamp}
            imgName={entry.imgName}
            username={user.displayName}
            />

        ))}
            {/* <Post/>
            <Post/> */}
        </div>
    )
}

export default Feed
