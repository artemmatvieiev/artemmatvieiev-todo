import React from 'react';

import { UsersList } from '../../UsersList';

import './aside.scss';

const users = [
	{firstName:'Artem', lastName:'Matveev', age: 35},
  {firstName:'Igor', lastName:'Bilous', age: 36},
  {firstName:'Jane', lastName:'Smith', age: 21}
];

export const Aside = () => (
  <aside className='aside'>
    <p>Aside</p>
    <UsersList users={ users } />
  </aside>
);
