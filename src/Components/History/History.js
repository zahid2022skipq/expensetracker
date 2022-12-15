import React from "react";

import "./history.css";
import Transactions from "./Transactions";

const data = [
  { transactionType: "Cash", amount: 200 },
  { transactionType: "Books", amount: -300 },
  { transactionType: "Dinner", amount: -5 },
  { transactionType: "Camera", amount: -400 },
];

const History = () => {
  return (
    <div className="history-container">
      <h3 className="history-heading">History</h3>

      <div>
        {data.map((transaction) => (
          <Transactions
            transactionType={transaction.transactionType}
            amount={transaction.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
