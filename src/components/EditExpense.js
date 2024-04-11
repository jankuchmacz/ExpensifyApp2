import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <ExpenseForm
                    expense = {this.props.expense} 
                    onSubmit = {this.onSubmit}
                />
                <button onClick={this.onRemove}>
                    Remove
                </button>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editExpense: (id, expense) => {
            return dispatch(startEditExpense(id, expense))
        },
        removeExpense: ({id}) => {
            return dispatch(startRemoveExpense({id: id}))
        }
    }
}
const mapStateToProps = (state, props) => {
   return {
        expense: state.expenses.find((expense)=> {
            return expense.id === props.match.params.id
        })
   } 
}
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);