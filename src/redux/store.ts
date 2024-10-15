import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import layoutReducer from './workspace/reducer';

export const store = configureStore({
  reducer: {
    workSpaceState: layoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
