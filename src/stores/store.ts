import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '@components/App/counterSlice';
import recentLocationsSlice from './recentLocationsSlice';
import currentCoordsSlice from './currentCoordsSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    recentLocations: recentLocationsSlice,
    currentCoords: currentCoordsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
