import React, { useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender/MessageSender'
import Post from './Post/Post'
import StoryReel from './StoryReel/StoryReel'
import db from '../../firebase';
import axios from '../axios/axios'
import { useEffect } from 'react'
import { useStateValue } from '../StateProvider/StateProvider';

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
        syncFeed()
    }, [])

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
