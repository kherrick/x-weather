import { a as loadComponent, b as classCallCheck, c as createClass, d as inherits, e as possibleConstructorReturn, f as toConsumableArray } from './utilities-38ee2205.js';

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var template = '\n  <style>\n    :host {\n      display: block;\n    }\n\n    [data-x-weather-top] {\n      display: grid;\n      grid-area: x-weather-top;\n    }\n\n    [data-x-weather-top] > div {\n      margin-bottom: 1rem;\n    }\n\n    ::slotted(div) {\n      margin-bottom: 1rem;\n    }\n  </style>\n\n  <div data-x-weather-top>\n    <slot></slot>\n  </div>\n';

var XWeatherTop = function (_CustomElement2) {
  inherits(XWeatherTop, _CustomElement2);

  function XWeatherTop() {
    classCallCheck(this, XWeatherTop);

    var _this = possibleConstructorReturn(this, (XWeatherTop.__proto__ || Object.getPrototypeOf(XWeatherTop)).call(this));

    var container = document.createElement('div');
    container.innerHTML = template;

    _this.attachShadow({ mode: 'open' }).appendChild(container);
    return _this;
  }

  return XWeatherTop;
}(_CustomElement);

var load = function load() {
  return loadComponent({
    customElements: customElements,
    tagName: 'x-weather-top',
    element: XWeatherTop
  });
};

export default XWeatherTop;
export { load };
//# sourceMappingURL=x-weather-top.js.map
