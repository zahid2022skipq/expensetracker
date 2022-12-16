import React from "react";
import { useSelector } from "react-redux";

import "./history.css";
import Transactions from "./Transactions";

const History = () => {
  const data = useSelector((state) => state.reducer);
  console.log("Data --> ", data);
  return (
    <div className="history-container">
      <h3 className="history-heading">History</h3>

      <div>
        {data.map(
          (transaction, index) =>
            index > 0 && (
              <Transactions
                key={index}
                transactionType={transaction.transactionType}
                amount={transaction.amount}
              />
            )
        )}
      </div>
    </div>
  );
};

export default History;
