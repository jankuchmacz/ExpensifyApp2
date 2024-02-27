import React from "react";
import HelpPage from "../../components/Help";
import { shallow } from "enzyme";

test('should render help page correctly', ()=>{
    const wrapper = shallow(<HelpPage/>)
    expect(wrapper).toMatchSnapshot();
})