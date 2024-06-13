import React from 'react';
import Css from './index.module.less';
import classNames from 'classnames';

import { ButtonProps } from './interface';

class Button extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }
  componentDidMount() {
    let { type } = this.props;
    if (!type) type = 'primary';
  }

  handleMouseEvent = (eventType: 'click' | 'mouseDown' | 'mouseUp') => {
    const { handleMouseEvent } = this.props;
    if (handleMouseEvent) handleMouseEvent(eventType);
  };

  render() {
    const { children, type, styles = {}, disabled } = this.props;
    return (
      <div
        onMouseUp={() => {
          this.handleMouseEvent('mouseUp');
        }}
        onMouseDown={() => {
          this.handleMouseEvent('mouseDown');
        }}
        onClick={() => {
          this.handleMouseEvent('click');
        }}
        className={classNames({
          [Css.baseButton]: true,
          [Css.disableButton]: disabled,
          [Css.primaryButton]: !disabled && (!type || type === 'primary'),
          [Css.dangerButton]: !disabled && type === 'danger',
          [Css.linkButton]: !disabled && type === 'link',
        })}
        style={styles}
      >
        {children}
      </div>
    );
  }
}

export default Button;
