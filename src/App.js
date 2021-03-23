import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpense } from './IncomeExpense';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import { Footer } from './Footer';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
      <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
