import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar, Input } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import { useStateValue } from '../../StateProvider/StateProvider';
import db from '../../../firebase';
import firebase from 'firebase'
import axios from '../../axios/axios'
import pusher from 'pusher-js'



function MessageSender() { 

    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [image, setImage] = useState(null);
    const [{user}, dispatch] = useStateValue()

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const savePost = async (postData) => {
        await axios.post('/upload/post', postData)
            .then((resp)=>{
                console.log(resp)
            })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (image) {
            const imgForm = new FormData();
            imgForm.append("file", image, image.name);

            axios.post("/upload/image", imgForm, {
                headers:{
                    "accept": "application/json",
                    "Accept-Language": "en-US,en;q=0.8",
                    "Content-Type":`multipart/form-data; boundary=${imgForm._boundary}`
                }
            }).then((res) => {
                console.log(res.data);
                const postData = {
                    text: input,
                    imgName: res.data.filename,
                    timestamp: Date.now()
                }
                console.log(postData)
                savePost(postData);
            })
        }else{
            const postData ={
                text:input,
                timestamp:Date.now(),
            }

            console.log(postData)
                savePost(postData);
        }
        setImage(null);
        setInput('')

    }

    return (
        <div className="messageSender">

            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input value={input} onChange={(e) => {setInput(e.target.value)}} className="messageSender__input" placeholder={`What's on your mind, ${user.displayName}`}/>
                    <input type="file" className='messageSender__fileSelector' onChange={handleChange} />
                    <button type='submit' onClick={handleSubmit} >Hidden Submit</button>                    
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
