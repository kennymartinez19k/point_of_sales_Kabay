import * as React from 'react';

import { Provider } from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import './src/constants/IMLocalize';
import configureStore from './configureStore'
const store = configureStore()
export default function App() {
  return (
    <Provider store={store}>
        <RootNavigator />
    </Provider>
  )
}
