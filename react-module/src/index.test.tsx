import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ExampleComponent, ExampleComponentProps } from "./";
configure({ adapter: new Adapter() });

describe("Component", () => {
  let defaultProps: ExampleComponentProps;

  beforeEach(() => {
    defaultProps = {
      className: undefined,
    };
  });

  it("Renders", () => {
    let wrapper = shallow(<ExampleComponent {...defaultProps} />);
    expect(wrapper.hasClass("example-component")).toBeTruthy();
  });

  it("Renders with custom class name", () => {
    defaultProps.className = "extra-class-name";
    let wrapper = shallow(<ExampleComponent {...defaultProps} />);
    expect(wrapper.hasClass("example-component")).toBeTruthy();
    expect(wrapper.hasClass("extra-class-name")).toBeTruthy();
  });
});
