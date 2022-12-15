import React from "react";
import "./transaction.css";

const NewTransaction = () => {
  return (
    <div className="new-transaction-container">
      <h3 className="transaction-heading">New Transaction</h3>
      <div className="input-container">
        <input placeholder="transaction type" />
        <input placeholder="transaction amount" />
        <button>Add Transaction</button>
      </div>
    </div>
  );
};

export default NewTransaction;
