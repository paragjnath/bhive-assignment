import { AxiosResponse } from 'axios';
import { WrokSpace } from '../types/WorkSpace';
import { apiClient } from './apiClient';

export const getWorkSpaces = async () => {
  const axiosResponse: AxiosResponse<WrokSpace[]> = await apiClient.get(
    'data.json'
    
  );
  return axiosResponse.data;
};
