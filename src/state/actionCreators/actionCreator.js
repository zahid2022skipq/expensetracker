export const makeTransaction = (transaction) => {
  return (dispatch) => {
    dispatch({
      type: "MAKE_TRANSACTION",
      payload: transaction,
    });
  };
};
