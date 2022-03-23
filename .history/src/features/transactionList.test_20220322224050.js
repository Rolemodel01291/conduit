import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import TransactionList from "./transactionList";
import Transaction from "../components/Transaction";
import { shallow } from "enzyme";
import { Provider } from "react-redux";

const mockStore = configureMockStore([thunk]);

describe("TransactionList Component", () => {
  let wrapper;

  beforeEach(() => {
    const store = mockStore({
      transactions: [
        {
          id: Math.floor(Math.random() * 100000000),
          client: "Client Name",
          user: "User Name",
          amount: "+300",
          date: "MM-DD-YYYY",
          note: "Note",
        },
        {
          id: Math.floor(Math.random() * 100000000),
          client: "Client Name",
          user: "User Name",
          amount: "+300",
          date: "MM-DD-YYYY",
          note: "Note",
        },
      ],
    });
    wrapper = shallow(
      <Provider store={store}>
        <TransactionList />
      </Provider>
    );
  });

  it("should show <TransactionList /> data has been loaded", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should show <Transaction /> data has been loaded", () => {
    expect(wrapper.find(Transaction)).toHaveLength(2);
  });
});
