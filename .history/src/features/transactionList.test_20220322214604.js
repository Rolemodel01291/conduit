import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import TransactionList from "./transactionList";
import thunk from "redux-thunk";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../app/store";

describe("MyComponent", () => {
  it("renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <TransactionList />
      </Provider>
    );
  });
});
