interface Weather {
  _id: string;
  // date_time
  dateTime: Date;
  // location_id
  locationId: string;
  // TODO: Location interface / enum
  location: string;
  // truth_location
  truthLocation: string;
  // weather_status
  weatherStatus: string;
  tempC: number;
  // FeelsLikeC
  feelsLikeC: number;
  // HeatIndexC
  heatIndexC: number;
  // maxtempC
  maxTempC: number;
  // mintempC
  minTempC: number;
  // DewPointC
  dewPointC: number;
  // WindChillC
  windChillC: number;
  // windspeedKmph
  windSpeedKmph: number;
  // winddirDegree
  windDirDegree: number;
  // WindGustKmph
  windGustKmph: number;
  humidity: number;
  pressure: number;
  // TODO: Weather status enums
  // totalSnow_cm
  totalSnowCm: number;
  // precipMM
  precipitationMm: number;
  visibility: number;
  // cloudcover
  cloudCover: number;
  uvIndex: number;
  sunHour: number;
  // TODO: hour, not date
  sunrise: Date;
  // TODO: hour, not date
  sunset: Date;
  // TODO: hour, not date
  moonrise: Date;
  // TODO: hour, not date
  moonset: Date;
  // moon_illumination
  moonIllumination: number;
}

export default Weather;
