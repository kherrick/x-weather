// https://openweathermap.org/forecast16

const forecastFixture = {
  "city": {
    "id": 4990729,
    "name": "Detroit",
    "coord": {
      "lon": -83.0568,
      "lat": 42.3487
    },
    "country": "US",
    "population": 713777
  },
  "cod": "200",
  "message": 12.6339847,
  "cnt": 14,
  "list": [
    {
      "dt": 1540673816,
      "temp": {
        "day": 23.5,
        "min": 20.53,
        "max": 23.5,
        "night": 20.53,
        "eve": 23.5,
        "morn": 23.5
      },
      "pressure": 999.33,
      "humidity": 91,
      "weather": [
        {
          "id": 502,
          "main": "Rain",
          "description": "heavy intensity rain",
          "icon": "10d"
        }
      ],
      "speed": 5.82,
      "deg": 178,
      "clouds": 44,
      "rain": 23.71
    }, {
      "dt": 1532192400,
      "temp": {
        "day": 21.63,
        "min": 20.1,
        "max": 22.92,
        "night": 20.26,
        "eve": 20.1,
        "morn": 20.54
      },
      "pressure": 999.22,
      "humidity": 95,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "speed": 5.12,
      "deg": 141,
      "clouds": 92,
      "rain": 6.86
    }, {
      "dt": 1532278800,
      "temp": {
        "day": 19.57,
        "min": 18.14,
        "max": 21.3,
        "night": 18.14,
        "eve": 19.32,
        "morn": 18.89
      },
      "pressure": 1002.96,
      "humidity": 91,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "speed": 4.31,
      "deg": 28,
      "clouds": 92,
      "rain": 0.21
    }, {
      "dt": 1532365200,
      "temp": {
        "day": 26.19,
        "min": 22.91,
        "max": 26.59,
        "night": 23.11,
        "eve": 26.59,
        "morn": 22.91
      },
      "pressure": 1003.55,
      "humidity": 0,
      "weather": [
        {
          "id": 502,
          "main": "Rain",
          "description": "heavy intensity rain",
          "icon": "10d"
        }
      ],
      "speed": 5.64,
      "deg": 74,
      "clouds": 32,
      "rain": 24.52
    }, {
      "dt": 1532451600,
      "temp": {
        "day": 26.91,
        "min": 23.23,
        "max": 26.91,
        "night": 23.23,
        "eve": 25.47,
        "morn": 23.8
      },
      "pressure": 1003.65,
      "humidity": 0,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "speed": 3.49,
      "deg": 132,
      "clouds": 19,
      "rain": 11.25
    }, {
      "dt": 1532538000,
      "temp": {
        "day": 25.94,
        "min": 22.49,
        "max": 25.94,
        "night": 22.49,
        "eve": 25.08,
        "morn": 23.55
      },
      "pressure": 1001.13,
      "humidity": 0,
      "weather": [
        {
          "id": 502,
          "main": "Rain",
          "description": "heavy intensity rain",
          "icon": "10d"
        }
      ],
      "speed": 2,
      "deg": 188,
      "clouds": 23,
      "rain": 21.25
    }, {
      "dt": 1532624400,
      "temp": {
        "day": 26.59,
        "min": 21.65,
        "max": 26.76,
        "night": 23.02,
        "eve": 26.76,
        "morn": 21.65
      },
      "pressure": 1004.49,
      "humidity": 0,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "speed": 2.84,
      "deg": 348,
      "clouds": 0,
      "rain": 0.68
    }, {
      "dt": 1532710800,
      "temp": {
        "day": 27.34,
        "min": 22.86,
        "max": 27.34,
        "night": 22.86,
        "eve": 25.78,
        "morn": 23.3
      },
      "pressure": 1007.89,
      "humidity": 0,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "speed": 1.69,
      "deg": 250,
      "clouds": 23,
      "rain": 2.6
    }, {
      "dt": 1532797200,
      "temp": {
        "day": 26.01,
        "min": 19.71,
        "max": 26.01,
        "night": 19.71,
        "eve": 24.96,
        "morn": 21.56
      },
      "pressure": 1005.95,
      "humidity": 0,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "speed": 4.49,
      "deg": 35,
      "clouds": 71,
      "rain": 2.08
    }, {
      "dt": 1532883600,
      "temp": {
        "day": 26.3,
        "min": 19.88,
        "max": 26.3,
        "night": 20.86,
        "eve": 26,
        "morn": 19.88
      },
      "pressure": 1008.02,
      "humidity": 0,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "sky is clear",
          "icon": "01d"
        }
      ],
      "speed": 3.09,
      "deg": 58,
      "clouds": 0
    }, {
      "dt": 1532970000,
      "temp": {
        "day": 26.96,
        "min": 22.21,
        "max": 26.96,
        "night": 23.02,
        "eve": 24.03,
        "morn": 22.21
      },
      "pressure": 1004.36,
      "humidity": 0,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "speed": 4.04,
      "deg": 179,
      "clouds": 88,
      "rain": 5.8
    }, {
      "dt": 1533056400,
      "temp": {
        "day": 27.75,
        "min": 22.77,
        "max": 27.75,
        "night": 22.77,
        "eve": 25.96,
        "morn": 23.86
      },
      "pressure": 999.28,
      "humidity": 0,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "speed": 5.31,
      "deg": 249,
      "clouds": 83,
      "rain": 1.18
    }, {
      "dt": 1533142800,
      "temp": {
        "day": 25.7,
        "min": 21.4,
        "max": 26.47,
        "night": 22.16,
        "eve": 26.47,
        "morn": 21.4
      },
      "pressure": 1003.12,
      "humidity": 0,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "sky is clear",
          "icon": "01d"
        }
      ],
      "speed": 4.54,
      "deg": 303,
      "clouds": 10
    }, {
      "dt": 1533229200,
      "temp": {
        "day": 26.91,
        "min": 21.67,
        "max": 26.91,
        "night": 21.67,
        "eve": 25.54,
        "morn": 23.67
      },
      "pressure": 995.44,
      "humidity": 0,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "speed": 7.74,
      "deg": 262,
      "clouds": 37,
      "rain": 4.32
    }
  ]
}

export default new Promise(resolve => resolve(forecastFixture))
