import React from 'react'
import './sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import { Button, IconButton } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption'
import StarIcon from '@material-ui/icons/Star';
import SnoozeIcon from '@material-ui/icons/Snooze';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { openSendMessage } from './features/mailSlice';
import {  useDispatch } from "react-redux"



function Sidebar() {
    
     const dispatch = useDispatch()
    return (
        <div className="sidebar">
            
    <Button
     startIcon={<AddIcon fontSize="large"/>} 
     className="sidebar__compose" 
     onClick={()=>dispatch(openSendMessage())}
     >Composed

     </Button>

    <SidebarOption Icon={ InboxIcon } title="inbox"  number={54} selected={true} />
<SidebarOption Icon={StarIcon} title="Starred" number={32}/>
<SidebarOption Icon={SnoozeIcon} title="Snoozed" number={32}/>
<SidebarOption Icon={LabelImportantIcon} title="important" number={32}/>
<SidebarOption Icon={DraftsIcon} title="Draft" number={32}/>
<SidebarOption Icon={ExpandMoreIcon} title="More" number={32}/>


<div className="sidebar__footer">

    <div className="sidebar__footericon"></div>
    <IconButton ><PersonIcon /></IconButton>
    <IconButton>< DuoIcon   /></IconButton>
    <IconButton>< PhoneIcon   /></IconButton>
</div>

             </div>
    )
}

export default Sidebar
