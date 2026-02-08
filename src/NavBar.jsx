import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div id='grid1'>
      <div>BRIAN K. MAINA</div>
      {/* Internal navigation */}
      <div className='grid-items1 pr-20'>
        <Link to='/Services'className='nav-items '>•Services•</Link>
        <Link to='/Projects'className='nav-items' style={{paddingLeft:'2vh'}}>•Projects•</Link>
        <Link to='/WorkLog'className='nav-items' style={{paddingLeft:'2vh'}}>•WorkLog•</Link>
      </div>
      
      {/* External links */}
      <nav className='grid-items1'>
        <a href='https://github.com/BmKaranja'className='nav-items' target='_blank' rel='noopener noreferrer'>GitHub</a>
        <a href='https://www.linkedin.com/in/b-karanja'className='nav-items' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        <a href='https://www.instagram.com/it.s._bryan/' className='nav-items'target='_blank' rel='noopener noreferrer'>Instagram</a>
      </nav>
    </div>
  )
}

export default NavBar
