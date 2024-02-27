import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";
import { sortByAmount } from "../actions/filters";
import { sortByDate, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = (calendarFocused) => {
        this.setState(()=> ({
            calendarFocused
        }))
    }
    onTextChange = (e)=> {
        this.props.setTextFilter(e.target.value);
    }
    onSortChange = (e)=>{
        const option = e.target.value;
        if(option === "date"){
            this.props.sortByDate();
        } else if (option === "amount"){
            this.props.sortByAmount();
        }
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange = {this.onSortChange}
                >
                        <option value="date">Date</option>
                        <option  value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=> false}
                    showClearDates={true}
                />    
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};
const mapDispatchToProps = (dispatch) => ({
    setStartDate: (date) => {
        return dispatch(setStartDate(date));
    },
    setTextFilter: (text) => {
        return dispatch(setTextFilter(text));
    },
    sortByDate: () => {
        return dispatch(sortByDate());
    },
    sortByAmount: () => {
        return dispatch(sortByAmount());
    },
    setEndDate: (date) => {
        return dispatch(setEndDate(date));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)