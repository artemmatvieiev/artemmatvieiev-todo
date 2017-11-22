import React from 'react';
import './navigation.scss';

const items = ['Home', 'Gallery', 'Contacts'];

export const Navigation = () => {
  const text = 'Home';
  return (
    <nav className="main-nav">
      <ul>
        {
          items.map((item, index) => (
              <li key={index}>
                <a href={`/${item.toLowerCase()}`}>{item}</a>
              </li>
            ) 
          )
        }
      </ul>
    </nav>
  )
};
