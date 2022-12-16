export const transactionReducer = (state = {}, action) => {
  switch (action.type) {
    case "MAKE_TRANSACTION":
      console.log([action.payload, ...state]);
      return [action.payload, ...state];
    default:
      return state;
  }
};
