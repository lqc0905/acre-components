import React from 'react';
import { Button } from '../../index';
export default function ButtonDemo1() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        justifyContent: 'space-around',
      },
    },
    /*#__PURE__*/ React.createElement(
      Button,
      {
        disabled: true,
      },
      'default',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        styles: {
          background: '#F6F6F6',
          color: '#D9D9D9',
          border: '1px solid #D9D9D9',
        },
        disabled: true,
      },
      '\u81EA\u5B9A\u4E49\u6837\u5F0F',
    ),
  );
}
