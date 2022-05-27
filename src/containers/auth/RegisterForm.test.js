/* eslint-disable no-tabs */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import RegisterForm from './RegisterForm';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

test('RegisterForm Initial Display', () => {
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
  const store = mockStore(initialState);
  const { container, debug } = render(
    <BrowserRouter>
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    </BrowserRouter>,
  );

  expect(container).toMatchInlineSnapshot(`
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
          class="chakra-stack css-nzztk6"
        >
          <img
            alt="Logo"
            class="chakra-image css-90a3ld"
            src="../logo/big-logo.png"
          />
          <p
            class="chakra-text css-hla94b"
          >
            Sign up to see notes from other note-takers from all over the world.
          </p>
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
                  class="chakra-input css-4viy6l"
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  placeholder="Full name"
                  required=""
                  type="text"
                  value=""
                />
              </div>
              <div
                class="chakra-form-control css-0"
                role="group"
              >
                <input
                  aria-required="true"
                  class="chakra-input css-u4em34"
                  id="username"
                  label="Username"
                  name="username"
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
                <input
                  aria-required="true"
                  class="chakra-input css-1klm41n"
                  id="email"
                  label="Email"
                  name="email"
                  placeholder="Email"
                  required=""
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
                    class="chakra-input css-17s0dht"
                    id="password"
                    label="Password"
                    name="password"
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
              <div
                class="chakra-form-control css-0"
                role="group"
              >
                <div
                  class="chakra-input__group css-4302v8"
                >
                  <input
                    aria-required="true"
                    class="chakra-input css-1qlb6e4"
                    id="confirm-password"
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
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
                type="button"
              >
                Sign up
              </button>
              <div
                class="chakra-stack css-14lxv93"
              >
                <p
                  class="chakra-text css-1r7o8ql"
                >
                  By signing up, you agree to our Terms, Data Policy and Cookies Policy.
                </p>
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
          Already have an account?
           
          <a
            class="chakra-link css-0"
            href="/login"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
`);
});

test('No input sign up', () => {
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
  const store = mockStore(initialState);
  const { container, debug } = render(
    <BrowserRouter>
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    </BrowserRouter>,
  );
  fireEvent.click(screen.getByText('Sign up'));
  expect(container).toMatchInlineSnapshot(`
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
          class="chakra-stack css-nzztk6"
        >
          <img
            alt="Logo"
            class="chakra-image css-90a3ld"
            src="../logo/big-logo.png"
          />
          <p
            class="chakra-text css-hla94b"
          >
            Sign up to see notes from other note-takers from all over the world.
          </p>
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
                  aria-invalid="true"
                  aria-required="true"
                  class="chakra-input css-4viy6l"
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  placeholder="Full name"
                  required=""
                  type="text"
                  value=""
                />
              </div>
              <div
                class="chakra-form-control css-0"
                role="group"
              >
                <input
                  aria-invalid="true"
                  aria-required="true"
                  class="chakra-input css-u4em34"
                  id="username"
                  label="Username"
                  name="username"
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
                <input
                  aria-invalid="true"
                  aria-required="true"
                  class="chakra-input css-1klm41n"
                  id="email"
                  label="Email"
                  name="email"
                  placeholder="Email"
                  required=""
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
                    aria-invalid="true"
                    aria-required="true"
                    class="chakra-input css-17s0dht"
                    id="password"
                    label="Password"
                    name="password"
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
              <div
                class="chakra-form-control css-0"
                role="group"
              >
                <div
                  class="chakra-input__group css-4302v8"
                >
                  <input
                    aria-invalid="true"
                    aria-required="true"
                    class="chakra-input css-1qlb6e4"
                    id="confirm-password"
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
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
                type="button"
              >
                Sign up
              </button>
              <div
                class="chakra-stack css-14lxv93"
              >
                <p
                  class="chakra-text css-1r7o8ql"
                >
                  By signing up, you agree to our Terms, Data Policy and Cookies Policy.
                </p>
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
          Already have an account?
           
          <a
            class="chakra-link css-0"
            href="/login"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
`);
});

test('Fail to Login (password not confirmed)', () => {
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
  const store = mockStore(initialState);
  const { container, debug } = render(
    <BrowserRouter>
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    </BrowserRouter>,
  );
  const password1 = screen.getByPlaceholderText('Password');
  fireEvent.change(password1, { target: { value: 'test1' } });
  const password2 = screen.getByPlaceholderText('Confirm Password');
  fireEvent.change(password2, { target: { value: 'test2' } });
  fireEvent.click(screen.getByText('Sign up'));
  expect(container).toMatchInlineSnapshot(`
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
          class="chakra-stack css-nzztk6"
        >
          <img
            alt="Logo"
            class="chakra-image css-90a3ld"
            src="../logo/big-logo.png"
          />
          <p
            class="chakra-text css-hla94b"
          >
            Sign up to see notes from other note-takers from all over the world.
          </p>
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
                  aria-invalid="true"
                  aria-required="true"
                  class="chakra-input css-4viy6l"
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  placeholder="Full name"
                  required=""
                  type="text"
                  value=""
                />
              </div>
              <div
                class="chakra-form-control css-0"
                role="group"
              >
                <input
                  aria-invalid="true"
                  aria-required="true"
                  class="chakra-input css-u4em34"
                  id="username"
                  label="Username"
                  name="username"
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
                <input
                  aria-invalid="true"
                  aria-required="true"
                  class="chakra-input css-1klm41n"
                  id="email"
                  label="Email"
                  name="email"
                  placeholder="Email"
                  required=""
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
                    class="chakra-input css-17s0dht"
                    id="password"
                    label="Password"
                    name="password"
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
              <div
                class="chakra-form-control css-0"
                role="group"
              >
                <div
                  class="chakra-input__group css-4302v8"
                >
                  <input
                    aria-invalid="true"
                    aria-required="true"
                    class="chakra-input css-1qlb6e4"
                    id="confirm-password"
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required=""
                    type="password"
                    value="test2"
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
                type="button"
              >
                Sign up
              </button>
              <div
                class="chakra-stack css-14lxv93"
              >
                <p
                  class="chakra-text css-1r7o8ql"
                >
                  By signing up, you agree to our Terms, Data Policy and Cookies Policy.
                </p>
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
          Already have an account?
           
          <a
            class="chakra-link css-0"
            href="/login"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
`);
});

test('Fail to Login (only submit password and confirm password)', () => {
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
  const store = mockStore(initialState);
  const { container, debug } = render(
    <BrowserRouter>
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    </BrowserRouter>,
  );
  const password1 = screen.getByPlaceholderText('Password');
  fireEvent.change(password1, { target: { value: 'test1' } });
  const password2 = screen.getByPlaceholderText('Confirm Password');
  fireEvent.change(password2, { target: { value: 'test1' } });
  fireEvent.click(screen.getByText('Sign up'));
  expect(container).toMatchInlineSnapshot(`
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
          class="chakra-stack css-nzztk6"
        >
          <img
            alt="Logo"
            class="chakra-image css-90a3ld"
            src="../logo/big-logo.png"
          />
          <p
            class="chakra-text css-hla94b"
          >
            Sign up to see notes from other note-takers from all over the world.
          </p>
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
                  aria-invalid="true"
                  aria-required="true"
                  class="chakra-input css-4viy6l"
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  placeholder="Full name"
                  required=""
                  type="text"
                  value=""
                />
              </div>
              <div
                class="chakra-form-control css-0"
                role="group"
              >
                <input
                  aria-invalid="true"
                  aria-required="true"
                  class="chakra-input css-u4em34"
                  id="username"
                  label="Username"
                  name="username"
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
                <input
                  aria-invalid="true"
                  aria-required="true"
                  class="chakra-input css-1klm41n"
                  id="email"
                  label="Email"
                  name="email"
                  placeholder="Email"
                  required=""
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
                    class="chakra-input css-17s0dht"
                    id="password"
                    label="Password"
                    name="password"
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
              <div
                class="chakra-form-control css-0"
                role="group"
              >
                <div
                  class="chakra-input__group css-4302v8"
                >
                  <input
                    aria-required="true"
                    class="chakra-input css-1qlb6e4"
                    id="confirm-password"
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
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
                type="button"
              >
                Sign up
              </button>
              <div
                class="chakra-stack css-14lxv93"
              >
                <p
                  class="chakra-text css-1r7o8ql"
                >
                  By signing up, you agree to our Terms, Data Policy and Cookies Policy.
                </p>
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
          Already have an account?
           
          <a
            class="chakra-link css-0"
            href="/login"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
`);
});

test('Sign up Success to Login Page', () => {
  const initialState = {
    auth: {
      isAuthenticated: true,
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
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  const { container, debug } = render(
    <BrowserRouter>
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    </BrowserRouter>,
  );

  const username = screen.getByPlaceholderText('Username');
  fireEvent.change(username, { target: { value: 'Tester' } });
  const fullname = screen.getByPlaceholderText('Full name');
  fireEvent.change(fullname, { target: { value: 'Full Tester' } });
  const email = screen.getByPlaceholderText('Email');
  fireEvent.change(email, { target: { value: 'test@test.com' } });

  const password1 = screen.getByPlaceholderText('Password');
  fireEvent.change(password1, { target: { value: 'test1' } });
  const password2 = screen.getByPlaceholderText('Confirm Password');
  fireEvent.change(password2, { target: { value: 'test1' } });
  fireEvent.click(screen.getByText('Sign up'));
  expect(mockHistoryPush).toHaveBeenCalledWith('/home');
});
