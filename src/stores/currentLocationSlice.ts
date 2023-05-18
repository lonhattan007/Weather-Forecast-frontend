import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@stores/store';

// Define a type for the slice state
interface CurrentLocationsState {
  value: string;
}

// Define the initial state using that type
const initialState: CurrentLocationsState = {
  value: localStorage.getItem('recentLocations')?.split(',')[0] || 'Ha Noi',
};

const recentLocationsSlice = createSlice({
  name: 'currentLocation',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateLocation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateLocation } = recentLocationsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentLocations = (state: RootState) => state.currentLocation.value;

export default recentLocationsSlice.reducer;
