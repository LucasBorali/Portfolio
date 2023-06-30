import React, { useState } from 'react';
import classes from './AboutMe.module.css';
import pictureDesktop from '../Assets/picture-desktop.jpeg';
import { icons, hardSkillIcons } from '../Assets/Constant';

const AboutMe = () => {
  const [selectedButton, setSelectedButton] = useState('Meet Me');

  const selectButtonHandler = function (e) {
    if (e.target.id === 'meet-me') {
      setSelectedButton('Meet Me');
    }
    if (e.target.id === 'hard-skills') {
      setSelectedButton('Hard Skills');
    }
    if (e.target.id === 'soft-skills') {
      setSelectedButton('Soft Skills');
    }
  };

  return (
    <section id="about-me" className={classes.aboutMe}>
      <div className={classes.head}>
        <p className={classes.back}>ABOUT ME</p>
        <p className={classes.front}>Who I am</p>
      </div>
      <div className={classes.panel}>
        <img className={classes.mobileOnly} src={pictureDesktop} alt={pictureDesktop} />
        <div>
          <ul onClick={selectButtonHandler} className={classes.buttons}>
            <li>
              <button
                className={
                  selectedButton === 'Meet Me'
                    ? classes.selected
                    : classes.unselected
                }
                id="meet-me"
              >
                Meet Me
              </button>
            </li>
            <li>
              <button
                className={
                  selectedButton === 'Hard Skills'
                    ? classes.selected
                    : classes.unselected
                }
                id="hard-skills"
              >
                Hard Skills
              </button>
            </li>
            <li>
              <button
                className={
                  selectedButton === 'Soft Skills'
                    ? classes.selected
                    : classes.unselected
                }
                id="soft-skills"
              >
                Soft Skills
              </button>
            </li>
          </ul>
          {selectedButton === 'Meet Me' ? (
            <div className={classes['display-panel']}>
              <p>
                I am a Frontend Developer based in São Paulo, Brazil. Yes, I
                love coding and decided to live through my passion, but I'd like
                to share some other parts of my life too.
              </p>
              <p>
                Art is an important part of me, any kind of art, to be honest. A
                few years ago I discovered that I really like to draw and one
                day would be cool to risk myself into painting. Often I find
                myself cleaning my house while I dance and sing. This is the
                kind of person I am.
              </p>
              <p>
                I love cinema, but my choice for movies can go from a Disney
                musical movie to a Titanic kind and then somenthing like all of
                Resident Evil ones.
              </p>
              <p>
                Well, this is who I am. Creative and passionate, always wanting
                to live on a way that makes my eyes shine.{' '}
              </p>
            </div>
          ) : (
            ''
          )}
          {selectedButton === 'Hard Skills' ? (
            <div className={classes['display-panel']}>
              <ul className={classes['hard-skills-panel']}>
                <li>
                  HTML
                  <img src={hardSkillIcons[0]} alt={hardSkillIcons[0]} />{' '}
                </li>
                <li>
                  CSS
                  <img src={hardSkillIcons[1]} alt={hardSkillIcons[1]} />
                </li>
                <li>
                  JavaScript
                  <img src={hardSkillIcons[2]} alt={hardSkillIcons[2]} />
                </li>
                <li>
                  React
                  <img src={hardSkillIcons[3]} alt={hardSkillIcons[3]} />
                </li>
                <li>
                  Git
                  <img src={hardSkillIcons[4]} alt={hardSkillIcons[4]} />
                </li>
                <li>
                  Responsiveness
                  <img src={hardSkillIcons[5]} alt={hardSkillIcons[5]} />
                </li>
              </ul>
            </div>
          ) : (
            ''
          )}
          {selectedButton === 'Soft Skills' ? (
            <div className={classes['display-panel']}>
              <ul className={classes['soft-skills-panel']}>
                <li>
                  Communication <img src={icons[0]} alt={icons[0]} />{' '}
                </li>
                <li>
                  Problem Solving
                  <img src={icons[1]} alt={icons[1]} />
                </li>
                <li>
                  Attention to Detail <img src={icons[2]} alt={icons[2]} />
                </li>
                <li>
                  Time Menagement <img src={icons[3]} alt={icons[3]} />
                </li>
                <li>
                  Team Work <img src={icons[4]} alt={icons[4]} />
                </li>
                <li>
                  Adaptability <img src={icons[5]} alt={icons[5]} />
                </li>
                <li>
                  Creativity <img src={icons[6]} alt={icons[6]} />
                </li>
                <li>
                  Critical Thinking <img src={icons[7]} alt={icons[7]} />
                </li>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
