import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import {  Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';



function Header() {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const signOut = () => {

        auth.signOut().then(() => {
            dispatch(logout())
        }
            )
    }

    return (
        <div className="header">
            
            <div className="header__left">
              
              <IconButton>
                  <MenuIcon/>
                  <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png" alt=""/>
                  </IconButton>
              
            </div>
            <div className="header__middle">
                 <SearchIcon />
                     <input placeholder="Search Email" type="text"></input>
                    <ArrowDropDownIcon className="header_inputCart" /> 

                    </div>

            <div className="header__right">



            <IconButton><AppsIcon /></IconButton>
            <IconButton><NotificationsActiveIcon /></IconButton>
            
            <IconButton onClick={signOut}><Avatar src={user.photoUrl} /></IconButton>
            

            </div>
            

            
        </div>
    )
}

export default Header
