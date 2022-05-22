/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import NoteCard from './NoteCard';
import { avatarSrc } from '../../util/Helper';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

test.each([
  [1, 1, 'Goodnotes', 'img.url', 'Test Note', '2000/12/15', 'tester', 10, 10],
  [2, 2, 'Notability', 'img.url', 'Test Note', '2000/12/15', 'tester', 5, 10],
])('NoteCard display id %d', (id, noteId_, noteType_, imageUrl_, title_, dateCreated_, username_, viewCount_, savedCount_) => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const container = render(
    <BrowserRouter>
      <Provider store={store}>
        <NoteCard noteId={noteId_} noteType={noteType_} imageUrl={imageUrl_} title={title_} dateCreated={dateCreated_} username={username_} viewCount={viewCount_} savedCount={savedCount_} />
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
        href="/note/${noteId_}"
      >
        <div
          class="css-0"
        >
          <div
            class="css-bbcae2"
          >
            <div
              align="center"
              class="css-1sc1hz"
            >
              <div
                class="css-0"
              >
                <span
                  class="chakra-badge css-1q21qhw"
                  style="bottom: 1rem; right: 0.75rem; position: absolute;"
                >
                  ${noteType_}
                </span>
                <div
                  class="css-1x9rm42"
                >
                  <img
                    alt="No Preview Image"
                    class="chakra-image css-11jrw4b"
                    src="${imageUrl_}"
                  />
                </div>
              </div>
            </div>
            <div
              class="chakra-stack css-1ewn99o"
            >
              <h1
                class="css-c5ghmd"
              >
                <span
                  class="css-0"
                  tabindex="0"
                >
                  ${title_}
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
                    <rect
                      height="18"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="4"
                    />
                    <line
                      x1="16"
                      x2="16"
                      y1="2"
                      y2="6"
                    />
                    <line
                      x1="8"
                      x2="8"
                      y1="2"
                      y2="6"
                    />
                    <line
                      x1="3"
                      x2="21"
                      y1="10"
                      y2="10"
                    />
                  </svg>
                  <span
                    class="css-3fz8pa"
                  >
                    Dec 15, 2000
                  </span>
                </div>
              </div>
              <div
                class="css-7pf6at"
              >
                <div
                  class="chakra-stack css-84zodg"
                >
                  <span
                    class="chakra-avatar css-17rxas8"
                  >
                    <svg
                      aria-label=" avatar"
                      class="chakra-avatar__svg css-16ite8i"
                      role="img"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
                        fill="currentColor"
                      />
                      <path
                        d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span
                    class="css-1j7swnu"
                  >
                    ${username_}
                  </span>
                </div>
                <div
                  class="css-17xejub"
                />
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
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                    />
                  </svg>
                  <span
                    class="css-1j7swnu"
                  >
                    ${viewCount_}
                  </span>
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
                      d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                    />
                  </svg>
                  <span
                    class="css-1j7swnu"
                  >
                    ${savedCount_}
                  </span>
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
      href="/note/${noteId_}"
    >
      <div
        class="css-0"
      >
        <div
          class="css-bbcae2"
        >
          <div
            align="center"
            class="css-1sc1hz"
          >
            <div
              class="css-0"
            >
              <span
                class="chakra-badge css-1q21qhw"
                style="bottom: 1rem; right: 0.75rem; position: absolute;"
              >
                ${noteType_}
              </span>
              <div
                class="css-1x9rm42"
              >
                <img
                  alt="No Preview Image"
                  class="chakra-image css-11jrw4b"
                  src="${imageUrl_}"
                />
              </div>
            </div>
          </div>
          <div
            class="chakra-stack css-1ewn99o"
          >
            <h1
              class="css-c5ghmd"
            >
              <span
                class="css-0"
                tabindex="0"
              >
                ${title_}
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
                  <rect
                    height="18"
                    rx="2"
                    ry="2"
                    width="18"
                    x="3"
                    y="4"
                  />
                  <line
                    x1="16"
                    x2="16"
                    y1="2"
                    y2="6"
                  />
                  <line
                    x1="8"
                    x2="8"
                    y1="2"
                    y2="6"
                  />
                  <line
                    x1="3"
                    x2="21"
                    y1="10"
                    y2="10"
                  />
                </svg>
                <span
                  class="css-3fz8pa"
                >
                  Dec 15, 2000
                </span>
              </div>
            </div>
            <div
              class="css-7pf6at"
            >
              <div
                class="chakra-stack css-84zodg"
              >
                <span
                  class="chakra-avatar css-17rxas8"
                >
                  <svg
                    aria-label=" avatar"
                    class="chakra-avatar__svg css-16ite8i"
                    role="img"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
                      fill="currentColor"
                    />
                    <path
                      d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span
                  class="css-1j7swnu"
                >
                  ${username_}
                </span>
              </div>
              <div
                class="css-17xejub"
              />
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
                    d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                  />
                </svg>
                <span
                  class="css-1j7swnu"
                >
                  ${viewCount_}
                </span>
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
                    d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                  />
                </svg>
                <span
                  class="css-1j7swnu"
                >
                  ${savedCount_}
                </span>
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

test.each([
  [1, 1, 'Goodnotes', 'img.url', 'Test Note', '2000/12/15', 'tester', 10, 10],
  [2, 2, 'Notability', 'img.url', 'Test Note', '2000/12/15', 'tester', 5, 10],
])('NoteCard link id %d', (id, noteId_, noteType_, imageUrl_, title_, dateCreated_, username_, viewCount_, savedCount_) => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const container = render(
    <BrowserRouter>
      <Provider store={store}>
        <NoteCard noteId={noteId_} noteType={noteType_} imageUrl={imageUrl_} title={title_} dateCreated={dateCreated_} username={username_} viewCount={viewCount_} savedCount={savedCount_} />
      </Provider>
    </BrowserRouter>,
  );
  fireEvent.click(screen.getByRole('heading', { }));
  expect(mockHistoryPush).toHaveBeenCalledWith(`/note/${noteId_}`);
});
