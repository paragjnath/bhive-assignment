import { RootState } from '../store';

const selectListItems = (state: RootState) => state.workSpaceState.workSpaces;

const selectLoadingStatus = (state: RootState) => state.workSpaceState.loadingStatus;

export const workspaceSelectors = {
  selectListItems,
  selectLoadingStatus,
};
