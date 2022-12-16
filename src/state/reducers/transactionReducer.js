export const transactionReducer = (
  state = [{ balance: 0, income: 0, expense: 0 }],
  action
) => {
  switch (action.type) {
    case "MAKE_TRANSACTION":
      state[0].balance += action.payload.amount;
      state[0].expense +=
        action.payload.amount > 0 ? 0 : Math.abs(action.payload.amount);
      state[0].income +=
        action.payload.amount < 0 ? 0 : Math.abs(action.payload.amount);

      return [...state, action.payload];
    default:
      return state;
  }
};
