import React from 'react';

import { Numbers } from '../../numbers';

import './content.scss';

export const Content = () => (
  <div className='content'>
    <p>Content</p>
    <Numbers from='2' to='55' odd />
  </div>
);
