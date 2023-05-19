import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@stores/store';

const DEFAULT_LOCATIONS = ['Ho Chi Minh', 'Ha Noi', 'Da Nang'];

// Define a type for the slice state
interface RecentLocationsState {
  value: string[];
}

// Define the initial state using that type
const initialState: RecentLocationsState = {
  value: localStorage.getItem('recentLocations')?.split(',') || DEFAULT_LOCATIONS,
};

const recentLocationsSlice = createSlice({
  name: 'recentLocations',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addLocation: (state, action) => {
      const elemIndex = state.value.indexOf(action.payload);

      // If the location is not in the array, add it to the top of the array
      // and remove the last element
      if (elemIndex === -1) {
        state.value = [action.payload, ...state.value.slice(0, -1)];
      }

      // If the location is already in the array, move it to the top of the array
      // but do nothing if it's already the first element
      if (elemIndex > 0) {
        state.value = [state.value[elemIndex], ...state.value.slice(0, elemIndex), ...state.value.slice(elemIndex + 1)];
      }

      // Save the state to local storage
      localStorage.setItem('recentLocations', state.value.toString());
    },
    rearrangeLocation: (state, action) => {
      // Get the location's index
      const elemIndex = state.value.indexOf(action.payload);

      // Move it to the top of the array
      state.value = [state.value[elemIndex], ...state.value.slice(0, elemIndex), ...state.value.slice(elemIndex + 1)];

      // Save the state to local storage
      localStorage.setItem('recentLocations', state.value.toString());
    },
  },
});

export { DEFAULT_LOCATIONS };

export const { addLocation, rearrangeLocation } = recentLocationsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectRecentLocations = (state: RootState) => state.recentLocations.value;

export default recentLocationsSlice.reducer;
