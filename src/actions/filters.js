//Set-text-filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
//Sort-by-amount
export const sortByAmount = () => ({
    type: 'SET_SORT_BY_AMOUNT'
})
//Sort-by-date
export const sortByDate = () => ({
    type: 'SET_SORT_BY_DATE'
})
//Set-start-date
export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})
//Set-end-date
export const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})
