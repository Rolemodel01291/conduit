import React from "react";
import { shallow } from "enzyme";
import TransactionList from "./transactionList";
describe("MyComponent", () => {
  it("renders without crashing", () => {
    shallow(<TransactionList />);
  });
});
