import { React, useEffect, useState } from 'react';

import classes from './Navbar.module.css';
import ReactDOM from 'react-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos && window.innerWidth <= 500) {
        document.getElementById('navbar').style.top = '0';
      } else if(prevScrollPos < currentScrollPos && window.innerWidth <= 500){
        document.getElementById('navbar').style.top =
          '-150px';
      }
      setPrevScrollPos(currentScrollPos);
      
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const displayMenuHandler = function (e) {
    if (activeMenu === false) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  };

  const overlayHandler = function () {
    setActiveMenu(false);
  };


  return (
    <nav id="navbar" className={classes.navBar}>
      {window.innerWidth <= 500 ? (
        <div className={classes.overlay}>
          <button onClick={displayMenuHandler}>
            <svg
              fill="#fff"
              width="800px"
              height="800px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.844 6.050c-0.256-0.256-0.381-0.581-0.381-0.975s0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381s0.381 0.581 0.381 0.975-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381zM31.306 14.963c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381zM31.306 25.819c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.131 0.975 0.381z"></path>
            </svg>
          </button>
          {activeMenu &&
            ReactDOM.createPortal(
              <div onClick={overlayHandler} className={classes['card-menu']}>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#about-me">About Me</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>,
              document.getElementById('window-root')
            )}
        </div>
      ) : (
        <div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          
        </div>
        
      )}
    </nav>
  );
};

export default Navbar;
