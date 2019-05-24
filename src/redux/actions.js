export const TYPES = {
  SET_SEARCH_TEXT: 'SET_SEARCH_TEXT',
  SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS',
  FETCH_LIST: 'FETCH_LIST',
  SET_LIST: 'SET_LIST',
  ADD_TO_LIST: 'ADD_TO_LIST',
  DELETE_ITEM: 'DELETE_ITEM',
};

export const setSearchText = text => ({
  type: TYPES.SET_SEARCH_TEXT,
  payload: {
    text
  }
});

// example use of getState() and dispatch() from redux-thunk
export const getResults = (num) => (dispatch, getState) => {
  const { apiUrl, apiKey, searchText } = getState();

  fetch(`${apiUrl}s=${searchText.trim()}&apikey=${apiKey}&page=${num}`)
    .then(res => res.json())
    .then(data => {
      dispatch(setSearchResults(data.Search))
    })
    .catch(err => console.error(err));
}

export const setSearchResults = results => ({
  type: TYPES.SET_SEARCH_RESULTS,
  payload: {
    results
  }
});

export const setList = data => ({
  type: TYPES.SET_LIST,
  payload: {
    data
  }
});

export const addToList = item => ({
  type: TYPES.ADD_TO_LIST,
  payload: {
    item
  }
});

export const deleteItem = item => ({
  type: TYPES.DELETE_ITEM,
  payload: {
    item
  }
})
