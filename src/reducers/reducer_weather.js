import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]; //IMPORTANT: Remember that we never manipulate state we always need to return a new instance of it. For componenent state we change it by using the method setState. For Redux state we can use concat because that returns a new instance of state. You can't use state.push because that would be manipulating the current redux state rather than replacing it. Another way to write this using ES5 syntax is return state.concat([action.payload.data]);
  }
  return state;
}