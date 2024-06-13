export interface ButtonProps {
  /**
   * @description 按钮类型 可选值 primary / danger / warning / success / info / text
   * @default primary
   */
  type?: string;
  /**
   * @description 自定义样式 { width: '', height: '', borderRadius: '' }
   * @default 可选值
   */
  styles?: React.CSSProperties;
  /**
   * @description 鼠标集成事件
   * @default 可选值
   */
  handleMouseEvent?: (eventType: 'click' | 'mouseDown' | 'mouseUp') => void;
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  children?: React.ReactNode;
}
