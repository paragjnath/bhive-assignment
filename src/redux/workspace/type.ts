import { WrokSpace } from "../../types/WorkSpace";

export type WrokSpaceState = {
    workSpaces: WrokSpace[];
    loadingStatus: LoadingStatus;
}

export enum LoadingStatus {
    IDLE = 'IDLE',
    LOADING = 'LOADING',
    FAILED = 'FAILED',
  }
  