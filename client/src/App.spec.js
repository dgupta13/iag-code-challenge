import React from "react";
import { shallow } from "enzyme";
import App from "./App";

let wrapped = shallow(<App />);

describe("App", () => {
  it("should render the App Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
  it("renders the App children", () => {
    expect(wrapped.find("Title").length).toEqual(1);
  });
});