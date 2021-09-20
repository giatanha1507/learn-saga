import { ListParams, ListResponse, Student } from 'models';
import axiosClient from './axiosClient';

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = '/cities';
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
};

export default studentApi;
