import { TYPES } from './actions';
import { apiKey, dbuser, dbpassword } from '../config/keys';

const initialState = {
  loggedIn: true,
  apiUrl: '',
  apiKey,
  dbuser,
  dbpassword,
  searchText: '',
  searchResults: [],
  username: '',
  list: [
  ]
}

// 1st parameter is setting state to a default parameter, intialState
// 2nd parameter is a destructured action object
const rootReducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_SEARCH_TEXT: return {
      ...state,
      searchText: payload.text,
    };
    case TYPES.SET_SEARCH_RESULTS: return {
      ...state,
      searchResults: [...state.searchResults, ...payload.results],
    };
    // set fetched list to state
    case TYPES.SET_LIST: return {
      ...state,
      username: payload.data.username,
      listDescript: payload.data.listDescript,
      list: [...payload.data.list]
    };
    case TYPES.ADD_TO_LIST: return {
      ...state,
      list: [...state.list, payload.item]
    };
    case TYPES.DELETE_ITEM: return {
      ...state,
      list: [...state.list.filter(item => item.id !== payload.item.id)]
    };
    default: return state;
  }
}

export default rootReducer;