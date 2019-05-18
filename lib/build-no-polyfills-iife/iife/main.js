var Main = (function () {
  'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var convertTemperature = function convertTemperature(t) {
    var calcString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'cToF';

    var cToK = function cToK(t) {
      return t + 273.15;
    };
    var kToC = function kToC(t) {
      return t - 273.15;
    };
    var cToF = function cToF(t) {
      return 9 / 5 * t + 32;
    };
    var fToC = function fToC(t) {
      return (t - 32) * 5 / 9;
    };

    return {
      cToK: cToK,
      kToC: kToC,
      cToF: cToF,
      fToC: fToC,
      kToF: function kToF(t) {
        return cToF(kToC(t));
      },
      fToK: function fToK(t) {
        return cToK(fToC(t));
      }
    }[calcString](t);
  };

  var isObjectEmpty = function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  };

  var loadComponent = function loadComponent(_ref) {
    var customElements = _ref.customElements,
        tagName = _ref.tagName,
        element = _ref.element;

    var load = function load(_ref2) {
      var customElements = _ref2.customElements,
          tagName = _ref2.tagName,
          element = _ref2.element;

      customElements.define(tagName, element);
    };

    // Conditional loading of polyfill
    if (window.customElements) {
      load({ customElements: customElements, tagName: tagName, element: element });
    } else {
      document.addEventListener('WebComponentsReady', function () {
        load({ customElements: customElements, tagName: tagName, element: element });
      });
    }
  };

  var unixEpochToDate = function unixEpochToDate(timestamp) {
    return new Date(timestamp * 1000);
  };

  var dateTime = function dateTime(date) {
    return {
      date: date,
      results: '',
      getResults: function getResults() {
        return this.results;
      },
      getTimeStamp: function getTimeStamp() {
        return this.date.getTime();
      },
      Y: function Y(sep) {
        this.results += this.date.getFullYear();

        if (this.sep(sep)) {
          this.results += sep;
        }

        return this;
      },
      m: function m(sep) {
        this.results += this.pad(this.date.getMonth() + 1);

        if (this.sep(sep)) {
          this.results += sep;
        }

        return this;
      },
      d: function d(sep) {
        this.results += this.pad(this.date.getDate());

        if (this.sep(sep)) {
          this.results += sep;
        }

        return this;
      },
      H: function H(sep) {
        this.results += this.pad(this.date.getHours());

        if (this.sep(sep)) {
          this.results += sep;
        }

        return this;
      },
      M: function M(sep) {
        this.results += this.pad(this.date.getMinutes());

        if (this.sep(sep)) {
          this.results += sep;
        }

        return this;
      },
      S: function S(sep) {
        this.results += this.pad(this.date.getSeconds());

        if (this.sep(sep)) {
          this.results += sep;
        }

        return this;
      },
      pad: function pad(val) {
        return val < 10 ? '0' + val : val;
      },
      sep: function sep(_sep) {
        return _sep ? true : false;
      }
    };
  };

  // input "00:00:00" through "23:59:59"
  var to12HourTime = function to12HourTime(timeStamp) {
    var splitTimeStamp = String(timeStamp).split(':');

    var hours = Number(splitTimeStamp[0]);
    var minutes = Number(splitTimeStamp[1]) || 0;
    var seconds = Number(splitTimeStamp[2]) || 0;

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
      hours = minutes = seconds = 0;
    }

    var timeString = '12';

    if (hours > 0 && hours <= 12) {
      timeString = String(hours);
    }

    if (hours > 12) {
      timeString = String(hours % timeString);
    }

    timeString += minutes < 10 ? ':0' + minutes : ':' + minutes;

    timeString += seconds < 10 ? ':0' + seconds : ':' + seconds;

    timeString += hours >= 12 ? ' p.m.' : ' a.m.';

    return timeString;
  };

  function _CustomElement() {
    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
  }
  Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
  Object.setPrototypeOf(_CustomElement, HTMLElement);
  // import current from '../../fixtures/current'

  var template = '\n  <style>\n    :host {\n      display: block;\n\n      --icon-display: inherit\n    }\n\n    [data-icon] {\n      display: var(--icon-display);\n    }\n\n    div[data-x-current] ul {\n      list-style-type: none;\n\n      padding: 0 0 1rem 1.5rem;\n    }\n\n    div[data-x-current] ul > li {\n      padding: 0.5rem 0 0 0;\n    }\n\n    div[data-x-current] #alternateScale {\n      cursor: pointer;\n      border-bottom: 1px dotted;\n    }\n  </style>\n\n  <div data-x-current>\n    <ul>\n      <li><b id="time"></b></li>\n      <li data-icon><img alt="" id="icon"></img></li>\n      <li>Current:</li>\n      <li>\n        <span id="temperature"></span>\xB0<span id="primaryScale"></span> / <span><a id="alternateScale"></a></span>\n      </li>\n    </ul>\n  </div>\n';

  var XCurrent = function (_CustomElement2) {
    inherits(XCurrent, _CustomElement2);

    function XCurrent() {
      classCallCheck(this, XCurrent);

      var _this = possibleConstructorReturn(this, (XCurrent.__proto__ || Object.getPrototypeOf(XCurrent)).call(this));

      var container = document.createElement('div');
      container.innerHTML = template;

      _this.attachShadow({ mode: 'open' }).appendChild(container);
      return _this;
    }

    createClass(XCurrent, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        this.refresh().then(function (currentWeather) {
          _this2.render(currentWeather);
          // set this as a class property to be used later
          _this2.currentWeather = currentWeather;

          _this2.primaryScale = _this2.shadowRoot.querySelector('#primaryScale');
          _this2.alternateScale = _this2.shadowRoot.querySelector('#alternateScale');

          _this2.primaryScale.textContent = _this2.scale;
          _this2.alternateScale.textContent = _this2.scale === 'C' ? 'F' : 'C';

          _this2.alternateScale.onclick = function () {
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText
            // Sometimes people use innerHTML to retrieve or write text inside an element.
            // textContent has better performance because its value is not parsed as HTML.
            // Moreover, using textContent can prevent XSS attacks.
            _this2.scale = _this2.alternateScale.textContent;

            // check for xForecast and set the scale attribute
            var xForecast = _this2.parentElement.querySelector('x-forecast');

            if (xForecast) {
              xForecast.setAttribute('scale', _this2.primaryScale.textContent);
            }
          };
        });
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attrName, oldVal, newVal) {
        // handle the scale attribute change
        if (attrName === 'scale' && oldVal !== newVal && this.alternateScale && this.primaryScale) {
          if (newVal === 'C') {
            this.alternateScale.textContent = 'F';
            this.primaryScale.textContent = newVal;
          }

          if (newVal === 'F') {
            this.alternateScale.textContent = 'C';
            this.primaryScale.textContent = newVal;
          }

          this.render(this.currentWeather);
        }
      }
    }, {
      key: '_getCurrentWeather',
      value: function _getCurrentWeather(_ref) {
        var appid = _ref.appid,
            host = _ref.host,
            location = _ref.location;

        if (appid && host && location) {

          return this._serviceHandler({ appid: appid, host: host, location: location }).then(function (result) {
            var coord = result.coord,
                weather = result.weather,
                base = result.base,
                main = result.main,
                visibility = result.visibility,
                wind = result.wind,
                clouds = result.clouds,
                dt = result.dt,
                sys = result.sys,
                id = result.id,
                name = result.name,
                cod = result.cod; // eslint-disable-line no-unused-vars

            return {
              iconAlt: weather[0].description,
              iconSrc: weather[0].icon,
              temperature: {
                kelvin: main.temp,
                celsius: convertTemperature(main.temp, 'kToC'),
                fahrenheit: convertTemperature(main.temp, 'kToF')
              },
              timestamp: dt
            };
          });
        }
      }
    }, {
      key: '_serviceHandler',
      value: function _serviceHandler(_ref2) {
        var appid = _ref2.appid,
            host = _ref2.host,
            location = _ref2.location;

        var url = 'https://' + host + '/data/2.5/weather?q=' + location + '&appid=' + appid; // eslint-disable-line no-unused-vars

        // return current
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

        return this._getCurrentWeather(config);
      }
    }, {
      key: 'render',
      value: function render(_ref3) {
        var iconAlt = _ref3.iconAlt,
            iconSrc = _ref3.iconSrc,
            temperature = _ref3.temperature,
            timestamp = _ref3.timestamp;

        this.temperature = Number.parseFloat(temperature[this.scale === 'C' ? 'celsius' : 'fahrenheit']).toFixed(2);
        this.iconAlt = iconAlt;
        this.iconSrc = 'https://openweathermap.org/img/w/' + iconSrc + '.png';
        this.timestamp = timestamp;
      }
    }, {
      key: 'appid',
      get: function get$$1() {
        return this.getAttribute('appid');
      },
      set: function set$$1(appid) {
        this.setAttribute('appid', appid);
      }
    }, {
      key: 'host',
      get: function get$$1() {
        return this.getAttribute('host');
      },
      set: function set$$1(host) {
        this.setAttribute('host', host);
      }
    }, {
      key: 'location',
      get: function get$$1() {
        return this.getAttribute('location');
      },
      set: function set$$1(location) {
        this.setAttribute('location', location);
      }
    }, {
      key: 'iconAlt',
      set: function set$$1(iconAlt) {
        this.shadowRoot.querySelector('#icon').setAttribute('alt', iconAlt);
      }
    }, {
      key: 'iconSrc',
      set: function set$$1(iconSrc) {
        this.shadowRoot.querySelector('#icon').src = iconSrc;
      }
    }, {
      key: 'scale',
      get: function get$$1() {
        return this.getAttribute('scale');
      },
      set: function set$$1(scale) {
        this.setAttribute('scale', scale);
      }
    }, {
      key: 'temperature',
      set: function set$$1(temperature) {
        this.setAttribute('temperature', temperature);

        this.shadowRoot.querySelector('#temperature').textContent = temperature;
      }
    }, {
      key: 'timestamp',
      set: function set$$1(timestamp) {
        this.shadowRoot.querySelector('#time').textContent = to12HourTime(dateTime(unixEpochToDate(timestamp)).H(':').M(':').S().getResults());
      }
    }], [{
      key: 'observedAttributes',
      get: function get$$1() {
        return ['scale'];
      }
    }]);
    return XCurrent;
  }(_CustomElement);

  var load = function load() {
    return loadComponent({
      customElements: customElements,
      tagName: 'x-current',
      element: XCurrent
    });
  };

  function _CustomElement$1() {
    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
  }
  Object.setPrototypeOf(_CustomElement$1.prototype, HTMLElement.prototype);
  Object.setPrototypeOf(_CustomElement$1, HTMLElement);

  var template$1 = '\n  <style>\n    :host {\n      display: block;\n\n      --icon-display: inherit\n    }\n\n    [data-icon] {\n      display: var(--icon-display);\n    }\n\n    ul[data-x-forecast-item] {\n      list-style-type: none;\n\n      padding: 0 0 1rem 1.5rem;\n    }\n\n    ul[data-x-forecast-item] > li {\n      padding: 0.5rem 0 0 0;\n    }\n  </style>\n\n  <ul data-x-forecast-item>\n    <li>\n      <u id="forecastDate"></u>\n    </li>\n    <li data-icon>\n      <img id="icon" />\n    </li>\n    <li>Day: <span id="day"></span>\xB0<span data-scale></span></li>\n    <li>Night: <span id="night"></span>\xB0<span data-scale></span></li>\n  </ul>\n';

  var XForecastItem = function (_CustomElement2) {
    inherits(XForecastItem, _CustomElement2);

    function XForecastItem() {
      classCallCheck(this, XForecastItem);

      var _this = possibleConstructorReturn(this, (XForecastItem.__proto__ || Object.getPrototypeOf(XForecastItem)).call(this));

      var container = document.createElement('div');
      container.innerHTML = template$1;

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
      get: function get$$1() {
        return ['day', 'description', 'forecast-date', 'icon', 'night', 'scale'];
      }
    }]);
    return XForecastItem;
  }(_CustomElement$1);

  var load$1 = function load() {
    return loadComponent({
      customElements: customElements,
      tagName: 'x-forecast-item',
      element: XForecastItem
    });
  };

  function _CustomElement$2() {
    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
  }
  Object.setPrototypeOf(_CustomElement$2.prototype, HTMLElement.prototype);
  Object.setPrototypeOf(_CustomElement$2, HTMLElement);
  // import forecast from '../../fixtures/forecast'

  var template$2 = '\n  <style>\n    :host {\n      display: block;\n\n      --x-forecast-item-float: inherit;\n      --x-forecast-item-width: inherit;\n    }\n\n    x-forecast-item {\n      float: var(--x-forecast-item-float);\n      width: var(--x-forecast-item-width);\n    }\n  </style>\n\n  <div data-x-forecast>\n    <div data-x-forecast-date-container>\n  <div/>\n';

  var XForecast = function (_CustomElement2) {
    inherits(XForecast, _CustomElement2);

    function XForecast() {
      classCallCheck(this, XForecast);

      var _this = possibleConstructorReturn(this, (XForecast.__proto__ || Object.getPrototypeOf(XForecast)).call(this));

      var container = document.createElement('div');
      container.innerHTML = template$2;

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
      get: function get$$1() {
        return this.getAttribute('appid');
      },
      set: function set$$1(appid) {
        this.setAttribute('appid', appid);
      }
    }, {
      key: 'days',
      get: function get$$1() {
        return this.getAttribute('days');
      },
      set: function set$$1(days) {
        this.setAttribute('days', days);
      }
    }, {
      key: 'host',
      get: function get$$1() {
        return this.getAttribute('host');
      },
      set: function set$$1(host) {
        this.setAttribute('host', host);
      }
    }, {
      key: 'location',
      get: function get$$1() {
        return this.getAttribute('location');
      },
      set: function set$$1(location) {
        this.setAttribute('location', location);
      }
    }, {
      key: 'scale',
      get: function get$$1() {
        return this.getAttribute('scale');
      },
      set: function set$$1(scale) {
        this.setAttribute('scale', scale);
      }
    }], [{
      key: 'observedAttributes',
      get: function get$$1() {
        return ['days', 'scale'];
      }
    }]);
    return XForecast;
  }(_CustomElement$2);

  var load$2 = function load() {
    return loadComponent({
      customElements: customElements,
      tagName: 'x-forecast',
      element: XForecast
    });
  };

  function _CustomElement$3() {
    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
  }
  Object.setPrototypeOf(_CustomElement$3.prototype, HTMLElement.prototype);
  Object.setPrototypeOf(_CustomElement$3, HTMLElement);

  var template$3 = '\n  <style>\n    :host {\n      display: block;\n\n      --x-weather-location-margin: inherit;\n    }\n\n    div[data-x-weather] #location {\n      border: 0;\n      font-style: italic;\n      margin: var(--x-weather-location-margin);\n      padding: 0 2.5% 0 0;\n      width: 95%;\n    }\n  </style>\n\n  <div data-x-weather>\n    <div><input id="location"></input></div>\n\n    <slot></slot>\n  </div>\n';

  var XWeather = function (_CustomElement2) {
    inherits(XWeather, _CustomElement2);

    function XWeather() {
      classCallCheck(this, XWeather);

      var _this = possibleConstructorReturn(this, (XWeather.__proto__ || Object.getPrototypeOf(XWeather)).call(this));

      var container = document.createElement('div');
      container.innerHTML = template$3;

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
      get: function get$$1() {
        return this.getAttribute('appid');
      },
      set: function set$$1(appid) {
        this.setAttribute('appid', appid);
      }
    }, {
      key: 'host',
      get: function get$$1() {
        return this.getAttribute('host');
      },
      set: function set$$1(host) {
        this.setAttribute('host', host);
      }
    }, {
      key: 'location',
      get: function get$$1() {
        return this.getAttribute('location');
      },
      set: function set$$1(location) {
        this.setAttribute('location', location);
      }
    }], [{
      key: 'observedAttributes',
      get: function get$$1() {
        return ['appid', 'host', 'location'];
      }
    }]);
    return XWeather;
  }(_CustomElement$3);

  var load$3 = function load() {
    return loadComponent({
      customElements: customElements,
      tagName: 'x-weather',
      element: XWeather
    });
  };

  // get components

  load();
  load$1();
  load$2();

  load$3();

  var main = {
    XCurrent: XCurrent, XForecastItem: XForecastItem, XForecast: XForecast, XWeather: XWeather
  };

  return main;

}());
//# sourceMappingURL=main.js.map
