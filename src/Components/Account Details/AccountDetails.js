import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./account.css";

const AccountDetails = () => {
  const account = useSelector((state) => state.reducer);
  const [acc, setAcc] = useState(account[0]);

  useEffect(() => {
    setAcc(account[0]);
  }, [account[0]]);

  return (
    <div className="account-container">
      <div>
        <h3>Your Balance</h3>
        <h4>{acc.balance}$</h4>
      </div>

      <div className="account-info">
        <div className="income">
          <p>Income</p>
          <p className="total-income">{acc.income}$</p>
        </div>
        <div className="expense">
          <p>Expense</p>
          <p className="total-expense">{acc.expense}$</p>
        </div>
      </div>
      <button className="update" onClick={() => setAcc(account[0])}>
        Update
      </button>
    </div>
  );
};

export default AccountDetails;
