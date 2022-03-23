import React from "react";
import configureMockStore from "redux-mock-store";
import TransactionList from "./transactionList";
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
