import React from 'react';
import { Provider } from 'react-redux';
import Home from 'components/Home';

import { configureStore } from './store/store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
