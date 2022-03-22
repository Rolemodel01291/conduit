import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Balance from './components/Balance';
import TransactionList from './features/transactionList';
import AddTransaction from './features/AddTransaction';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="grid grid-cols-1 gap-2 px-4 py-3 mx-auto my-0 sm:my-3 sm:w-3/5 sm:max-w-288">
          <Balance/>
          {/* <IncomeExpenses/> */}
          <TransactionList/>
          <AddTransaction />
        </div>
      </Provider>
    </div>
  );
}

export default App;
