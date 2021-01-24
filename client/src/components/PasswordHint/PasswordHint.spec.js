import { mount } from "enzyme";
import React from "react";
import { StoreContext } from "redux-react-hook";
import { PasswordHint } from "./PasswordHint";
import thunk from 'redux-thunk';
import configureMockStore  from "redux-mock-store";

const mockStore = configureMockStore([thunk]);

let store;

describe("PasswordHint", () => {
    let wrapper;
  beforeEach(() => {
    store = mockStore({
      pwsrdHint: {
        hint: "1234",
      },
    });
    wrapper = mount(
      <StoreContext.Provider value={store}>
        <PasswordHint />
      </StoreContext.Provider>
    );
  });
  it("should render without any error", () => {
    expect(wrapper.find(PasswordHint).length).toEqual(1);
  });
  it("should render correct hint value", () => {
    expect(wrapper.find(PasswordHint).text()).toEqual('1 2 3 4');
  });
});
