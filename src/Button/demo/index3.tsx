import React from 'react';
import { Button } from '../../index';

export default function ButtonDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button disabled>default</Button>
      <Button
        styles={{ background: '#F6F6F6', color: '#D9D9D9', border: '1px solid #D9D9D9' }}
        disabled
      >
        自定义样式
      </Button>
    </div>
  );
}
