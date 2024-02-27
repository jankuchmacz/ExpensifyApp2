import { createStore, combineReducers } from "redux";





store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);   
})
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));

//store.dispatch(removeExpense({id: expenseOne.expense.id}));
//store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
//store.dispatch(setTextFilter('co'));
//store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
//store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));



const demoState = {
    expenses: [{
        id: '123',
        description: 'Rent',
        note: 'This was the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount,
        startDate: undefined,
        endDate: undefined
    }
};
/*const user = {
    name: 'Jan', 
    age: 29
};
console.log({
    ...user,
    location: 'Cracow',
    age: 30
    
})*/