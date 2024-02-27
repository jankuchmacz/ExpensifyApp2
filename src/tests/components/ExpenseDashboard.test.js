import React from "react";
import ExpenseDashboardPage from "../../components/Dashboard";
import { shallow } from "enzyme";

test('should render ExpenseDasboard Page page correctly', ()=>{
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
})