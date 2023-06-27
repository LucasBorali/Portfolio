import React from 'react'
import classes from './AboutMe.module.css'

const AboutMe = () => {
  return (
    <section id='about-me' className={classes.aboutMe}>
      <div className={classes.head}>
        <p className={classes.back}>ABOUT ME</p>
        <p className={classes.front}>Who I am</p>
      </div>
    </section>
  )
}

export default AboutMe