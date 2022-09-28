import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [navLinks, setNavLinks] = useState(links);
  const [socials, setSocials] = useState(social);
  const [showLinks, setShowLinks] =useState(false);
  const containerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(()=> {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if(showLinks) {
      containerRef.current.style.height = `${linksHeight}px`
    }
    else {
      containerRef.current.style.height = `0px`
    }
  }, [showLinks])

  const linkLsit = navLinks.map((link)=> {
    return (
      <li key={link.id}>
        <a href={link.url}>{link.text}</a>
      </li>
    );
  })

  const socialList = socials.map((item)=> {
    return (
      <li key={item.id}>
        <a href={item.url}>{item.icon}</a>
      </li>
    )
  })

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button 
          onClick={()=> {
            setShowLinks((preLinks)=> !preLinks);
          }}
          type='button' className='nav-toggle'>
          <FaBars />
          </button>
        </div>
        <div className='links-container' ref={containerRef}>
          <ul className='links'  ref={linksRef}>
            {linkLsit}
          </ul>
        </div>
        <ul className="social-icons">
        {socialList}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
