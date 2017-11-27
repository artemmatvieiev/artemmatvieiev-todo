import React from 'react';

export const List = ({ items, clickHandler, className, field = 'name' }) => (
  <ul className={ className || null }>{ items.map( item => 
    <li 
      key={ item.id || Date.now() + Math.random() } 
      onClick={ clickHandler ? () => clickHandler(item) : null }
    >
      { item[field] }
    </li>)}
  </ul>
);
