import React from 'react'
import logo from '../Assets/logo-alpha-channel-white.png'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.navBar}>
       
       <ul>
        <li><a href='./'>Home</a></li>
        <li><a href='./'>Projects</a></li>
        <li><a href='./'>About Me</a></li>
        <li><a href='./'>Contact</a></li>
       </ul>
       <img className={classes.logo} src={logo} alt="logo"/>

    </nav>
  )
}

export default Navbar