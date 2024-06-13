import React from 'react';
import { Button } from '../../index';
export default function ButtonDemo1() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
    },
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'primary',
        styles: {
          height: '46px',
          width: '128px',
        },
      },
      '\u57FA\u7840\u6309\u94AE',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'primary',
        styles: {
          borderRadius: '8px',
          fontSize: '16px',
        },
      },
      '\u57FA\u7840\u6309\u94AE',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'primary',
        styles: {
          background: 'linear-gradient(135deg, #6253E1, #04BEFE)',
        },
      },
      '\u57FA\u7840\u6309\u94AE',
    ),
  );
}
