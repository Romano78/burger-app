// jest method: describe('<NavigationItems/> Identify Test', testing function () => {write test}) two arguments
// it: write test describes allow to write individual test
// enzyme allows you to render a component standalone without rendering the complete react app
// shalow function allowing to render react component (best one render component with all the content but not deeply render)
// expect method let you have a look define what we want to check
import React from "react";
import { configure, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "../NavigationItems/NavigationItems";
import { NavigationLink } from "../NavigationItems/Styles";

configure({ adapter: new Adapter() });

// now enzyme is connected

describe("<NavigationItems/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("should render two <NavigationItem/>  items elements if not authenticated", () => {
    // wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(NavigationLink)).toHaveLength(2);
  });

  it("should render three <NavigationItem/>  items elements if  authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });

    expect(wrapper.find(NavigationLink)).toHaveLength(3);
  });

  it("should render logout <NavigationLink/>  if authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(<NavigationLink to="/logout">Logout</NavigationLink>)
    ).toEqual(true);
  });
});
