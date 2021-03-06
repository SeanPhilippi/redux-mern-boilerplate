import React, { Component } from 'react';
import './App.css';
import store from './store';
// this wrapper component connects your project to the redux store
import { Provider } from 'react-redux';

import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

class App extends Component {
  render() {
    return (
      // Provider from react-redux takes a required store prop that you set to your store
      // the store is created with React's createStore method which takes your reduc
      <Provider store={store}>
        <div>
          <ClassComponent />
          <FunctionalComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
