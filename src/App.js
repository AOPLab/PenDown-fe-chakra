import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from './theme';
import ScrollToTop from './components/util/ScrollToTop';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import Index from './containers';
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
          <ScrollToTop />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Index} />
          </Switch>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
