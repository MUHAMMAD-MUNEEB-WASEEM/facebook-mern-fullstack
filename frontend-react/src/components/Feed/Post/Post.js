import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbsUpDown, ThumbUp } from '@material-ui/icons'


function Post({ profilePic, imgName, username, timestamp, message }) {
    return (
        <div className="post">

            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            {
                imgName ? (
                    <div className="post__image">
                        <img src={`http://localhost:9000/retrieve/images/single?name=${imgName}`} />
                    </div>
                ) : (
                        console.log('DEBUG >>> no image here')
                    )
            }


            <div className="post__options">
                <div className="post__option">
                    <ThumbUp/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircle/>
                    <ExpandMoreOutlined/>
                </div>
            </div>

        </div>
    )
}

export default Post
