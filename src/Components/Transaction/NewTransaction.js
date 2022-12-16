import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeTransaction } from "../../state/actionCreators/actionCreator";
import "./transaction.css";

const NewTransaction = () => {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  const addTransaction = () => {
    dispatch(
      makeTransaction({ transactionType: type, amount: parseInt(amount) })
    );
    setType("");
    setAmount("");
  };

  return (
    <div className="new-transaction-container">
      <h3 className="transaction-heading">New Transaction</h3>
      <div className="input-container">
        <input
          placeholder="transaction type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          placeholder="transaction amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addTransaction}>Add Transaction</button>
      </div>
    </div>
  );
};

export default NewTransaction;
