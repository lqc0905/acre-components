import React from 'react';
import { ButtonProps } from './interface';
declare class Button extends React.Component<ButtonProps> {
  constructor(props: ButtonProps);
  componentDidMount(): void;
  handleMouseEvent: (eventType: 'click' | 'mouseDown' | 'mouseUp') => void;
  render(): React.JSX.Element;
}
export default Button;
