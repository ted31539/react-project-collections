import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const linkList = links.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.url}>
          {link.icon}
          {link.text}
        </a>
      </li>
    );
  });

  const socialList = social.map((item) => {
    return (
      <li key={item.id}>
        <a href={item.url}>{item.icon}</a>
      </li>
    );
  });

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : null}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button onClick={closeSidebar} type='button' className='close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>{linkList}</ul>
      <ul className='social-icons'>{socialList}</ul>
    </aside>
  );
};

export default Sidebar;
