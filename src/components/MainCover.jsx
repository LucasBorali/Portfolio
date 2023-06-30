import React from 'react'
import classes from './MainCover.module.css'
import heroPictureDesktop from '../Assets/heroPicture-desktop.jpg'
const MainCover = () => {
  return (
    <section id='home' className={classes.cover}>
        <header>
            <p>Hi there! I'm Lucas Borali,</p>
            <h1>Front-End Developer</h1>
            <p></p>
            <div className={classes.btns}>
            <button><a href="#projects">PROJECTS</a></button>
            <button><a href="#about-me">ABOUT ME</a></button>
            <button><a href="#contact">CONTACT</a></button>
            </div>
        </header>
        <div className={classes.heroPic}>
            <img src={heroPictureDesktop} alt="Lucas Borali"/>
        </div>
    </section>
  )
}

export default MainCover