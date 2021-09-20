import { City, ListResponse } from 'models';
import axiosClient from './axiosClient';

const citiApi = {
  getAll(): Promise<ListResponse<City>> {
    const url = '/cities';
    return axiosClient.get(url);
  },
};

export default citiApi;
