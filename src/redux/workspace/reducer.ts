import { createSlice } from '@reduxjs/toolkit';
import { setWorkSpaceList, setLoadingStatus, reset } from './actions';
import {  LoadingStatus, WrokSpaceState } from './type';

 const initialState: WrokSpaceState = {
  workSpaces: [],
  loadingStatus: LoadingStatus.IDLE,
};

const slice = createSlice({
  name: 'workSpaceState',
  initialState,
  reducers: {
    setWorkSpaceList,
    setLoadingStatus,
    reset
  },
});

export const workspaceActions = slice.actions;

export default slice.reducer;
