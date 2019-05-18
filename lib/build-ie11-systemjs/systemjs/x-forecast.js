System.register(['./utilities-b59a80a0.js'], function (exports, module) {
  'use strict';
  var convertTemperature, dateTime, isObjectEmpty, loadComponent, unixEpochToDate, classCallCheck, createClass, inherits, possibleConstructorReturn, toConsumableArray;
  return {
    setters: [function (module) {
      convertTemperature = module.g;
      dateTime = module.h;
      isObjectEmpty = module.k;
      loadComponent = module.a;
      unixEpochToDate = module.j;
      classCallCheck = module.b;
      createClass = module.c;
      inherits = module.d;
      possibleConstructorReturn = module.e;
      toConsumableArray = module.f;
    }],
    execute: function () {

      // import forecast from '../../fixtures/forecast'

      var template = '\n  <style>\n    :host {\n      display: block;\n\n      --x-forecast-item-float: inherit;\n      --x-forecast-item-width: inherit;\n    }\n\n    x-forecast-item {\n      float: var(--x-forecast-item-float);\n      width: var(--x-forecast-item-width);\n    }\n  </style>\n\n  <div data-x-forecast>\n    <div data-x-forecast-date-container>\n  <div/>\n';

      var XForecast = function (_HTMLElement) {
        inherits(XForecast, _HTMLElement);

        function XForecast() {
          classCallCheck(this, XForecast);

          var _this = possibleConstructorReturn(this, (XForecast.__proto__ || Object.getPrototypeOf(XForecast)).call(this));

          var container = document.createElement('div');
          container.innerHTML = template;

          _this.attachShadow({ mode: 'open' }).appendChild(container);
          return _this;
        }

        createClass(XForecast, [{
          key: 'connectedCallback',
          value: function connectedCallback() {
            var _this2 = this;

            this.refresh().then(function (currentForecast) {
              _this2.render(currentForecast, _this2.days);

              // set this as a class property to be used later
              _this2.currentForecast = currentForecast;
            });
          }
        }, {
          key: 'attributeChangedCallback',
          value: function attributeChangedCallback(attrName, oldVal, newVal) {
            // handle the scale and days attribute change
            if (oldVal === newVal) {
              return;
            }

            if (this.days === null) {
              return;
            }

            if (attrName === 'days' || attrName === 'scale') {
              this.render(this.currentForecast, this.days);
            }
          }
        }, {
          key: '_buildDateContainer',
          value: function _buildDateContainer(forecast, days) {
            var _this3 = this;

            var dateContainer = document.createElement('div');
            dateContainer.setAttribute('data-x-forecast-date-container', '');

            // build forecast list
            if (forecast && !isObjectEmpty(forecast)) {
              var today = dateTime(new Date()).Y('-').m('-').d('').getResults();

              // shorten the forecast to the requested number of days, https://mzl.la/2JDIuy6
              // if the attribute is changed to be smaller
              if (forecast.length > days) {
                forecast.length = days;
              }

              forecast.forEach(function (props) {
                var dt = props.dt,
                    temp = props.temp,
                    pressure = props.pressure,
                    humidity = props.humidity,
                    weather = props.weather,
                    speed = props.speed,
                    deg = props.deg,
                    clouds = props.clouds,
                    rain = props.rain; // eslint-disable-line no-unused-vars

                var dateItem = document.createElement('x-forecast-item');
                dateItem.setAttribute('day', _this3._convertForecast({ scale: _this3.scale, timeOfDayTemp: temp.day }));
                dateItem.setAttribute('description', weather[0].description);
                dateItem.setAttribute('forecast-date', _this3._getDayOfWeek({ dt: dt, today: today }));
                dateItem.setAttribute('icon', 'https://openweathermap.org/img/w/' + weather[0].icon + '.png');
                dateItem.setAttribute('night', _this3._convertForecast({ scale: _this3.scale, timeOfDayTemp: temp.night }));
                dateItem.setAttribute('scale', _this3.scale);

                dateContainer.appendChild(dateItem);
              });
            }

            return dateContainer;
          }
        }, {
          key: '_convertForecast',
          value: function _convertForecast(_ref) {
            var scale = _ref.scale,
                timeOfDayTemp = _ref.timeOfDayTemp;

            return '' + Number.parseFloat(scale === 'F' ? convertTemperature(timeOfDayTemp, 'cToF') : timeOfDayTemp).toFixed(2);
          }
        }, {
          key: '_getDayOfWeek',
          value: function _getDayOfWeek(_ref2) {
            var dt = _ref2.dt,
                today = _ref2.today;

            var timestamp = unixEpochToDate(dt);
            var current = dateTime(timestamp).Y('-').m('-').d().getResults();

            if (current === today) {
              return 'Today:';
            }

            var weekDay = dateTime(timestamp)['date'].toLocaleString('en-US', { weekday: 'long' });
            var ddMM = dateTime(timestamp).m('/').d().getResults();

            return weekDay + ' (' + ddMM + '):';
          }
        }, {
          key: '_getForecast',
          value: function _getForecast(_ref3) {
            var appid = _ref3.appid,
                host = _ref3.host,
                location = _ref3.location;

            if (appid && host && location) {
              return this._serviceHandler({ appid: appid, host: host, location: location }).then(function (result) {
                var city = result.city,
                    cod = result.cod,
                    message = result.message,
                    cnt = result.cnt,
                    list = result.list; // eslint-disable-line no-unused-vars

                return list;
              });
            }
          }
        }, {
          key: '_serviceHandler',
          value: function _serviceHandler(_ref4) {
            var appid = _ref4.appid,
                host = _ref4.host,
                location = _ref4.location;

            var url = 'https://' + host + '/data/2.5/forecast/daily?q=' + location + '&mode=json&units=metric&cnt=14&appid=' + appid; // eslint-disable-line no-unused-vars

            // return forecast
            return fetch(url, {
              method: 'GET'
            }).then(function (res) {
              if (res.ok) {
                return res.json();
              }
            });
          }
        }, {
          key: 'refresh',
          value: function refresh() {
            var config = {
              appid: this.parentElement.getAttribute('appid'),
              host: this.parentElement.getAttribute('host'),
              location: this.parentElement.getAttribute('location')
            };

            return this._getForecast(config);
          }
        }, {
          key: 'render',
          value: function render(res, days) {
            var forecastDayNode = this.shadowRoot.querySelector('[data-x-forecast]');
            var dateContainerNode = this.shadowRoot.querySelector('[data-x-forecast] > [data-x-forecast-date-container]');

            forecastDayNode.replaceChild(this._buildDateContainer(res, days), dateContainerNode);
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
          key: 'days',
          get: function get() {
            return this.getAttribute('days');
          },
          set: function set(days) {
            this.setAttribute('days', days);
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
        }, {
          key: 'scale',
          get: function get() {
            return this.getAttribute('scale');
          },
          set: function set(scale) {
            this.setAttribute('scale', scale);
          }
        }], [{
          key: 'observedAttributes',
          get: function get() {
            return ['days', 'scale'];
          }
        }]);
        return XForecast;
      }(HTMLElement);

      var load = exports('load', function load() {
        return loadComponent({
          customElements: customElements,
          tagName: 'x-forecast',
          element: XForecast
        });
      });
      exports('default', XForecast);

    }
  };
});
//# sourceMappingURL=x-forecast.js.map
