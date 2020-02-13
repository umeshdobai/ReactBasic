import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/Store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
