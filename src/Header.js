import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption.js';
import { Home } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className='header'>
        
        <div className="header__left">
            <img src="https://img.icons8.com/color/48/null/linkedin.png" alt="" />

            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>

        </div>
        <div className="header__right">
            <HeaderOption title="Home" Icon={Home}/>
            <HeaderOption  Icon={SupervisorAccountIcon}title="My network"/>
            <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
            <HeaderOption title="Messaging" Icon={ChatIcon}/>
            <HeaderOption title="Notification" Icon={NotificationsIcon}/>
            <HeaderOption Avatar={AccountCircleIcon} title="me"/>
        </div>
    </div>
  );
}

export default Header