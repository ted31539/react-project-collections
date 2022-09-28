import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const { target } = e;
    const page = target.textContent;
    const targetReact = target.getBoundingClientRect();
    const coordination = {
      left: (targetReact.left + targetReact.right) / 2,
      bottom: targetReact.bottom,
    };
    openSubmenu(page, coordination);
  };

  const handleSubmenu = (e) => {    
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='log' className='nav-logo' />
          <button
            onClick={openSidebar}
            type='button'
            className='btn toggle-btn'>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button
              type='button'
              className='link-btn'
              onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button
              type='button'
              className='link-btn'
              onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button
              type='button'
              className='link-btn'
              onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
