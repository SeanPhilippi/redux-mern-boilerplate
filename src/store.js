import { createStore, applyMiddleware, compose } from 'redux';
// thunk allows redux actions to be more than mere objects, they can now use thunk's
// dispatch() and getState() methods to dispatch other actions and have access to state
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

const initialState = {};
// room for future middlewares in this array
const middleware = [thunk];
// Redux store to be used in Provider component
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    // hooks up app to Redux Dev Tools chrome extension only if available
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose
  )
)

export default store;