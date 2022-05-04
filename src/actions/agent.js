import axios from 'axios';
import store from '../store';
import { authConstants } from './user/constants';

const agent = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT,
});

const { dispatch } = store;
agent.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 400) {
      return Promise.reject(error.response.data.error);
    }
    if (error.response.status === 401) {
      dispatch({ type: authConstants.TOKEN_EXPIRED });
      return Promise.reject(error.response.data.error);
    }
    return Promise.reject(error);
  }
  ,
);

export default agent;
