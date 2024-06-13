function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, 'prototype', { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError('Derived constructors may only return object or undefined');
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
import React from 'react';
import Css from './index.module.less';
import classNames from 'classnames';
var Button = /*#__PURE__*/ (function (_React$Component) {
  _inherits(Button, _React$Component);
  var _super = _createSuper(Button);
  function Button(props) {
    var _this;
    _classCallCheck(this, Button);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), 'handleMouseEvent', function (eventType) {
      var handleMouseEvent = _this.props.handleMouseEvent;
      if (handleMouseEvent) handleMouseEvent(eventType);
    });
    return _this;
  }
  _createClass(Button, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var type = this.props.type;
        if (!type) type = 'primary';
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          children = _this$props.children,
          type = _this$props.type,
          _this$props$styles = _this$props.styles,
          styles = _this$props$styles === void 0 ? {} : _this$props$styles,
          disabled = _this$props.disabled;
        return /*#__PURE__*/ React.createElement(
          'div',
          {
            onMouseUp: function onMouseUp() {
              _this2.handleMouseEvent('mouseUp');
            },
            onMouseDown: function onMouseDown() {
              _this2.handleMouseEvent('mouseDown');
            },
            onClick: function onClick() {
              _this2.handleMouseEvent('click');
            },
            className: classNames(
              _defineProperty(
                _defineProperty(
                  _defineProperty(
                    _defineProperty(
                      _defineProperty({}, Css.baseButton, true),
                      Css.disableButton,
                      disabled,
                    ),
                    Css.primaryButton,
                    !disabled && (!type || type === 'primary'),
                  ),
                  Css.dangerButton,
                  !disabled && type === 'danger',
                ),
                Css.linkButton,
                !disabled && type === 'link',
              ),
            ),
            style: styles,
          },
          children,
        );
      },
    },
  ]);
  return Button;
})(React.Component);
export default Button;
