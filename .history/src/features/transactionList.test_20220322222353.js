import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import TransactionList from "./transactionList";
import { within, getAllByTestId, getAllByRole } from "@testing-library/react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";

const mockStore = configureMockStore([thunk]);

describe("TransactionList Component", () => {
  it("renders without crashing", () => {
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
      ],
    });

    const { getAllByRole } = render(
      <Provider store={store}>
        <TransactionList />
      </Provider>
    );

    const listItems = getAllByRole("listitem");

    expect(listItems).toHaveLength(1);

    // wrapper.forEach((item, index) => {
    //   const { getByText } = within(item);
    //   const { client, user, amount, date, note } = wrapper[index];
    //   expect(getByText(client)).toBeInTheDocument();
    //   expect(getByText(user)).toBeInTheDocument();
    //   expect(getByText(amount)).toBeInTheDocument();
    //   expect(getByText(date)).toBeInTheDocument();
    //   expect(getByText(note)).toBeInTheDocument();
    // });
  });
});
