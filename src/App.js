import "./App.css";
import AccountDetails from "./Components/Account Details/AccountDetails";
import History from "./Components/History/History";

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
    </div>
  );
}

export default App;
