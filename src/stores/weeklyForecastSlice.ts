import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { WeatherForecast } from '@models/WeatherForecast.interface';

interface WeeklyForecastState {
  value: WeatherForecast[];
  maxTemp: number;
  minTemp: number;
}

const initialState: WeeklyForecastState = {
  value: [],
  maxTemp: 45,
  minTemp: 0,
};

const weeklyForecastSlice = createSlice({
  name: 'dailyForecast',
  initialState,
  reducers: {
    updateWeeklyForecast: (state, action) => {
      state.value = action.payload;

      const maxTemps = state.value.map((item) => item.maxTempC!);
      state.maxTemp = Math.max(...maxTemps);

      const minTemps = state.value.map((item) => item.minTempC!);
      state.minTemp = Math.min(...minTemps);
    },
  },
});

export const { updateWeeklyForecast } = weeklyForecastSlice.actions;

export const selectWeeklyForecast = (state: RootState) => state.weeklyForecast.value;
export const selectWeeklyForecastMaxTemp = (state: RootState) => state.weeklyForecast.maxTemp;
export const selectWeeklyForecastMinTemp = (state: RootState) => state.weeklyForecast.minTemp;

export default weeklyForecastSlice.reducer;
