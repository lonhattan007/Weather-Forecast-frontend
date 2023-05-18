import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@stores/store';
import { DEFAULT_LOCATIONS } from './recentLocationsSlice';

// Define a type for the slice state
interface CurrentLocationState {
  value: string;
}

// Define the initial state using that type
const initialState: CurrentLocationState = {
  // First item in the `recentLocations` list
  value: localStorage.getItem('recentLocations')?.split(',')[0] || DEFAULT_LOCATIONS[0],
};

const currentLocationSlice = createSlice({
  name: 'currentLocation',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateLocation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateLocation } = currentLocationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentLocations = (state: RootState) => state.currentLocation.value;

export default currentLocationSlice.reducer;
