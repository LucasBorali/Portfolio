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
            <button>PROJECTS</button>
            <button>ABOUT ME</button>
            <button>CONTACT</button>
            </div>
        </header>
        <div className={classes.heroPic}>
            <img src={heroPictureDesktop} alt="Lucas Borali"/>
        </div>
    </section>
  )
}

export default MainCover