import uuid from 'uuid';
//Add-expense
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
    ) => ({
        type: 'ADD_EXPENSE', 
        expense: {
            id: uuid(),
            description,
            note, 
            amount,
            createdAt
        }
})
//Remove-expense
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
//Edit-expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE', 
    id,
    updates
})
export {addExpense, removeExpense, editExpense};