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
        type: 'primary',
      },
      '\u57FA\u7840\u6309\u94AE',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'danger',
      },
      '\u5371\u9669\u6309\u94AE',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'link',
      },
      '\u94FE\u63A5\u6309\u94AE',
    ),
  );
}
