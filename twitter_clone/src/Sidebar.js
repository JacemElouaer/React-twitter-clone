import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';  
import  SidebarOption from  './SidebarOption.js';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ExploreIcon from '@mui/icons-material/Explore';
import MailIcon from '@mui/icons-material/Mail';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon /> 
            <SidebarOption Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={ExploreIcon} text="Explore"/>
            <SidebarOption  Icon= {CircleNotificationsIcon} text="Notification"/>
            <SidebarOption  Icon= {MailIcon} text="Messages"/>
            <SidebarOption  Icon= {ListAltIcon} text="Bookmark"/>
            <SidebarOption  Icon= {PermIdentityIcon} text="Lists"/>
            <SidebarOption  Icon= {MoreHorizIcon} text="Profile"/>
           
            
        </div>
    )
}

export default Sidebar
