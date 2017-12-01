import React from 'react';
import './navigation.scss';

export const Navigation = (props) => {
  if (!props.list) {
    return null;
  }

  return (
    <nav className="main-nav">
      <ul>
        {
          props.list.map(item => (
            <li key={Date.now() + Math.random()}>
              <a href={`/${item.toLowerCase()}`}>{ item }</a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};
