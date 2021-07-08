import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons'
import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
import './Sidebar.css'
import SidebarRow from './SidebarRow/SidebarRow'

function Sidebar() {
    const [{user}, dispatch] = useStateValue()
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL}
            title={user.displayName}/>
            <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlags} title='Pages'/>
            <SidebarRow Icon={People} title="Friends"/>
            <SidebarRow Icon={Chat} title="Messenger"/>
            <SidebarRow Icon={Storefront} title="Marketplace"/>
            <SidebarRow Icon={VideoLibrary} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
        </div>
    )
}

export default Sidebar
