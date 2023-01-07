import React from 'react'
import './HeaderOption.css'
function HeaderOption({title ,Icon, Avatar}) {
  return (
    <div className='HeaderOption'>
        {Icon && <Icon className ='HeaderOption__icon' />}
        {Avatar &&  <Avatar className='HeaderOption__icon' src=
        {Avatar}/>}
        <h3 className='HeaderOption__title'>{title}</h3>

    </div>
  )
}

export default HeaderOption