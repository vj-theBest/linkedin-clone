import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
function Sidebar() {

    const recentItem = (topic) => {
        return(
        <div className="sidebar__recentItem">
            
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>);
    }

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1519060825752-c4832f2d400a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <Avatar className='sidebar__avatar' />
            <h2> Name</h2>
            <h4>description</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,345</p>
            </div>
            <div className="sidebar__stat">
            <p>Viewes on post</p>
                <p className="sidebar__statNumber">2,000</p>
            </div>
        </div>
        <div className="sidebar__bottom">  
            <p>Recent</p>
            {recentItem('reactJs')}
            {recentItem('programming')}
            {recentItem('software')}
            {recentItem('design')}
            {recentItem('developer')}
            {recentItem('frontenddev')}
        </div>
    </div>
  )
}

export default Sidebar