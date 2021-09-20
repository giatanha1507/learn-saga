import { ListParams, ListResponse, Student } from 'models';
import axiosClient from './axiosClient';

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = '/students';
    return axiosClient.get(url, {
      params,
    });
  },
  add(data: Student): Promise<Student> {
    const url = '/students';
    return axiosClient.post(url, data);
  },
  update(params: Student): Promise<Student> {
    const url = '/students';
    return axiosClient.get(url, {
      params,
    });
  },
  remove(id: string): Promise<any> {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },
};

export default studentApi;
