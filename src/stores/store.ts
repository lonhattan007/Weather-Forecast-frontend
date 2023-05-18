import { configureStore } from '@reduxjs/toolkit';
import recentLocationsSlice from './recentLocationsSlice';
import currentLocationSlice from './currentLocationSlice';
import currentCoordsSlice from './currentCoordsSlice';
import currentWeatherSlice from './currentWeatherSlice';
import hourlyForecastSlice from './hourlyForecastSlice';
import weeklyForecastSlice from './weeklyForecastSlice';

const store = configureStore({
  reducer: {
    recentLocations: recentLocationsSlice,
    currentLocation: currentLocationSlice,
    currentCoords: currentCoordsSlice,
    currentWeather: currentWeatherSlice,
    hourlyForecast: hourlyForecastSlice,
    weeklyForecast: weeklyForecastSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
