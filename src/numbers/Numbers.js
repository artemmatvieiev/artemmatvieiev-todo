import React from 'react';

import './numbers.scss';

let numbersArr = [];

const getNumbersArr = props => {
  for (let i = 0, j = +props.from; j <= +props.to; i++, j++) {
    numbersArr[i] = j;
  }
  if( props.hasOwnProperty('odd') ) {
    numbersArr = numbersArr.filter( num => num % 2 !== 0 );
    return numbersArr;
  }
  if( props.hasOwnProperty('even') ) {
    numbersArr = numbersArr.filter( num => num % 2 === 0 );
    return numbersArr;
  }
  return numbersArr;
};

export const Numbers = props => {
  getNumbersArr(props);

  return (
    <ul className='numbers'>
      { numbersArr.map((number, index) => (
            <li key={index}>
              {number}
            </li>
          ) 
        ) 
      }
    </ul>
  )
};
