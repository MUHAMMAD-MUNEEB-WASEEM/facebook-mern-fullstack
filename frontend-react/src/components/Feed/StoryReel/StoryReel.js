import React from 'react'
import Story from './Story/Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story  
                image="https://links.papareact.com/k2j"
                profileSrc="https://links.papareact.com/f0p"
                title="Jeff Bezoz"
            />
            <Story  
                image="https://links.papareact.com/xql"
                profileSrc="https://links.papareact.com/snf"
                title="Mark Zuckerberg"
            />
            <Story  
                image="https://links.papareact.com/4zn"
                profileSrc="https://links.papareact.com/kxk"
                title="Elon Musk"
            />
            <Story  
                image="https://links.papareact.com/zof"
                profileSrc="https://links.papareact.com/l4v"
                title="Sonny Sangha"
            />
            <Story  
                image="https://links.papareact.com/4u4"
                profileSrc="https://links.papareact.com/zvy"
                title= "Bill Gates"
            />
        </div>
    )
}

export default StoryReel
