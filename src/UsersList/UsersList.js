import React from 'react';

import { User } from './User';

import './usersList.scss';

export const UsersList = ({ users }) => {
  if (!users) {
    return null;
  }
  
  return (
    <ol className='users-list'>
      { 
        users.map( ({firstName, lastName, age}) => {
          if (!(firstName && lastName && age)) {
            return null;
          }

          return (
            <li key={ Date.now() + Math.random() }>
              <User 
                firstName={ firstName } 
                lastName={ lastName }
                age={ age }
              />
            </li>
          );
        })
      }
    </ol>
  );
};
