interface Weather {
  _id: string;
  dateTime: Date;
  locationId: string;
  // TODO: Location interface / enum
  location: string;
  // truth_location
  // truthLocation: string;
  // TODO: weatherStatus interface / enum
  weatherStatus: string;
  tempC: number;
  feelsLikeC: number;
  heatIndexC: number;
  maxTempC: number;
  minTempC: number;
  dewPointC: number;
  windChillC: number;
  windSpeedKmph: number;
  windDirDegree: number;
  windGustKmph: number;
  humidity: number;
  pressure: number;
  totalSnowCm: number;
  precipitationMm: number;
  visibility: number;
  cloudCover: number;
  uvIndex: number;
  sunHour: number;
  sunrise: Date;
  sunset: Date;
  moonrise: Date;
  moonset: Date;
  moonIllumination: number;
}

export default Weather;
