import React from "react";
import { render } from "@testing-library/react";
import RegisterForm from './RegisterForm';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

test('RegisterForm Render', () => {
  const initialState = {
    auth: {
      isAuthenticated: false,
    },
    loading: {
      user: {
        auth: {
          signup: false,
        },
      },
    },
    error: {
      user: {
        auth: {
          signup: false,
        },
      },
    },
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);
  render(
    <Provider store={ store }>
      <RegisterForm />
    </Provider>
  );
});