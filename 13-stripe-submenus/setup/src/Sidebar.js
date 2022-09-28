import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const {closeSidebar, isSidebarOpen} = useGlobalContext();

  const sublinksList = sublinks.map((link, index) => {
    const { page, links } = link;
    return (
      <article key={index}>
        <h4>{page}</h4>
        <div className='sidebar-sublinks'>
          {links.map((item, itemIndex) => {
            return (
              <a href={item.url} key={itemIndex}>
                {item.icon}
                {item.label}
              </a>
            );
          })}
        </div>
      </article>
    );
  });

  return (
    <div className={`sidebar-wrapper ${isSidebarOpen? 'show' : null}`}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <ul className='sidebar-links'>{sublinksList}</ul>
      </aside>
    </div>
  );
};

export default Sidebar;
