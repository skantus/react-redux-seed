import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from 'components/AppNavigator';

import { configureStore } from './store/store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
