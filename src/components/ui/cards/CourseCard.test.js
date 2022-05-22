import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import CourseCard from './CourseCard';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

test.each([
  [1, 1, 1, 'test title 1', 'test description 1', 10],
  [2, 2, 20, 'test title 2', 'test description 2', 10],
])('CourseCard display id %d', (id, schoolId, courseId, title, description, noteCount) => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const container = render(
    <BrowserRouter>
      <Provider store={store}>
        <CourseCard schoolId={schoolId} courseId={courseId} title={title} description={description} noteCount={noteCount} />
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
      <a
        href="/school/${schoolId}/course/${courseId}"
      >
        <div
          class="css-1344rbf"
        >
          <div
            class="css-0"
          >
            <div
              class="css-1ab7okh"
            >
              <div
                class="chakra-stack css-1ewn99o"
              >
                <h1
                  class="css-ldrbkv"
                >
                  <span
                    class="css-0"
                    tabindex="0"
                  >
                    ${title}
                  </span>
                </h1>
                <div
                  class="css-70qvj9"
                >
                  <div
                    class="chakra-stack css-84zodg"
                  >
                    <svg
                      class="chakra-icon css-1ux9vat"
                      fill="none"
                      focusable="false"
                      height="1em"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="8"
                        x2="21"
                        y1="6"
                        y2="6"
                      />
                      <line
                        x1="8"
                        x2="21"
                        y1="12"
                        y2="12"
                      />
                      <line
                        x1="8"
                        x2="21"
                        y1="18"
                        y2="18"
                      />
                      <line
                        x1="3"
                        x2="3"
                        y1="6"
                        y2="6"
                      />
                      <line
                        x1="3"
                        x2="3"
                        y1="12"
                        y2="12"
                      />
                      <line
                        x1="3"
                        x2="3"
                        y1="18"
                        y2="18"
                      />
                    </svg>
                    <span
                      class="css-3fz8pa"
                    >
                      ${description}
                    </span>
                  </div>
                </div>
                <div
                  class="css-7pf6at"
                >
                  <div
                    class="chakra-stack css-unhvvz"
                  >
                    <svg
                      class="chakra-icon css-1vsimda"
                      fill="none"
                      focusable="false"
                      height="1em"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                      />
                      <polyline
                        points="13 2 13 9 20 9"
                      />
                    </svg>
                    <span
                      class="css-1j7swnu"
                    >
                      ${noteCount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </body>,
  "container": <div>
    <a
      href="/school/${schoolId}/course/${courseId}"
    >
      <div
        class="css-1344rbf"
      >
        <div
          class="css-0"
        >
          <div
            class="css-1ab7okh"
          >
            <div
              class="chakra-stack css-1ewn99o"
            >
              <h1
                class="css-ldrbkv"
              >
                <span
                  class="css-0"
                  tabindex="0"
                >
                  ${title}
                </span>
              </h1>
              <div
                class="css-70qvj9"
              >
                <div
                  class="chakra-stack css-84zodg"
                >
                  <svg
                    class="chakra-icon css-1ux9vat"
                    fill="none"
                    focusable="false"
                    height="1em"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="8"
                      x2="21"
                      y1="6"
                      y2="6"
                    />
                    <line
                      x1="8"
                      x2="21"
                      y1="12"
                      y2="12"
                    />
                    <line
                      x1="8"
                      x2="21"
                      y1="18"
                      y2="18"
                    />
                    <line
                      x1="3"
                      x2="3"
                      y1="6"
                      y2="6"
                    />
                    <line
                      x1="3"
                      x2="3"
                      y1="12"
                      y2="12"
                    />
                    <line
                      x1="3"
                      x2="3"
                      y1="18"
                      y2="18"
                    />
                  </svg>
                  <span
                    class="css-3fz8pa"
                  >
                    ${description}
                  </span>
                </div>
              </div>
              <div
                class="css-7pf6at"
              >
                <div
                  class="chakra-stack css-unhvvz"
                >
                  <svg
                    class="chakra-icon css-1vsimda"
                    fill="none"
                    focusable="false"
                    height="1em"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                    />
                    <polyline
                      points="13 2 13 9 20 9"
                    />
                  </svg>
                  <span
                    class="css-1j7swnu"
                  >
                    ${noteCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
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

/* test.each([
  [1, 1, 1, 'testt', 'test description', 10],
  [2, 2, 20, 'testt', 'test description', 10],
]) ('CourseCard link id %d', (id, schoolId, courseId, title, description, noteCount) => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const container = render(
    <BrowserRouter>
      <Provider store={store}>
        <CourseCard schoolId={schoolId} courseId={courseId} title={title} description={description} noteCount={noteCount} />
      </Provider>
    </BrowserRouter>,
  );
  async () => { await fireEvent.click(screen.getByText(/10/i));};
  expect(mockHistoryPush).toHaveBeenCalledWith(`/school/${schoolId}/course/${courseId}`);
}) */
