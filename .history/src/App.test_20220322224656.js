import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

describe("App Component", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      users: {},
    });
  });
  wrapped = mount(
    <div className="App">
      <Provider store={store}>
        <div className="grid grid-cols-1 gap-2 px-4 py-3 mx-auto my-0 sm:my-3 sm:w-3/5 sm:max-w-288">
          <Balance />
          <TransactionList />
          <AddTransaction />
        </div>
      </Provider>
    </div>
  );
});
