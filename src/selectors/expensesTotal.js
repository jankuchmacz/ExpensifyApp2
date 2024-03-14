const getExpensesTotal = (expenses) => {
    return expenses.map((expense) => {
        return expense.amount
    }).reduce((accumulator, currentValue)=>{
        return accumulator+currentValue
    }, 0)
}
export default getExpensesTotal;