import React from 'react';
import { Button } from '../../index';

export default function ButtonDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary">基础按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="link">链接按钮</Button>
    </div>
  );
}
