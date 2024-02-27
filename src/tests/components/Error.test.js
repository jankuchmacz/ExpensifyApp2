import React from "react";
import Error from "../../components/Error";
import { shallow } from "enzyme";

test('should render Error page correctly', ()=>{
    const wrapper = shallow(<Error/>);
    expect(wrapper).toMatchSnapshot();
})