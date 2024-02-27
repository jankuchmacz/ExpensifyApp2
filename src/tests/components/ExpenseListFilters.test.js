import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import {filters, altfilters} from '../fixtures/filters';
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;
let wrapper;
beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setTextFilter={setTextFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
});
test('should render ExpenseListFilters correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});
test('should render ExpenseListFilters with alt data correctly', ()=>{
    wrapper.setProps({
        filters: altfilters
    })
    expect(wrapper).toMatchSnapshot();
});
test('should handle text change', ()=>{
    const text='rent';
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value: text
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(text);
});
test('should sort by date', () =>{
    wrapper.setProps({
        filters: altfilters
    });
    wrapper.find('select').simulate('change', {
        target: {
            value: 'date'
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});
test('should sort by amount', () =>{
    wrapper.find('select').simulate('change', {
        target: {
            value: 'amount'
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});
test('should handle date changes', () =>{
    const startDate = moment(0).add(1, 'days');
    const endDate =  moment(0).add(3, 'days');
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate,
        endDate
     });
     expect(setStartDate).toHaveBeenLastCalledWith(startDate);
     expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
test('should handle date focus changes', () =>{
    wrapper.find('DateRangePicker').prop('onFocusChange')('endDate');
    expect(wrapper.state('calendarFocused')).toBe('endDate');
});
