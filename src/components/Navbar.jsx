import {React} from 'react'
import logo from '../Assets/logo-alpha-channel-white.png'
import classes from './Navbar.module.css'

const Navbar = () => {
 


  return (
    <nav className={classes.navBar}>
       
       <ul>
        <li ><a href='#home'>Home</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#about-me'>About Me</a></li>
        <li><a href='#contact'>Contact</a></li>
       </ul>
       <img className={classes.logo} src={logo} alt="logo"/>

    </nav>
  )
}

export default Navbar