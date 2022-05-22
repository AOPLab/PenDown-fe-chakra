/* eslint-disable no-undef */
import '@fontsource/caveat';

import configureStore from 'redux-mock-store';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

test('Landing Page', () => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);
  // const container = render(
  //   <BrowserRouter>
  //     <Provider store={store}>
  //       <Home />
  //     </Provider>
  //   </BrowserRouter>,
  // );
  // expect(container).toMatchInlineSnapshot();
});
