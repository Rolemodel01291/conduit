import { shallow } from "enzyme";
import TransactionList from "./transactionList";

it("renders without crashing", () => {
  shallow(<TransactionList />);
});
