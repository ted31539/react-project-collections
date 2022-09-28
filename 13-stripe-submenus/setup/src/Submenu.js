import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const [columns, setColumns] = useState('col-2')
  const containerRef = useRef(null);

  const {
    location,
    isSubMenuOpen,
    page: { page, links },
  } = useGlobalContext();

  const linkList = links.map((link) => {
    return (
      <a href={link.url} key={link.label}>
        {link.icon}
        {link.label}
      </a>
    );
  });

  useEffect(()=> {
    setColumns('col-2');
    const submenu = containerRef.current;
    const {left, bottom} = location;
    submenu.style.left = `${left}px`;
    submenu.style.top = `${bottom}px`;
    if(linkList.length > 2) {
      setColumns('col-3');
    }
    if(linkList.length > 3) {
      setColumns('col-4')
    }
  }, [page, links, location])

  return (
    <aside
      ref={containerRef}
      className={`submenu ${isSubMenuOpen ? 'show' : null}`}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>{linkList}</div>
      </section>
    </aside>
  );
};

export default Submenu;
