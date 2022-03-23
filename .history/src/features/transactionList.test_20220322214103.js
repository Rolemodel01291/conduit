import React from "react";
import { shallow } from "enzyme";
import TransactionList from "./transactionList";
import { Provider } from "react-redux";
import { store } from "../app/store";

describe("MyComponent", () => {
  it("renders without crashing", () => {
    shallow(<Provider store={store}><TransactionList /><Provider/>);
  });
});
