import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@stores/store';
import type { Weather } from '@models/Weather';

// Define a type for the slice state
interface CurrentWeatherState {
  value: Weather;
}

// Define the initial state using that type
const initialState: CurrentWeatherState = {
  // First item in the `recentLocations` list
  value: {},
};

const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateCurrentWeather: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateCurrentWeather } = currentWeatherSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentWeather = (state: RootState) => state.currentWeather.value;

export default currentWeatherSlice.reducer;
