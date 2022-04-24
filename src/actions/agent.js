import axios from 'axios';
import store from '../store';
import { authConstants } from './user/constants';

const agent = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT,
});

const { dispatch } = store;
agent.interceptors.response.use(
  (res) => {
    if (res.status === 401) {
      console.log(res);
      dispatch({ type: authConstants.TOKEN_EXPIRED });
      return Promise.reject(res.data.error);
    }
    return res;
  },
  (error) => Promise.reject(error), // not 2xx
);

export default agent;
