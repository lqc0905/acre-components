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
        handleMouseEvent: function handleMouseEvent(event) {
          if (event === 'click') alert('鼠标点击事件');
        },
      },
      '\u70B9\u51FB',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'primary',
        handleMouseEvent: function handleMouseEvent(event) {
          if (event === 'mouseDown') alert('鼠标按下事件');
        },
      },
      '\u6309\u4E0B',
    ),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        type: 'primary',
        handleMouseEvent: function handleMouseEvent(event) {
          if (event === 'mouseUp') alert('鼠标松开事件');
        },
      },
      '\u677E\u5F00',
    ),
  );
}
