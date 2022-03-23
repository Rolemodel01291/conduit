import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import TransactionList from "./transactionList";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";

const mockStore = configureMockStore([thunk]);

describe("TransactionList Component", () => {
  it("renders without crashing", () => {
    const store = mockStore({
      transactions: [],
    });
    const wrapper = shallow(
      <Provider store={store}>
        <TransactionList />
      </Provider>
    );
  });
});
