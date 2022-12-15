import React from "react";

import "./account.css";

const AccountDetails = () => {
  return (
    <div className="account-container">
      <div>
        <h3>Your Balance</h3>
        <h4>0$</h4>
      </div>

      <div className="account-info">
        <div className="income">
          <p>Income</p>
          <p className="total-income">500$</p>
        </div>
        <div className="expense">
          <p>Expense</p>
          <p className="total-expense">200$</p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
