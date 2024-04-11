import uuid from 'uuid';
import database from '../firebase/firebase';
//Add-expense
const addExpense = (expense) => ({
        type: 'ADD_EXPENSE', 
        expense
});
export const startAddExpense = (expenseData = {})=>{
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = {
            description,
            note, 
            amount,
            createdAt
        }
        return database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        });

    }
}
//Remove-expense
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
export const startRemoveExpense = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`)
                .remove()
                .then(()=>{
                    dispatch(removeExpense({id: id}));
                })
    }
};

//Edit-expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE', 
    id,
    updates
});
export const startEditExpense = (id, expense) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`)
                .update(expense)
                .then(()=>{
                    dispatch(editExpense(id, expense));
                })
    }
}
//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES', 
    expenses
});
export const startSetExpenses = ()=>{
    return (dispatch) => {
        return database.ref('expenses')
                .once('value')
                .then((snapshot)=>{
                    const expenses = [];
                    snapshot.forEach((childSnapshot)=>{
                        expenses.push({
                            id: childSnapshot.key,
                            ...childSnapshot.val()
                        })
                    })
                    dispatch(setExpenses(expenses));
                })
    }
}

/*database.ref('expenses')
  .once('value')
  .then((snapshot)=>{
    const expenses = [];
    snapshot.forEach((childSnapshot)=>{
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  });*/


export {addExpense, removeExpense, editExpense};