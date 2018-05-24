import { createStore } from 'redux';


// now we define the state of our app -- which for us its just a count variable.

const initialState = {
  count: 0
};

//now we create a reducer
//we make state = initialState because after the first time the reducer is called the initial state is copied into here
const reducer = (state = initialState, action) => {
  // console.log(state);

//it's common to use switch statements to handle such actions
  switch (action.type) {
    case 'INCREMENT':

      return Object.assign({}, state, {count: state.count + 2});
    
    case 'DECREMENT':

      return Object.assign({}, state, {count: state.count - 2});
  
    case 'MULTIPLY':

      return Object.assign({}, state, {count: state.count * 5});
  
    case 'DIVIDE':

      return Object.assign({}, state, {count: (state.count / 2).toFixed()});

  default:
  return state;
}
}

const store = createStore(reducer);

export default store;
