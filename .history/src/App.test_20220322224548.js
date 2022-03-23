import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

describe("App Component", () => {
  wrapped = mount(
    <Provider store={mockStore}>
      <Root>
        <Counter />
      </Root>
    </Provider>
  );
});
