import { getWorkSpaces } from '../../api/workSpace';
import { AppThunk } from '../store';
import { workspaceActions } from './reducer';
import { workspaceSelectors } from './selectors';
import { LoadingStatus } from './type';

export const fetchWorkSpacesThunkAction = (forceReload = false): AppThunk => {
  return async (dispatch, getState) => {
    if (
      workspaceSelectors.selectLoadingStatus(getState()) ===
      LoadingStatus.LOADING
    ) {
      return;
    }
    if (forceReload) {
      dispatch(workspaceActions.reset());
    }
    if (workspaceSelectors.selectListItems(getState()).length === 0) {
      try {
        dispatch(workspaceActions.setLoadingStatus(LoadingStatus.LOADING));
        const workSpaceListResponse = await getWorkSpaces();
        dispatch(workspaceActions.setWorkSpaceList(workSpaceListResponse));
        dispatch(workspaceActions.setLoadingStatus(LoadingStatus.IDLE));
      } catch (error) {
        console.error(error);
        dispatch(workspaceActions.setLoadingStatus(LoadingStatus.FAILED));
      }
    }
  };
};
