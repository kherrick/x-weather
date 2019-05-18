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

      var template = '\n  <style>\n    :host {\n      display: block;\n\n      --icon-display: inherit\n    }\n\n    [data-icon] {\n      display: var(--icon-display);\n    }\n\n    ul[data-x-forecast-item] {\n      list-style-type: none;\n\n      padding: 0 0 1rem 1.5rem;\n    }\n\n    ul[data-x-forecast-item] > li {\n      padding: 0.5rem 0 0 0;\n    }\n  </style>\n\n  <ul data-x-forecast-item>\n    <li>\n      <u id="forecastDate"></u>\n    </li>\n    <li data-icon>\n      <img id="icon" />\n    </li>\n    <li>Day: <span id="day"></span>\xB0<span data-scale></span></li>\n    <li>Night: <span id="night"></span>\xB0<span data-scale></span></li>\n  </ul>\n';

      var XForecastItem = function (_CustomElement2) {
        inherits(XForecastItem, _CustomElement2);

        function XForecastItem() {
          classCallCheck(this, XForecastItem);

          var _this = possibleConstructorReturn(this, (XForecastItem.__proto__ || Object.getPrototypeOf(XForecastItem)).call(this));

          var container = document.createElement('div');
          container.innerHTML = template;

          _this.attachShadow({ mode: 'open' }).appendChild(container);
          return _this;
        }

        createClass(XForecastItem, [{
          key: 'attributeChangedCallback',
          value: function attributeChangedCallback(attrName, oldVal, newVal) {
            switch (attrName) {
              case 'day':
                this.shadowRoot.getElementById('day').textContent = newVal;
                break;
              case 'description':
                this.shadowRoot.getElementById('icon').alt = newVal;
                break;
              case 'forecast-date':
                this.shadowRoot.getElementById('forecastDate').textContent = newVal;
                break;
              case 'icon':
                this.shadowRoot.getElementById('icon').src = newVal;
                break;
              case 'night':
                this.shadowRoot.getElementById('night').textContent = newVal;
                break;
              case 'scale':
                this.shadowRoot.querySelectorAll('[data-scale]').forEach(function (element) {
                  element.textContent = newVal;
                });
                break;
            }
          }
        }], [{
          key: 'observedAttributes',
          get: function get() {
            return ['day', 'description', 'forecast-date', 'icon', 'night', 'scale'];
          }
        }]);
        return XForecastItem;
      }(_CustomElement);

      var load = exports('load', function load() {
        return loadComponent({
          customElements: customElements,
          tagName: 'x-forecast-item',
          element: XForecastItem
        });
      });
      exports('default', XForecastItem);

    }
  };
});
//# sourceMappingURL=x-forecast-item.js.map
