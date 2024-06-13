import React from 'react';
import { Button } from '../../index';

export default function ButtonDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <Button type="primary" styles={{ height: '46px', width: '128px' }}>
        基础按钮
      </Button>
      <Button type="primary" styles={{ borderRadius: '8px', fontSize: '16px' }}>
        基础按钮
      </Button>
      <Button type="primary" styles={{ background: 'linear-gradient(135deg, #6253E1, #04BEFE)' }}>
        基础按钮
      </Button>
    </div>
  );
}
