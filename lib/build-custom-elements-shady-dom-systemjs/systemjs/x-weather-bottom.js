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

      var template = '\n  <style>\n    :host {\n      display: block;\n    }\n\n    [data-x-weather-bottom] {\n      display: grid;\n      grid-area: x-weather-bottom;\n      grid-template-columns: repeat( auto-fit, minmax(14.28%, 1fr) );\n      grid-template-rows: 100%;\n      grid-template-areas: ". . . . . . .";\n    }\n\n    [data-x-weather-bottom] > div {\n      border: 1px solid black;\n    }\n\n    ::slotted(div) {\n      border: 1px solid black;\n    }\n  </style>\n\n  <div data-x-weather-bottom>\n    <slot></slot>\n  </div>\n';

      var XWeatherBottom = function (_CustomElement2) {
        inherits(XWeatherBottom, _CustomElement2);

        function XWeatherBottom() {
          classCallCheck(this, XWeatherBottom);

          var _this = possibleConstructorReturn(this, (XWeatherBottom.__proto__ || Object.getPrototypeOf(XWeatherBottom)).call(this));

          var container = document.createElement('div');
          container.innerHTML = template;

          _this.attachShadow({ mode: 'open' }).appendChild(container);
          return _this;
        }

        return XWeatherBottom;
      }(_CustomElement);

      var load = exports('load', function load() {
        return loadComponent({
          customElements: customElements,
          tagName: 'x-weather-bottom',
          element: XWeatherBottom
        });
      });
      exports('default', XWeatherBottom);

    }
  };
});
//# sourceMappingURL=x-weather-bottom.js.map
