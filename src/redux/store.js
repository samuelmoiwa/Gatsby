import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missionSlice';
import rocketReducer from './rocket/rockets';

const loadState = () => {
  try {
  const serializedState = localStorage.getItem('state');
  if (serializedState === null) {
  return undefined;
  }
  return JSON.parse(serializedState);
  } catch (err) {
  return undefined;
  }
  };

  const saveState = (state) => {
  try {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
  } catch (err) {
  // Ignore write errors.
  }
  };

  const persistedState = loadState();

  const store = configureStore ({
  reducer: {
  mission: missionSlice,
  rockets: rocketReducer,
  },
  preloadedState: persistedState,
  });

  store.subscribe(() => {
  saveState(store.getState());
});

  export default store;
