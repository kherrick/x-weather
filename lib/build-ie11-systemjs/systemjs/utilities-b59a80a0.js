System.register([], function (exports, module) {
  'use strict';
  return {
    execute: function () {

      var classCallCheck = exports('b', function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      });

      var createClass = exports('c', function () {
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
      }());

      var inherits = exports('d', function (subClass, superClass) {
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
      });

      var possibleConstructorReturn = exports('e', function (self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      });

      var toConsumableArray = exports('f', function (arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

          return arr2;
        } else {
          return Array.from(arr);
        }
      });

      var convertTemperature = exports('g', function convertTemperature(t) {
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
      });

      /**
       * attempting to be RFC4122 version 4 compliant adapted from:
       * https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
       */
      var generateUUID = exports('l', function generateUUID() {
        var d = new Date().getTime();

        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
          d += performance.now();
        }

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;

          d = Math.floor(d / 16);

          return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
      });

      // custom getElementById intended for use with undom
      var getElementById = exports('m', function getElementById(id, root) {
        // a linkedList would be more performant in time and space complexity
        var queue = [];

        queue.push(root);

        var currentNode = void 0;

        while (queue.length) {
          currentNode = queue.shift();

          if (currentNode.id === id) {
            return currentNode;
          }

          queue.push.apply(queue, toConsumableArray(currentNode.children));
        }

        return false;
      });

      var isObjectEmpty = exports('k', function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
      });

      var loadComponent = exports('a', function loadComponent(_ref) {
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
      });

      var unixEpochToDate = exports('j', function unixEpochToDate(timestamp) {
        return new Date(timestamp * 1000);
      });

      var dateTime = exports('h', function dateTime(date) {
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
      });

      // input "00:00:00" through "23:59:59"
      var to12HourTime = exports('i', function to12HourTime(timeStamp) {
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
      });

    }
  };
});
//# sourceMappingURL=utilities-b59a80a0.js.map
