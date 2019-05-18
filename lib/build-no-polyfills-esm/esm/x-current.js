import { g as convertTemperature, h as dateTime, a as loadComponent, i as to12HourTime, j as unixEpochToDate, b as classCallCheck, c as createClass, d as inherits, e as possibleConstructorReturn, f as toConsumableArray } from './utilities-38ee2205.js';

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
  }, {
    key: 'iconAlt',
    set: function set(iconAlt) {
      this.shadowRoot.querySelector('#icon').setAttribute('alt', iconAlt);
    }
  }, {
    key: 'iconSrc',
    set: function set(iconSrc) {
      this.shadowRoot.querySelector('#icon').src = iconSrc;
    }
  }, {
    key: 'scale',
    get: function get() {
      return this.getAttribute('scale');
    },
    set: function set(scale) {
      this.setAttribute('scale', scale);
    }
  }, {
    key: 'temperature',
    set: function set(temperature) {
      this.setAttribute('temperature', temperature);

      this.shadowRoot.querySelector('#temperature').textContent = temperature;
    }
  }, {
    key: 'timestamp',
    set: function set(timestamp) {
      this.shadowRoot.querySelector('#time').textContent = to12HourTime(dateTime(unixEpochToDate(timestamp)).H(':').M(':').S().getResults());
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
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

export default XCurrent;
export { load };
//# sourceMappingURL=x-current.js.map
