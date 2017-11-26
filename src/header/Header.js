import React, { Component } from 'react';

import { Navigation } from '../navigation';

import './header.scss';

const items = ['Home', 'Gallery', 'Contacts'];

export class Header extends Component {
  render() {
    return (
      <header className='header'>
        <Navigation list={ items } />
      </header>
    );
  }
};
