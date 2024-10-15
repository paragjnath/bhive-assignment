import axios from 'axios';
import * as environment from '../environment';

export const apiClient = axios.create({
  baseURL: environment.apiBaseUrl,
});