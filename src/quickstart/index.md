---
title: 快速上手
nav:
  title: 快速上手
  path: /guide
group:
  path: /quickstart
---

# 快速上手

本节将介绍如何在项目中使用 Element。

## 引入 Element

我们可以按需引入，单独导入某一个组件即可使用。

```js
import React from 'react';
import { Button } from 'pear-element';

export default function () {
  return (
    <div>
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
import {
  Avatar,
  Backtop,
  Breadcrumb,
  Button,
  Card,
  Carousel,
  CarouselItem,
  CheckboxAll,
  CheckboxGroup,
  Collapse,
  Divider,
  Icon,
  InfiniteScroll,
  Input,
  InputNumber,
  Col,
  Row,
  Link,
  Loading,
  MessageBox,
  Notification,
  PageHeader,
  Pagination,
  Popover,
  Progress,
  Radio,
  RadioGroupButton,
  Switch,
  Table,
  Tabs,
  TabPane,
  Tag,
} from 'pear-element';
```

## 开始使用

各个组件的使用方法请参阅它们各自的文档。
