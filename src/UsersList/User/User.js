import React from 'react';

export const User = ({firstName, lastName, age}) => (
  <p>{ `${ firstName } ${ lastName } ${ age } ` }</p>
);