/* eslint-disable no-tabs */
/* eslint-disable no-undef */
import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import LoginForm from './LoginForm';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

test('LoginForm Render', () => {
  const initialState = {
    auth: {
      isAuthenticated: false,
    },
    loading: {
      user: {
        auth: {},
      },
    },
    error: {
      user: {
        auth: {},
      },
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const container = render(
    <BrowserRouter>
      <Provider store={store}>
        <LoginForm />
      </Provider>
    </BrowserRouter>,
  );
  expect(container).toMatchInlineSnapshot(`
Object {
  "asFragment": [Function],
  "baseElement": <body>
    <div
      id="chakra-toast-portal"
    >
      <ul
        id="chakra-toast-manager-top"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column; margin: 0px auto;"
      />
      <ul
        id="chakra-toast-manager-top-left"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column;"
      />
      <ul
        id="chakra-toast-manager-top-right"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column;"
      />
      <ul
        id="chakra-toast-manager-bottom-left"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column;"
      />
      <ul
        id="chakra-toast-manager-bottom"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column; margin: 0px auto;"
      />
      <ul
        id="chakra-toast-manager-bottom-right"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column;"
      />
    </div>
    <div>
      <div
        class="chakra-stack css-1clhiew"
      >
        <div
          class="css-aijmsl"
        >
          <div
            class="chakra-stack css-1clhiew"
          >
            <div
              class="chakra-stack css-d83h2"
            >
              <img
                alt="Logo"
                class="chakra-image css-90a3ld"
                src="../logo/big-logo.png"
              />
            </div>
            <div
              class="chakra-stack css-1clhiew"
            >
              <button
                class="chakra-button css-5c2176"
                disabled=""
                type="button"
              >
                <span
                  class="chakra-button__icon css-1wh2kri"
                >
                  <svg
                    aria-hidden="true"
                    enable-background="new 0 0 48 48"
                    fill="currentColor"
                    focusable="false"
                    height="1em"
                    stroke="currentColor"
                    stroke-width="0"
                    version="1.1"
                    viewBox="0 0 48 48"
                    width="1em"
                    x="0px"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0px"
                  >
                    <path
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      fill="#FFC107"
                    />
                    <path
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      fill="#1976D2"
                    />
                  </svg>
                </span>
                Continue with Google
              </button>
              <div
                class="chakra-stack css-84zodg"
              >
                <hr
                  aria-orientation="horizontal"
                  class="chakra-divider css-1upb9tn"
                />
                <p
                  class="chakra-text css-bwkwih"
                >
                  or
                </p>
                <hr
                  aria-orientation="horizontal"
                  class="chakra-divider css-1upb9tn"
                />
              </div>
            </div>
            <form>
              <div
                class="chakra-stack css-17kdbol"
              >
                <div
                  class="chakra-stack css-17kdbol"
                >
                  <div
                    class="chakra-form-control css-0"
                    role="group"
                  >
                    <input
                      aria-required="true"
                      class="chakra-input css-1i52ium"
                      id="login-username"
                      label="Username"
                      placeholder="Username"
                      required=""
                      type="text"
                      value=""
                    />
                  </div>
                  <div
                    class="chakra-form-control css-0"
                    role="group"
                  >
                    <div
                      class="chakra-input__group css-4302v8"
                    >
                      <input
                        aria-required="true"
                        class="chakra-input css-1klm41n"
                        id="login-password"
                        label="Password"
                        placeholder="Password"
                        required=""
                        type="password"
                        value=""
                      />
                      <div
                        class="chakra-input__right-element css-dp9r5f"
                      >
                        <button
                          aria-label="Reveal password"
                          class="chakra-button css-1q06s4d"
                          type="button"
                        >
                          <svg
                            aria-hidden="true"
                            fill="currentColor"
                            focusable="false"
                            height="1em"
                            stroke="currentColor"
                            stroke-width="0"
                            viewBox="0 0 20 20"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clip-rule="evenodd"
                              d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                              fill-rule="evenodd"
                            />
                            <path
                              d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="chakra-stack css-1clhiew"
                >
                  <button
                    class="chakra-button css-5c2176"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <div
                    class="chakra-stack css-14lxv93"
                  >
                    <a
                      class="chakra-link css-1t06xl"
                      to="/"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          class="css-aijmsl"
        >
          <div
            class="chakra-stack css-1clhiew"
          >
            <p
              class="chakra-text css-uxnog1"
            >
              Don't have an account?
               
              <a
                class="chakra-link css-0"
                href="/register"
              >
                Join now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>,
  "container": <div>
    <div
      class="chakra-stack css-1clhiew"
    >
      <div
        class="css-aijmsl"
      >
        <div
          class="chakra-stack css-1clhiew"
        >
          <div
            class="chakra-stack css-d83h2"
          >
            <img
              alt="Logo"
              class="chakra-image css-90a3ld"
              src="../logo/big-logo.png"
            />
          </div>
          <div
            class="chakra-stack css-1clhiew"
          >
            <button
              class="chakra-button css-5c2176"
              disabled=""
              type="button"
            >
              <span
                class="chakra-button__icon css-1wh2kri"
              >
                <svg
                  aria-hidden="true"
                  enable-background="new 0 0 48 48"
                  fill="currentColor"
                  focusable="false"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 48 48"
                  width="1em"
                  x="0px"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0px"
                >
                  <path
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    fill="#FFC107"
                  />
                  <path
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    fill="#1976D2"
                  />
                </svg>
              </span>
              Continue with Google
            </button>
            <div
              class="chakra-stack css-84zodg"
            >
              <hr
                aria-orientation="horizontal"
                class="chakra-divider css-1upb9tn"
              />
              <p
                class="chakra-text css-bwkwih"
              >
                or
              </p>
              <hr
                aria-orientation="horizontal"
                class="chakra-divider css-1upb9tn"
              />
            </div>
          </div>
          <form>
            <div
              class="chakra-stack css-17kdbol"
            >
              <div
                class="chakra-stack css-17kdbol"
              >
                <div
                  class="chakra-form-control css-0"
                  role="group"
                >
                  <input
                    aria-required="true"
                    class="chakra-input css-1i52ium"
                    id="login-username"
                    label="Username"
                    placeholder="Username"
                    required=""
                    type="text"
                    value=""
                  />
                </div>
                <div
                  class="chakra-form-control css-0"
                  role="group"
                >
                  <div
                    class="chakra-input__group css-4302v8"
                  >
                    <input
                      aria-required="true"
                      class="chakra-input css-1klm41n"
                      id="login-password"
                      label="Password"
                      placeholder="Password"
                      required=""
                      type="password"
                      value=""
                    />
                    <div
                      class="chakra-input__right-element css-dp9r5f"
                    >
                      <button
                        aria-label="Reveal password"
                        class="chakra-button css-1q06s4d"
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          fill="currentColor"
                          focusable="false"
                          height="1em"
                          stroke="currentColor"
                          stroke-width="0"
                          viewBox="0 0 20 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                            fill-rule="evenodd"
                          />
                          <path
                            d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="chakra-stack css-1clhiew"
              >
                <button
                  class="chakra-button css-5c2176"
                  type="submit"
                >
                  Sign in
                </button>
                <div
                  class="chakra-stack css-14lxv93"
                >
                  <a
                    class="chakra-link css-1t06xl"
                    to="/"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        class="css-aijmsl"
      >
        <div
          class="chakra-stack css-1clhiew"
        >
          <p
            class="chakra-text css-uxnog1"
          >
            Don't have an account?
             
            <a
              class="chakra-link css-0"
              href="/register"
            >
              Join now
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>,
  "debug": [Function],
  "findAllByAltText": [Function],
  "findAllByDisplayValue": [Function],
  "findAllByLabelText": [Function],
  "findAllByPlaceholderText": [Function],
  "findAllByRole": [Function],
  "findAllByTestId": [Function],
  "findAllByText": [Function],
  "findAllByTitle": [Function],
  "findByAltText": [Function],
  "findByDisplayValue": [Function],
  "findByLabelText": [Function],
  "findByPlaceholderText": [Function],
  "findByRole": [Function],
  "findByTestId": [Function],
  "findByText": [Function],
  "findByTitle": [Function],
  "getAllByAltText": [Function],
  "getAllByDisplayValue": [Function],
  "getAllByLabelText": [Function],
  "getAllByPlaceholderText": [Function],
  "getAllByRole": [Function],
  "getAllByTestId": [Function],
  "getAllByText": [Function],
  "getAllByTitle": [Function],
  "getByAltText": [Function],
  "getByDisplayValue": [Function],
  "getByLabelText": [Function],
  "getByPlaceholderText": [Function],
  "getByRole": [Function],
  "getByTestId": [Function],
  "getByText": [Function],
  "getByTitle": [Function],
  "queryAllByAltText": [Function],
  "queryAllByDisplayValue": [Function],
  "queryAllByLabelText": [Function],
  "queryAllByPlaceholderText": [Function],
  "queryAllByRole": [Function],
  "queryAllByTestId": [Function],
  "queryAllByText": [Function],
  "queryAllByTitle": [Function],
  "queryByAltText": [Function],
  "queryByDisplayValue": [Function],
  "queryByLabelText": [Function],
  "queryByPlaceholderText": [Function],
  "queryByRole": [Function],
  "queryByTestId": [Function],
  "queryByText": [Function],
  "queryByTitle": [Function],
  "rerender": [Function],
  "unmount": [Function],
}
`);
});

test('Only send password', () => {
  const initialState = {
    auth: {
      isAuthenticated: false,
    },
    loading: {
      user: {
        auth: {},
      },
    },
    error: {
      user: {
        auth: {},
      },
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  const container = render(
    <BrowserRouter>
      <Provider store={store}>
        <LoginForm />
      </Provider>
    </BrowserRouter>,
  );
  const password1 = screen.getByPlaceholderText('Password');
  fireEvent.change(password1, { target: { value: 'test1' } });
  fireEvent.click(screen.getByText('Sign in'));
  expect(container).toMatchInlineSnapshot(`
Object {
  "asFragment": [Function],
  "baseElement": <body>
    <div
      id="chakra-toast-portal"
    >
      <ul
        id="chakra-toast-manager-top"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column; margin: 0px auto;"
      />
      <ul
        id="chakra-toast-manager-top-left"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column;"
      />
      <ul
        id="chakra-toast-manager-top-right"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column;"
      />
      <ul
        id="chakra-toast-manager-bottom-left"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column;"
      />
      <ul
        id="chakra-toast-manager-bottom"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column; margin: 0px auto;"
      />
      <ul
        id="chakra-toast-manager-bottom-right"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column;"
      />
    </div>
    <div>
      <div
        class="chakra-stack css-1clhiew"
      >
        <div
          class="css-aijmsl"
        >
          <div
            class="chakra-stack css-1clhiew"
          >
            <div
              class="chakra-stack css-d83h2"
            >
              <img
                alt="Logo"
                class="chakra-image css-90a3ld"
                src="../logo/big-logo.png"
              />
            </div>
            <div
              class="chakra-stack css-1clhiew"
            >
              <button
                class="chakra-button css-5c2176"
                disabled=""
                type="button"
              >
                <span
                  class="chakra-button__icon css-1wh2kri"
                >
                  <svg
                    aria-hidden="true"
                    enable-background="new 0 0 48 48"
                    fill="currentColor"
                    focusable="false"
                    height="1em"
                    stroke="currentColor"
                    stroke-width="0"
                    version="1.1"
                    viewBox="0 0 48 48"
                    width="1em"
                    x="0px"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0px"
                  >
                    <path
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      fill="#FFC107"
                    />
                    <path
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      fill="#1976D2"
                    />
                  </svg>
                </span>
                Continue with Google
              </button>
              <div
                class="chakra-stack css-84zodg"
              >
                <hr
                  aria-orientation="horizontal"
                  class="chakra-divider css-1upb9tn"
                />
                <p
                  class="chakra-text css-bwkwih"
                >
                  or
                </p>
                <hr
                  aria-orientation="horizontal"
                  class="chakra-divider css-1upb9tn"
                />
              </div>
            </div>
            <form>
              <div
                class="chakra-stack css-17kdbol"
              >
                <div
                  class="chakra-stack css-17kdbol"
                >
                  <div
                    class="chakra-form-control css-0"
                    role="group"
                  >
                    <input
                      aria-required="true"
                      class="chakra-input css-1i52ium"
                      id="login-username"
                      label="Username"
                      placeholder="Username"
                      required=""
                      type="text"
                      value=""
                    />
                  </div>
                  <div
                    class="chakra-form-control css-0"
                    role="group"
                  >
                    <div
                      class="chakra-input__group css-4302v8"
                    >
                      <input
                        aria-required="true"
                        class="chakra-input css-1klm41n"
                        id="login-password"
                        label="Password"
                        placeholder="Password"
                        required=""
                        type="password"
                        value="test1"
                      />
                      <div
                        class="chakra-input__right-element css-dp9r5f"
                      >
                        <button
                          aria-label="Reveal password"
                          class="chakra-button css-1q06s4d"
                          type="button"
                        >
                          <svg
                            aria-hidden="true"
                            fill="currentColor"
                            focusable="false"
                            height="1em"
                            stroke="currentColor"
                            stroke-width="0"
                            viewBox="0 0 20 20"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clip-rule="evenodd"
                              d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                              fill-rule="evenodd"
                            />
                            <path
                              d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="chakra-stack css-1clhiew"
                >
                  <button
                    class="chakra-button css-5c2176"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <div
                    class="chakra-stack css-14lxv93"
                  >
                    <a
                      class="chakra-link css-1t06xl"
                      to="/"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          class="css-aijmsl"
        >
          <div
            class="chakra-stack css-1clhiew"
          >
            <p
              class="chakra-text css-uxnog1"
            >
              Don't have an account?
               
              <a
                class="chakra-link css-0"
                href="/register"
              >
                Join now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>,
  "container": <div>
    <div
      class="chakra-stack css-1clhiew"
    >
      <div
        class="css-aijmsl"
      >
        <div
          class="chakra-stack css-1clhiew"
        >
          <div
            class="chakra-stack css-d83h2"
          >
            <img
              alt="Logo"
              class="chakra-image css-90a3ld"
              src="../logo/big-logo.png"
            />
          </div>
          <div
            class="chakra-stack css-1clhiew"
          >
            <button
              class="chakra-button css-5c2176"
              disabled=""
              type="button"
            >
              <span
                class="chakra-button__icon css-1wh2kri"
              >
                <svg
                  aria-hidden="true"
                  enable-background="new 0 0 48 48"
                  fill="currentColor"
                  focusable="false"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 48 48"
                  width="1em"
                  x="0px"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0px"
                >
                  <path
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    fill="#FFC107"
                  />
                  <path
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    fill="#1976D2"
                  />
                </svg>
              </span>
              Continue with Google
            </button>
            <div
              class="chakra-stack css-84zodg"
            >
              <hr
                aria-orientation="horizontal"
                class="chakra-divider css-1upb9tn"
              />
              <p
                class="chakra-text css-bwkwih"
              >
                or
              </p>
              <hr
                aria-orientation="horizontal"
                class="chakra-divider css-1upb9tn"
              />
            </div>
          </div>
          <form>
            <div
              class="chakra-stack css-17kdbol"
            >
              <div
                class="chakra-stack css-17kdbol"
              >
                <div
                  class="chakra-form-control css-0"
                  role="group"
                >
                  <input
                    aria-required="true"
                    class="chakra-input css-1i52ium"
                    id="login-username"
                    label="Username"
                    placeholder="Username"
                    required=""
                    type="text"
                    value=""
                  />
                </div>
                <div
                  class="chakra-form-control css-0"
                  role="group"
                >
                  <div
                    class="chakra-input__group css-4302v8"
                  >
                    <input
                      aria-required="true"
                      class="chakra-input css-1klm41n"
                      id="login-password"
                      label="Password"
                      placeholder="Password"
                      required=""
                      type="password"
                      value="test1"
                    />
                    <div
                      class="chakra-input__right-element css-dp9r5f"
                    >
                      <button
                        aria-label="Reveal password"
                        class="chakra-button css-1q06s4d"
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          fill="currentColor"
                          focusable="false"
                          height="1em"
                          stroke="currentColor"
                          stroke-width="0"
                          viewBox="0 0 20 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                            fill-rule="evenodd"
                          />
                          <path
                            d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="chakra-stack css-1clhiew"
              >
                <button
                  class="chakra-button css-5c2176"
                  type="submit"
                >
                  Sign in
                </button>
                <div
                  class="chakra-stack css-14lxv93"
                >
                  <a
                    class="chakra-link css-1t06xl"
                    to="/"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        class="css-aijmsl"
      >
        <div
          class="chakra-stack css-1clhiew"
        >
          <p
            class="chakra-text css-uxnog1"
          >
            Don't have an account?
             
            <a
              class="chakra-link css-0"
              href="/register"
            >
              Join now
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>,
  "debug": [Function],
  "findAllByAltText": [Function],
  "findAllByDisplayValue": [Function],
  "findAllByLabelText": [Function],
  "findAllByPlaceholderText": [Function],
  "findAllByRole": [Function],
  "findAllByTestId": [Function],
  "findAllByText": [Function],
  "findAllByTitle": [Function],
  "findByAltText": [Function],
  "findByDisplayValue": [Function],
  "findByLabelText": [Function],
  "findByPlaceholderText": [Function],
  "findByRole": [Function],
  "findByTestId": [Function],
  "findByText": [Function],
  "findByTitle": [Function],
  "getAllByAltText": [Function],
  "getAllByDisplayValue": [Function],
  "getAllByLabelText": [Function],
  "getAllByPlaceholderText": [Function],
  "getAllByRole": [Function],
  "getAllByTestId": [Function],
  "getAllByText": [Function],
  "getAllByTitle": [Function],
  "getByAltText": [Function],
  "getByDisplayValue": [Function],
  "getByLabelText": [Function],
  "getByPlaceholderText": [Function],
  "getByRole": [Function],
  "getByTestId": [Function],
  "getByText": [Function],
  "getByTitle": [Function],
  "queryAllByAltText": [Function],
  "queryAllByDisplayValue": [Function],
  "queryAllByLabelText": [Function],
  "queryAllByPlaceholderText": [Function],
  "queryAllByRole": [Function],
  "queryAllByTestId": [Function],
  "queryAllByText": [Function],
  "queryAllByTitle": [Function],
  "queryByAltText": [Function],
  "queryByDisplayValue": [Function],
  "queryByLabelText": [Function],
  "queryByPlaceholderText": [Function],
  "queryByRole": [Function],
  "queryByTestId": [Function],
  "queryByText": [Function],
  "queryByTitle": [Function],
  "rerender": [Function],
  "unmount": [Function],
}
`);
});

test('Send both boxes', () => {
  const initialState = {
    auth: {
      isAuthenticated: false,
    },
    loading: {
      user: {
        auth: {},
      },
    },
    error: {
      user: {
        auth: {},
      },
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  const container = render(
    <BrowserRouter>
      <Provider store={store}>
        <LoginForm />
      </Provider>
    </BrowserRouter>,
  );
  const username = screen.getByPlaceholderText('Username');
  fireEvent.change(username, { target: { value: 'test1' } });
  const password = screen.getByPlaceholderText('Password');
  fireEvent.change(password, { target: { value: 'test1' } });
  fireEvent.click(screen.getByText('Sign in'));
  expect(container).toMatchInlineSnapshot(`
Object {
  "asFragment": [Function],
  "baseElement": <body>
    <div
      id="chakra-toast-portal"
    >
      <ul
        id="chakra-toast-manager-top"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column; margin: 0px auto;"
      />
      <ul
        id="chakra-toast-manager-top-left"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column;"
      />
      <ul
        id="chakra-toast-manager-top-right"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column;"
      />
      <ul
        id="chakra-toast-manager-bottom-left"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column;"
      />
      <ul
        id="chakra-toast-manager-bottom"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column; margin: 0px auto;"
      />
      <ul
        id="chakra-toast-manager-bottom-right"
        style="position: fixed; z-index: 5500; pointer-events: none; display: flex; flex-direction: column;"
      />
    </div>
    <div>
      <div
        class="chakra-stack css-1clhiew"
      >
        <div
          class="css-aijmsl"
        >
          <div
            class="chakra-stack css-1clhiew"
          >
            <div
              class="chakra-stack css-d83h2"
            >
              <img
                alt="Logo"
                class="chakra-image css-90a3ld"
                src="../logo/big-logo.png"
              />
            </div>
            <div
              class="chakra-stack css-1clhiew"
            >
              <button
                class="chakra-button css-5c2176"
                disabled=""
                type="button"
              >
                <span
                  class="chakra-button__icon css-1wh2kri"
                >
                  <svg
                    aria-hidden="true"
                    enable-background="new 0 0 48 48"
                    fill="currentColor"
                    focusable="false"
                    height="1em"
                    stroke="currentColor"
                    stroke-width="0"
                    version="1.1"
                    viewBox="0 0 48 48"
                    width="1em"
                    x="0px"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0px"
                  >
                    <path
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      fill="#FFC107"
                    />
                    <path
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      fill="#1976D2"
                    />
                  </svg>
                </span>
                Continue with Google
              </button>
              <div
                class="chakra-stack css-84zodg"
              >
                <hr
                  aria-orientation="horizontal"
                  class="chakra-divider css-1upb9tn"
                />
                <p
                  class="chakra-text css-bwkwih"
                >
                  or
                </p>
                <hr
                  aria-orientation="horizontal"
                  class="chakra-divider css-1upb9tn"
                />
              </div>
            </div>
            <form>
              <div
                class="chakra-stack css-17kdbol"
              >
                <div
                  class="chakra-stack css-17kdbol"
                >
                  <div
                    class="chakra-form-control css-0"
                    role="group"
                  >
                    <input
                      aria-required="true"
                      class="chakra-input css-1i52ium"
                      id="login-username"
                      label="Username"
                      placeholder="Username"
                      required=""
                      type="text"
                      value="test1"
                    />
                  </div>
                  <div
                    class="chakra-form-control css-0"
                    role="group"
                  >
                    <div
                      class="chakra-input__group css-4302v8"
                    >
                      <input
                        aria-required="true"
                        class="chakra-input css-1klm41n"
                        id="login-password"
                        label="Password"
                        placeholder="Password"
                        required=""
                        type="password"
                        value="test1"
                      />
                      <div
                        class="chakra-input__right-element css-dp9r5f"
                      >
                        <button
                          aria-label="Reveal password"
                          class="chakra-button css-1q06s4d"
                          type="button"
                        >
                          <svg
                            aria-hidden="true"
                            fill="currentColor"
                            focusable="false"
                            height="1em"
                            stroke="currentColor"
                            stroke-width="0"
                            viewBox="0 0 20 20"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clip-rule="evenodd"
                              d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                              fill-rule="evenodd"
                            />
                            <path
                              d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="chakra-stack css-1clhiew"
                >
                  <button
                    class="chakra-button css-5c2176"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <div
                    class="chakra-stack css-14lxv93"
                  >
                    <a
                      class="chakra-link css-1t06xl"
                      to="/"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          class="css-aijmsl"
        >
          <div
            class="chakra-stack css-1clhiew"
          >
            <p
              class="chakra-text css-uxnog1"
            >
              Don't have an account?
               
              <a
                class="chakra-link css-0"
                href="/register"
              >
                Join now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>,
  "container": <div>
    <div
      class="chakra-stack css-1clhiew"
    >
      <div
        class="css-aijmsl"
      >
        <div
          class="chakra-stack css-1clhiew"
        >
          <div
            class="chakra-stack css-d83h2"
          >
            <img
              alt="Logo"
              class="chakra-image css-90a3ld"
              src="../logo/big-logo.png"
            />
          </div>
          <div
            class="chakra-stack css-1clhiew"
          >
            <button
              class="chakra-button css-5c2176"
              disabled=""
              type="button"
            >
              <span
                class="chakra-button__icon css-1wh2kri"
              >
                <svg
                  aria-hidden="true"
                  enable-background="new 0 0 48 48"
                  fill="currentColor"
                  focusable="false"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 48 48"
                  width="1em"
                  x="0px"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0px"
                >
                  <path
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    fill="#FFC107"
                  />
                  <path
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    fill="#1976D2"
                  />
                </svg>
              </span>
              Continue with Google
            </button>
            <div
              class="chakra-stack css-84zodg"
            >
              <hr
                aria-orientation="horizontal"
                class="chakra-divider css-1upb9tn"
              />
              <p
                class="chakra-text css-bwkwih"
              >
                or
              </p>
              <hr
                aria-orientation="horizontal"
                class="chakra-divider css-1upb9tn"
              />
            </div>
          </div>
          <form>
            <div
              class="chakra-stack css-17kdbol"
            >
              <div
                class="chakra-stack css-17kdbol"
              >
                <div
                  class="chakra-form-control css-0"
                  role="group"
                >
                  <input
                    aria-required="true"
                    class="chakra-input css-1i52ium"
                    id="login-username"
                    label="Username"
                    placeholder="Username"
                    required=""
                    type="text"
                    value="test1"
                  />
                </div>
                <div
                  class="chakra-form-control css-0"
                  role="group"
                >
                  <div
                    class="chakra-input__group css-4302v8"
                  >
                    <input
                      aria-required="true"
                      class="chakra-input css-1klm41n"
                      id="login-password"
                      label="Password"
                      placeholder="Password"
                      required=""
                      type="password"
                      value="test1"
                    />
                    <div
                      class="chakra-input__right-element css-dp9r5f"
                    >
                      <button
                        aria-label="Reveal password"
                        class="chakra-button css-1q06s4d"
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          fill="currentColor"
                          focusable="false"
                          height="1em"
                          stroke="currentColor"
                          stroke-width="0"
                          viewBox="0 0 20 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                            fill-rule="evenodd"
                          />
                          <path
                            d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="chakra-stack css-1clhiew"
              >
                <button
                  class="chakra-button css-5c2176"
                  type="submit"
                >
                  Sign in
                </button>
                <div
                  class="chakra-stack css-14lxv93"
                >
                  <a
                    class="chakra-link css-1t06xl"
                    to="/"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        class="css-aijmsl"
      >
        <div
          class="chakra-stack css-1clhiew"
        >
          <p
            class="chakra-text css-uxnog1"
          >
            Don't have an account?
             
            <a
              class="chakra-link css-0"
              href="/register"
            >
              Join now
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>,
  "debug": [Function],
  "findAllByAltText": [Function],
  "findAllByDisplayValue": [Function],
  "findAllByLabelText": [Function],
  "findAllByPlaceholderText": [Function],
  "findAllByRole": [Function],
  "findAllByTestId": [Function],
  "findAllByText": [Function],
  "findAllByTitle": [Function],
  "findByAltText": [Function],
  "findByDisplayValue": [Function],
  "findByLabelText": [Function],
  "findByPlaceholderText": [Function],
  "findByRole": [Function],
  "findByTestId": [Function],
  "findByText": [Function],
  "findByTitle": [Function],
  "getAllByAltText": [Function],
  "getAllByDisplayValue": [Function],
  "getAllByLabelText": [Function],
  "getAllByPlaceholderText": [Function],
  "getAllByRole": [Function],
  "getAllByTestId": [Function],
  "getAllByText": [Function],
  "getAllByTitle": [Function],
  "getByAltText": [Function],
  "getByDisplayValue": [Function],
  "getByLabelText": [Function],
  "getByPlaceholderText": [Function],
  "getByRole": [Function],
  "getByTestId": [Function],
  "getByText": [Function],
  "getByTitle": [Function],
  "queryAllByAltText": [Function],
  "queryAllByDisplayValue": [Function],
  "queryAllByLabelText": [Function],
  "queryAllByPlaceholderText": [Function],
  "queryAllByRole": [Function],
  "queryAllByTestId": [Function],
  "queryAllByText": [Function],
  "queryAllByTitle": [Function],
  "queryByAltText": [Function],
  "queryByDisplayValue": [Function],
  "queryByLabelText": [Function],
  "queryByPlaceholderText": [Function],
  "queryByRole": [Function],
  "queryByTestId": [Function],
  "queryByText": [Function],
  "queryByTitle": [Function],
  "rerender": [Function],
  "unmount": [Function],
}
`);
});

test('Sign in to homepage', async () => {
  const initialState = {
    auth: {
      isAuthenticated: true,
    },
    loading: {
      user: {
        auth: {},
      },
    },
    error: {
      user: {
        auth: {},
      },
    },
    handleSubmit: jest.fn(),
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  const container = render(
    <BrowserRouter>
      <Provider store={store}>
        <LoginForm />
      </Provider>
    </BrowserRouter>,
  );
  const username = screen.getByPlaceholderText('Username');
  fireEvent.change(username, { target: { value: 'test1' } });
  const password = screen.getByPlaceholderText('Password');
  fireEvent.change(password, { target: { value: 'test1' } });
  fireEvent.click(screen.getByRole('button', { name: /sign in/i }));
  expect(mockHistoryPush).toHaveBeenCalledWith('/home');
});
