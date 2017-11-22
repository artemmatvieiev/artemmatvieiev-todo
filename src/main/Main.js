import React from 'react';

import { Aside } from './aside';
import { Content } from './content';
import { Greeting } from '../greeting';

import './main.scss'

export const Main = () => {
  
  return (
    <main className='main'>
      <Greeting time={ new Date().getHours() } name='Artem'/>
      <h1 className='main-title'>Main</h1>
      <Aside />
      <Content />
    </main>
  )
};