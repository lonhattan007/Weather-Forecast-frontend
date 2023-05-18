import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { WeatherForecast } from '@models/WeatherForecast';

interface WeeklyForecastState {
  value: WeatherForecast[];
}

const initialState: WeeklyForecastState = {
  value: [],
};

const weeklyForecastSlice = createSlice({
  name: 'dailyForecast',
  initialState,
  reducers: {
    updateWeeklyForecast: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateWeeklyForecast } = weeklyForecastSlice.actions;

export const selectWeeklyForecast = (state: RootState) => state.weeklyForecast.value;

export default weeklyForecastSlice.reducer;
