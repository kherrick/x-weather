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

      var template = '\n  <style>\n    :host {\n      display: block;\n\n      --x-weather-location-margin: inherit;\n    }\n\n    div[data-x-weather] #location {\n      border: 0;\n      font-style: italic;\n      margin: var(--x-weather-location-margin);\n      padding: 0 2.5% 0 0;\n      width: 95%;\n    }\n  </style>\n\n  <div data-x-weather>\n    <div><input id="location"></input></div>\n\n    <slot></slot>\n  </div>\n';

      var XWeather = function (_CustomElement2) {
        inherits(XWeather, _CustomElement2);

        function XWeather() {
          classCallCheck(this, XWeather);

          var _this = possibleConstructorReturn(this, (XWeather.__proto__ || Object.getPrototypeOf(XWeather)).call(this));

          var container = document.createElement('div');
          container.innerHTML = template;

          _this.attachShadow({ mode: 'open' }).appendChild(container);
          return _this;
        }

        createClass(XWeather, [{
          key: 'connectedCallback',
          value: function connectedCallback() {
            var _this2 = this;

            this._upgradeProperty('appid');
            this._upgradeProperty('host');
            this._upgradeProperty('location');

            this.xCurrent = this.querySelector('x-current');
            this.xForecast = this.querySelector('x-forecast');

            this._renderLocation(this.location);

            var location = this.shadowRoot.querySelector('#location');

            location.addEventListener('change', function () {
              _this2.location = location.value;

              _this2.xCurrent.refresh().then(function (currentWeather) {
                _this2.xCurrent.render(currentWeather);
                // set this as a class property to be used later
                _this2.xCurrent.currentWeather = currentWeather;
              });

              _this2.xForecast.refresh().then(function (currentForecast) {
                _this2.xForecast.render(currentForecast);
                // set this as a class property to be used later
                _this2.xForecast.currentForecast = currentForecast;
              });
            });
          }
        }, {
          key: 'attributeChangedCallback',
          value: function attributeChangedCallback(attrName, oldVal, newVal) {
            if (oldVal !== newVal && attrName === 'appid' || attrName === 'host' || attrName === 'location') {
              if (attrName === 'location') {
                this._renderLocation(this.location);
              }

              if (this.xCurrent) {
                this.xCurrent.setAttribute(attrName, newVal);
              }

              if (this.xForecast) {
                this.xForecast.setAttribute(attrName, newVal);
              }
            }
          }
        }, {
          key: '_renderLocation',
          value: function _renderLocation(location) {
            this.shadowRoot.querySelector('#location').value = location;
          }
        }, {
          key: '_upgradeProperty',
          value: function _upgradeProperty(prop) {
            if (this.hasOwnProperty(prop)) {
              var value = this[prop];

              delete this[prop];

              this[prop] = value;
            }
          }
        }, {
          key: 'appid',
          get: function get() {
            return this.getAttribute('appid');
          },
          set: function set(appid) {
            this.setAttribute('appid', appid);
          }
        }, {
          key: 'host',
          get: function get() {
            return this.getAttribute('host');
          },
          set: function set(host) {
            this.setAttribute('host', host);
          }
        }, {
          key: 'location',
          get: function get() {
            return this.getAttribute('location');
          },
          set: function set(location) {
            this.setAttribute('location', location);
          }
        }], [{
          key: 'observedAttributes',
          get: function get() {
            return ['appid', 'host', 'location'];
          }
        }]);
        return XWeather;
      }(_CustomElement);

      var load = exports('load', function load() {
        return loadComponent({
          customElements: customElements,
          tagName: 'x-weather',
          element: XWeather
        });
      });
      exports('default', XWeather);

    }
  };
});
//# sourceMappingURL=x-weather.js.map
