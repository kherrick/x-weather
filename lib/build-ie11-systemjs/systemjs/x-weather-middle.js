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

      var template = '\n  <style>\n    :host {\n      display: block;\n    }\n\n    [data-x-weather-middle] {\n      display: grid;\n      grid-area: x-weather-middle;\n      grid-template-columns: repeat( auto-fit, minmax(50%, 1fr) );\n      grid-template-rows: 100%;\n      grid-template-areas: ". .";\n    }\n\n    [data-x-weather-middle] > div {\n      border: 1px solid black;\n      padding: 1rem;\n    }\n\n    ::slotted(div) {\n      border: 1px solid black;\n      padding: 1rem;\n    }\n  </style>\n\n  <div data-x-weather-middle>\n    <slot></slot>\n  </div>\n';

      var XWeatherMiddle = function (_HTMLElement) {
        inherits(XWeatherMiddle, _HTMLElement);

        function XWeatherMiddle() {
          classCallCheck(this, XWeatherMiddle);

          var _this = possibleConstructorReturn(this, (XWeatherMiddle.__proto__ || Object.getPrototypeOf(XWeatherMiddle)).call(this));

          var container = document.createElement('div');
          container.innerHTML = template;

          _this.attachShadow({ mode: 'open' }).appendChild(container);
          return _this;
        }

        return XWeatherMiddle;
      }(HTMLElement);

      var load = exports('load', function load() {
        return loadComponent({
          customElements: customElements,
          tagName: 'x-weather-middle',
          element: XWeatherMiddle
        });
      });
      exports('default', XWeatherMiddle);

    }
  };
});
//# sourceMappingURL=x-weather-middle.js.map
