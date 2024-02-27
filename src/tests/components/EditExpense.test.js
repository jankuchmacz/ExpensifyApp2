import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpense";
import expenses from '../fixtures/expenses';

let editExpenseSpy, removeExpenseSpy, history, wrapper;
beforeEach(()=>{
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    history = {
        push: jest.fn()
    };
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpenseSpy} 
            removeExpense={removeExpenseSpy} 
            history={history}
            expense={expenses[2]}
    />);
});
test('should render EditExpensePage correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});
test('should handle editExpense', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});
test('should handle removeExpense', ()=>{
    wrapper.find('button').simulate('click');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({id: expenses[2].id});
    expect(history.push).toHaveBeenLastCalledWith('/');
})