import '@fontsource/montserrat';

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ChakraProvider,
  // theme,
} from '@chakra-ui/react';
import theme from './theme';
import Login from './containers/auth/Login';
// import Index from './containers';
// import Register from './containers/auth/Register';
// import Index from './containers';
import NoMatch from './components/noMatch';
import store from './store';

function App() {
  useEffect(() => {
    const url = window.location.origin;

    if (!url.includes('localhost') && !url.includes('https')) {
      window.location = `https:${url.split(':')[1]}`;
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            {/* <Route path="/register" component={Register} /> */}
            {/* <Route path="/" component={Index} /> */}
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
