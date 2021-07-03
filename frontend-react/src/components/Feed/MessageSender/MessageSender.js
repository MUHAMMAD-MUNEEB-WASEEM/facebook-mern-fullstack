import React from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';


function MessageSender() { 
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="messageSender">

            <div className="messageSender__top">
                <Avatar/>
                <form>
                    <input className="messageSender__input" placeholder="What's on your mind?"/>
                    <input placeholder="image URL (Optional)"/>
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>

            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{color:"orange"}}/>
                    <h3>Feeling Activity</h3>
                </div>
            </div>
            
        </div>
    )
}

export default MessageSender
