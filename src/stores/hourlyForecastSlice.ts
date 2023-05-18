import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { WeatherForecast } from '@models/WeatherForecast';

interface HourlyForecastState {
  value: WeatherForecast[];
}

const initialState: HourlyForecastState = {
  value: [],
};

const hourlyForecastSlice = createSlice({
  name: 'hourlyForecast',
  initialState,
  reducers: {
    updateHourlyForecast: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateHourlyForecast } = hourlyForecastSlice.actions;

export const selectHourlyForecast = (state: RootState) => state.hourlyForecast.value;

export default hourlyForecastSlice.reducer;
