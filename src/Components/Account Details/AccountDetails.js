import React from "react";
import { useSelector } from "react-redux";

import "./account.css";

const AccountDetails = () => {
  const account = useSelector((state) => state.reducer);
  return (
    <div className="account-container">
      <div>
        <h3>Your Balance</h3>
        <h4>{account.balance}$</h4>
      </div>

      <div className="account-info">
        <div className="income">
          <p>Income</p>
          <p className="total-income">{account.income}$</p>
        </div>
        <div className="expense">
          <p>Expense</p>
          <p className="total-expense">{account.expense}$</p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
