import { WrokSpace } from '../../types/WorkSpace';
import { LoadingStatus, WrokSpaceState } from './type';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export const setWorkSpaceList: CaseReducer<
  WrokSpaceState,
  PayloadAction<WrokSpace[]>
> = (state, action) => {
  return {
    ...state,
    workSpaces: action.payload,
  };
};

export const setLoadingStatus: CaseReducer<
  WrokSpaceState,
  PayloadAction<LoadingStatus>
> = (state, action) => {
  return {
    ...state,
    loadingStatus: action.payload,
  };
};

export const reset = (state: WrokSpaceState) => {
  return {
    ...state,
    workSpaces: [],
    loadingStatus: LoadingStatus.IDLE,
  };
};
