System.register(['./x-current.js', './x-forecast-item.js', './x-forecast.js', './x-weather.js', './utilities-b59a80a0.js'], function (exports, module) {
  'use strict';
  var XCurrent, load, XForecastItem, load$1, XForecast, load$2, XWeather, load$3;
  return {
    setters: [function (module) {
      XCurrent = module.default;
      load = module.load;
    }, function (module) {
      XForecastItem = module.default;
      load$1 = module.load;
    }, function (module) {
      XForecast = module.default;
      load$2 = module.load;
    }, function (module) {
      XWeather = module.default;
      load$3 = module.load;
    }, function () {}],
    execute: function () {

      // get components

      load();
      load$1();
      load$2();

      load$3();

      var main = exports('default', {
        XCurrent: XCurrent, XForecastItem: XForecastItem, XForecast: XForecast, XWeather: XWeather
      });

    }
  };
});
//# sourceMappingURL=main.js.map
