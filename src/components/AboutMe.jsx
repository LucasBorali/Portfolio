import React, { useState } from 'react'
import classes from './AboutMe.module.css'
import pictureDesktop from '../Assets/picture-desktop.jpeg'
import {icons} from '../Assets/Constant'


const AboutMe = () => {



  const [selectedButton, setSelectedButton] = useState('Meet Me')


const selectButtonHandler = function(e) {
  if(e.target.id === 'meet-me') {
    setSelectedButton('Meet Me')
  }
  if(e.target.id === 'hard-skills') {
    setSelectedButton('Hard Skills')
  }
  if(e.target.id === 'soft-skills' ) {
    setSelectedButton('Soft Skills')
  }
}

  return (
    <section id='about-me' className={classes.aboutMe}>
      <div className={classes.head}>
        <p className={classes.back}>ABOUT ME</p>
        <p className={classes.front}>Who I am</p>
      </div>
      <div className={classes.panel}>
        <img src={pictureDesktop} alt={pictureDesktop}/>
        <div>
          <ul onClick={selectButtonHandler} className={classes.buttons}>
            <li><button className={selectedButton === 'Meet Me' ? classes.selected : classes.unselected } id='meet-me'>Meet Me</button></li>
            <li><button className={selectedButton === 'Hard Skills' ? classes.selected : classes.unselected } id='hard-skills'>Hard Skills</button></li>
            <li><button className={selectedButton === 'Soft Skills' ? classes.selected : classes.unselected } id='soft-skills'>Soft Skills</button></li>
          </ul>
          {selectedButton === 'Meet Me' ?<div className={classes['display-panel']}><p>other thing</p></div>: ''}
          {selectedButton === 'Hard Skills' ? <div className={classes['display-panel']}><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate sapiente dolor necessitatibus nobis nulla voluptatum optio neque assumenda cupiditate, similique culpa nihil dolores placeat vitae fuga facilis, ipsa natus quae!</p></div>: ''}
          {selectedButton === 'Soft Skills' ? <div className={classes['display-panel']}>
            <ul className={classes['soft-skills-panel']}>
              <li>Communication <img src={icons[0]} alt={icons[0]}/> </li>
              <li>Problem Solving<img src={icons[1]} alt={icons[1]}/></li>
              <li>Attention to Detail  <img src={icons[2]} alt={icons[2]}/></li>
              <li>Time Menagement  <img src={icons[3]} alt={icons[3]}/></li>
              <li>Team Work  <img src={icons[4]} alt={icons[4]}/></li>
              <li>Adaptability  <img src={icons[5]} alt={icons[5]}/></li>
              <li>Creativity  <img src={icons[6]} alt={icons[6]}/></li>
              <li>Critical Thinking  <img src={icons[7]} alt={icons[7]}/></li>
            </ul>
          </div>: ''}
        </div>
      </div>
    </section>

  )
}

export default AboutMe