import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import store from './reducer/store';
import Posts from './Components/Posts';

function App() { 
  return (
    <Provider store = {store} >      
      <Posts />
    </Provider>    
  );
}

export default App;

