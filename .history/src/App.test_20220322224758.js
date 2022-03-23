import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { mount } from "enzyme";

describe("App Component", () => {
  const mockStore = configureMockStore([thunk]);

  wrapped = mount(
    <div className="App">
      <Provider store={mockStore}>
        <div className="grid grid-cols-1 gap-2 px-4 py-3 mx-auto my-0 sm:my-3 sm:w-3/5 sm:max-w-288">
          <Balance />
          <TransactionList />
          <AddTransaction />
        </div>
      </Provider>
    </div>
  );
});
