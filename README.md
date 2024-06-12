# 安装

`npm i acre-components`

## 使用

## 引入 components

按需引入，单独导入某一个组件即可使用。

```js
import React from 'react';
import { Button } from 'acre-components';

export default function ButtonDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary">基础按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="info">信息按钮</Button>
    </div>
  );
}
```

完整导入组件列表。

```js
import { Button } from 'acre-components';
```

## 使用文档

> 文档参考链接 https://lqc0905.github.io/acre-components/#/

> npm 链接 https://www.npmjs.com/package/acre-components

> github 链接 https://github.com/lqc0905/acre-components

# 注

## 仅作为个人学习用，如有问题请在线联系 issues！
