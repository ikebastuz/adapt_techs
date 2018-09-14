const TODOS_LOADED = "TODOS_LOADED";

const initialState = {
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "TODOS_LOADED":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}