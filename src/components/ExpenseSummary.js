import React from "react";
import { connect } from "react-redux";
import getExpensesTotal from "../selectors/expensesTotal";
import getVisibleExpenses from "../selectors/expenses";
import numeral from "numeral";

export const ExpenseSummary = (props) => {
    const expenseWord = props.numberOfExpenses === 1 ? 'expense' : 'expenses';
    const expensesTotal = numeral(props.expensesTotal).format('$0,0.00')
    return (
        <div>
            <h1>Viewing {props.numberOfExpenses} {expenseWord} totalling {expensesTotal}</h1>
        </div>
    );
}
const mapStateToProps = (state)=>{
    const visibleExpenses =  getVisibleExpenses(state.expenses, state.filters)
    return {
        numberOfExpenses: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)/100
    }
};
export default connect(mapStateToProps)(ExpenseSummary);