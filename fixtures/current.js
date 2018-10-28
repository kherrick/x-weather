// https://openweathermap.org/current

const currentWeatherFixture = {
  "coord": {
    "lon": -83.06,
    "lat": 42.35
  },
  "weather": [
    {
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 297.06,
    "pressure": 1008,
    "humidity": 78,
    "temp_min": 295.15,
    "temp_max": 299.15
  },
  "visibility": 24140,
  "wind": {
    "speed": 2.6,
    "deg": 130
  },
  "clouds": {
    "all": 75
  },
  "dt": 1532134800,
  "sys": {
    "type": 1,
    "id": 3735,
    "message": 0.0049,
    "country": "US",
    "sunrise": 1532168050,
    "sunset": 1532221359
  },
  "id": 4990729,
  "name": "Detroit",
  "cod": 200
}

export default new Promise(resolve => resolve(currentWeatherFixture))
