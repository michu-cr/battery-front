import axios from 'axios';

const CustomAxios = axios.create({
  baseURL: 'http://localhost:4896/',
  timeout: '4000',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
export default CustomAxios;
