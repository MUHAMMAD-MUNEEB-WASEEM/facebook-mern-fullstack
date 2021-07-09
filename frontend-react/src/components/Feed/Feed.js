import React, { useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender/MessageSender'
import Post from './Post/Post'
import StoryReel from './StoryReel/StoryReel'
import db from '../../firebase';
import { useEffect } from 'react'

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ id:doc.id, data: doc.data() })))
        })
    }, [])

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

        {posts.map((post) => (

            <Post 
            key={post.id}
            username={post.data.username}
            message={post.data.message}
            timestamp={post.data.timestamp}
            image={post.data.image}
            profilePic={post.data.profilePic}
            />

        ))}
            {/* <Post/>
            <Post/> */}
        </div>
    )
}

export default Feed
