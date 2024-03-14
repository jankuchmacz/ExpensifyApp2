import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpenseSummary";

test('should render ExpenseSummary for 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary numberOfExpenses={1} expensesTotal={2.50} />);
    expect(wrapper).toMatchSnapshot();
});
test('should render ExpenseSummary for multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary numberOfExpenses={3} expensesTotal={10.86} />);
    expect(wrapper).toMatchSnapshot();
});