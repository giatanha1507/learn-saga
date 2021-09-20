import { ListParams, ListResponse, Student } from 'models';
import axiosClient from './axiosClient';

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = '/cities';
    return axiosClient.get(url, {
      params,
    });
  },
};

export default studentApi;
