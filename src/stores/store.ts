import { configureStore } from '@reduxjs/toolkit';
import recentLocationsSlice from './recentLocationsSlice';
import currentLocationSlice from './currentLocationSlice';
import currentCoordsSlice from './currentCoordsSlice';

const store = configureStore({
  reducer: {
    recentLocations: recentLocationsSlice,
    currentLocation: currentLocationSlice,
    currentCoords: currentCoordsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
