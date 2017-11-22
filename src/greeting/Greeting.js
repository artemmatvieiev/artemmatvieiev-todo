import React from 'react';

import './greeting.scss';

const getTextGreeting = (hours, name) => {
  if (hours >= 22 || hours >= 0 && hours < 3) 
    return name ? `Good night, ${name}` : 'Good night!'; 
  if (hours >= 3 && hours < 12)
    return name ? `Good morning, ${name}!` : 'Good morning!';
  if (hours >= 12 && hours < 18)
    return name ? `Good afternoon, ${name}!` : 'Good afternoon!';
  if (hours >= 18 && hours < 22) 
    return name ? `Good evening, ${name}!` : 'Good evening!';
};

export const Greeting = props => {
  return (
      <p className='greeting'>{ getTextGreeting(props.time, props.name) }</p>
  )
};