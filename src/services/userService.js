import { request } from './request';

export const login = data => request('user', 'post', data);
