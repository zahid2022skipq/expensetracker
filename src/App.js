import "./App.css";
import AccountDetails from "./Components/Account Details/AccountDetails";
import History from "./Components/History/History";
import NewTransaction from "./Components/Transaction/NewTransaction";

function App() {
  return (
    <div className="App">
      <div className="logo-contianer">
        <h1 className="logo">Expense Tracker</h1>
      </div>
      <div className="accounts-container">
        <AccountDetails />
      </div>

      <div className="history">
        <History />
      </div>
      <div className="transaction">
        <NewTransaction />
      </div>
    </div>
  );
}

export default App;
