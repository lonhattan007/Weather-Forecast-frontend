interface WeatherForecast {
  _id?: string;
  location?: string;
  locationId?: string;
  dateTime?: string;
  tempC?: number;
  isRaining?: boolean;
  chanceOfRain?: number;
  maxTempC?: number;
  minTempC?: number;
}

export type { WeatherForecast };
