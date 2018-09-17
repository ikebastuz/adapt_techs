import { GET_TODOS, RECIEVED_TODOS } from '../actions'

const initialState = {
  data: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        loading: true
      };
    case RECIEVED_TODOS:
      return { ...state, data: action.payload, loading: false }
    default:
      return state;
  }
}