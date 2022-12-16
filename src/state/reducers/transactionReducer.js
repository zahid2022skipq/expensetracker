export const transactionReducer = (
  state = { balance: 0, income: 0, expense: 0 },
  action
) => {
  switch (action.type) {
    case "MAKE_TRANSACTION":
      console.log([action.payload, ...state]);
      return [action.payload, ...state];
    default:
      return state;
  }
};
