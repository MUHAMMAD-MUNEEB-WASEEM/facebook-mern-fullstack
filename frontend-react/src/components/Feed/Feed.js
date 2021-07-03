import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender/MessageSender'
import Post from './Post/Post'
import StoryReel from './StoryReel/StoryReel'

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

            <Post 
              username="Muhammad Muneeb"
              message="Wow this is legit"
              timestamp="This is my time"
              image="https://links.papareact.com/xql"
              profilePic="https://scontent.fhdd3-1.fna.fbcdn.net/v/t1.6435-9/91601480_2654970644785952_2808636843233378304_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BHomamLBVRUAX-v1Q0T&_nc_ht=scontent.fhdd3-1.fna&oh=228f8de1b4b7f4b32b09d0b55f483306&oe=60E4C3BD"
            />
            {/* <Post/>
            <Post/> */}
        </div>
    )
}

export default Feed
