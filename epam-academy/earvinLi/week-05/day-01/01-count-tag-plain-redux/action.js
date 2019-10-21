// External Dependencies
const redux = require('redux');

// Internal Dependencies
const countReducer = require('./reducer/CounterReducer');
const tagReducer = require('./reducer/TagReducer');

const {
  combineReducers,
  createStore,
} = redux;
const store = createStore(combineReducers({
  counterSection: countReducer,
  tagSection: tagReducer,
}));

// Try CountReducer
/*
store.dispatch({type: 'SET', amount: 6});
store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'INCREASE', amount: 2});
store.dispatch({type: 'RESET'});
store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'DECREASE', amount: 4});
*/
// console.log(store.getState());

// Try tagReducer
/*
store.dispatch({type: 'ADD_TAG', tag: 'blue'});
store.dispatch({type: 'ADD_TAG', tag: 'bold'});
store.dispatch({type: 'ADD_TAG', tag: 'hipster'});
store.dispatch({type: 'REMOVE_TAG', tag: 'blue'});
store.dispatch({type: 'ADD_TAG', tag: 'bold'});
store.dispatch({type: 'REMOVE_TAGS'});
*/
// console.log(store.getState());
