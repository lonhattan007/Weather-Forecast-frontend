import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@stores/store';

const DEFAULT_LOCATIONS = ['Ha Noi', 'Ho Chi Minh', 'Da Nang'];

// Define a type for the slice state
interface LocationsState {
  value: Array<string>;
}

// Define the initial state using that type
const initialState: LocationsState = {
  value: localStorage.getItem('customLocations')?.split(',') || DEFAULT_LOCATIONS,
};

const locationsSlice = createSlice({
  name: 'locations',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addLocation: (state, action) => {
      if (state.value.indexOf(action.payload) === -1) {
        state.value.push(action.payload);
        localStorage.setItem('customLocations', state.value.toString());
      }
    },
  },
});

export const { addLocation } = locationsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLocations = (state: RootState) => state.counter.value;

export default locationsSlice.reducer;
