import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@stores/store';
import type { Coordinates } from 'src/models/Coordinates.interface';

// Define a type for the slice state
interface CurrentCoordinates {
  value: Coordinates | null;
}

// Define the initial state using that type
const initialState: CurrentCoordinates = {
  value: null,
};

const currentCoordsSlice = createSlice({
  name: 'currentCoords',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrentCoords: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { setCurrentCoords } = currentCoordsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentCoords = (state: RootState) => state.currentCoords.value;

export default currentCoordsSlice.reducer;
