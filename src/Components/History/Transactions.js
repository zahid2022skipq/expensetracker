import React from "react";

import "./history.css";

const Transactions = ({ transactionType, amount }) => {
  const color = amount < 0 ? "red" : "green";
  return (
    <div
      className="transaction-container"
      style={{ borderRight: `5px solid ${color}` }}
    >
      <div>
        <p>{transactionType}</p>
      </div>
      <div>
        <p>{amount}$</p>
      </div>
    </div>
  );
};

export default Transactions;
