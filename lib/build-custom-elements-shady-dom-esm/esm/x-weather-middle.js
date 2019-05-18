import { a as loadComponent, b as classCallCheck, c as createClass, d as inherits, e as possibleConstructorReturn, f as toConsumableArray } from './utilities-38ee2205.js';

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var template = '\n  <style>\n    :host {\n      display: block;\n    }\n\n    [data-x-weather-middle] {\n      display: grid;\n      grid-area: x-weather-middle;\n      grid-template-columns: repeat( auto-fit, minmax(50%, 1fr) );\n      grid-template-rows: 100%;\n      grid-template-areas: ". .";\n    }\n\n    [data-x-weather-middle] > div {\n      border: 1px solid black;\n      padding: 1rem;\n    }\n\n    ::slotted(div) {\n      border: 1px solid black;\n      padding: 1rem;\n    }\n  </style>\n\n  <div data-x-weather-middle>\n    <slot></slot>\n  </div>\n';

var XWeatherMiddle = function (_CustomElement2) {
  inherits(XWeatherMiddle, _CustomElement2);

  function XWeatherMiddle() {
    classCallCheck(this, XWeatherMiddle);

    var _this = possibleConstructorReturn(this, (XWeatherMiddle.__proto__ || Object.getPrototypeOf(XWeatherMiddle)).call(this));

    var container = document.createElement('div');
    container.innerHTML = template;

    _this.attachShadow({ mode: 'open' }).appendChild(container);
    return _this;
  }

  return XWeatherMiddle;
}(_CustomElement);

var load = function load() {
  return loadComponent({
    customElements: customElements,
    tagName: 'x-weather-middle',
    element: XWeatherMiddle
  });
};

export default XWeatherMiddle;
export { load };
//# sourceMappingURL=x-weather-middle.js.map
