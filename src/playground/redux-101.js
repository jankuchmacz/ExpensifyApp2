import { createStore } from "redux";


/*const add = ({a,b}) => {
    return a+b;
}
console.log(add({a: 1, b:12}));*/

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const resetCount = () => ({
    type:'RESET'
});
const setCount = ({count}) => ({
    type: 'SET',
    count
});

//Reducers
//1. Pure functions - the output is determined by input
//2.Never change state or action
const countReducer = (state = { count: 0}, action)=>{
    switch(action.type){
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default: 
            return state;
    }
}

const store = createStore(countReducer);
const unsubscribe = store.subscribe(()=>{
    //this function runs when store changes
    console.log(store.getState());
});


/*store.dispatch({
    type: 'INCREMENT', 
    incrementBy: 5
});*/
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch((incrementCount()));

store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 101}));

