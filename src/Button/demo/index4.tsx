import React from 'react';
import { Button } from '../../index';

export default function ButtonDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <Button
        type="primary"
        handleMouseEvent={(event) => {
          if (event === 'click') alert('鼠标点击事件');
        }}
      >
        点击
      </Button>
      <Button
        type="primary"
        handleMouseEvent={(event) => {
          if (event === 'mouseDown') alert('鼠标按下事件');
        }}
      >
        按下
      </Button>
      <Button
        type="primary"
        handleMouseEvent={(event) => {
          if (event === 'mouseUp') alert('鼠标松开事件');
        }}
      >
        松开
      </Button>
    </div>
  );
}
