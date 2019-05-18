System.register(['./utilities-b59a80a0.js'], function (exports, module) {
  'use strict';
  var loadComponent, classCallCheck, createClass, inherits, possibleConstructorReturn, toConsumableArray;
  return {
    setters: [function (module) {
      loadComponent = module.a;
      classCallCheck = module.b;
      createClass = module.c;
      inherits = module.d;
      possibleConstructorReturn = module.e;
      toConsumableArray = module.f;
    }],
    execute: function () {

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

      var load = exports('load', function load() {
        return loadComponent({
          customElements: customElements,
          tagName: 'x-weather-top',
          element: XWeatherTop
        });
      });
      exports('default', XWeatherTop);

    }
  };
});
//# sourceMappingURL=x-weather-top.js.map
