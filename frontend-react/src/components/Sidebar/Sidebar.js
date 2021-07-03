import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow/SidebarRow'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent.fhdd3-1.fna.fbcdn.net/v/t1.6435-9/91601480_2654970644785952_2808636843233378304_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BHomamLBVRUAX-v1Q0T&_nc_ht=scontent.fhdd3-1.fna&oh=228f8de1b4b7f4b32b09d0b55f483306&oe=60E4C3BD"
            title='Muhammad Muneeb'/>
            <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlags} title='Pages'/>
            <SidebarRow Icon={People} title="Friends"/>
            <SidebarRow Icon={Chat} title="Messenger"/>
            <SidebarRow Icon={Storefront} title="Marketplace"/>
            <SidebarRow Icon={VideoLibrary} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplaec"/>
        </div>
    )
}

export default Sidebar
