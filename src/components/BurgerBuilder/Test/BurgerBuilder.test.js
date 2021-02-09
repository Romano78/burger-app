import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BurgerBuilder } from "../Index";
import BuildControl from "../../Burger/BuildControl";

configure({ adapter: new Adapter() });

describe("<BurgerBuilder/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder fetchIngredientHandler={() => {}} />);
  });
  it("should render <BuildControls/> when recieving ingredients", () => {
    wrapper.setProps({ ingredientState: { salad: 0 } });

    expect(wrapper.find(BuildControl)).toHaveLength(1);
  });
});
