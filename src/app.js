//import './utils.js';
//when importing default export naming is not important
/*import substract, { square, add } from './utils.js';

console.log('app.js is running!!!');
console.log(square(4));
console.log(add(100, 23));
console.log(substract(100,80));
*/


/*import isSenior, { isAdult, canDrink } from "./person";
const age = 19;
console.log(isAdult(age));
console.log(canDrink(age));
console.log(isSenior(67));
*/

//install->import->use - first install using yarn or npm 
//import validator from 'validator';
//console.log(validator.isEmail('test@gmail.com'));
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'normalize-css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>    
);
ReactDOM.render(jsx, document.querySelector('#app'))


/*class OldSyntax {
    constructor(){
        this.name="Jan";
        this.getGreeting=this.getGreeting.bind(this);
    }
    getGreeting(){
        return `Hi. My name is ${this.name}`;
    }
}
const oldSyntax = new OldSyntax ();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

//new syntax
class NewSyntax {
    name = "Janek";
    getGreeting = () => {
        return `Hi. My name is ${this.name}`;
    }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting());*/
