// reducers.js
const initialState = {
  responseData: null,
  isLoading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESPONSE_DATA":
      return {
        ...state,
        responseData: action.payload,
      };

    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
