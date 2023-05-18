import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { WeatherForecast } from '@models/WeatherForecast.interface';

interface HourlyForecastState {
  value: WeatherForecast[];
  maxTemp: number;
  minTemp: number;
}

const initialState: HourlyForecastState = {
  value: [],
  maxTemp: 45,
  minTemp: 0,
};

const hourlyForecastSlice = createSlice({
  name: 'hourlyForecast',
  initialState,
  reducers: {
    updateHourlyForecast: (state, action) => {
      state.value = action.payload;
      // Non-null assertion to get max and min temperature boundaries
      const temps = state.value.map((item) => item.tempC!);

      state.maxTemp = Math.max(...temps);
      state.minTemp = Math.min(...temps);
    },
  },
});

export const { updateHourlyForecast } = hourlyForecastSlice.actions;

export const selectHourlyForecast = (state: RootState) => state.hourlyForecast.value;
export const selectHourlyForecastMaxTemp = (state: RootState) => state.hourlyForecast.maxTemp;
export const selectHourlyForecastMinTemp = (state: RootState) => state.hourlyForecast.minTemp;

export default hourlyForecastSlice.reducer;
