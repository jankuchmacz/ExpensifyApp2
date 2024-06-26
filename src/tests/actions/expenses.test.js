import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);
const uid = 'testuid';
const defaultAuthState = { auth: { uid }}

beforeEach((done)=>{
    const expenseData = {};
    expenses.forEach(({ id, description, note, amount, createdAt })=>{
        expenseData[id] = { 
            description, 
            note,
            amount,
            createdAt
        }
    })
    database.ref(`users/${uid}/expenses`).set(expenseData).then(()=> done());
});

test('should setup remove expense action object', ()=>{
    const action = removeExpense({id: `123abc`});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'       
    })
});
test('should remove expense from firebase', (done)=>{
    const id = '2';
    const store = createMockStore(defaultAuthState);
    store.dispatch(startRemoveExpense({id: id})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(null);
        done(); //force jest to wait;
    });
   
});
test('should setup edit expense action object', ()=>{
    const action = editExpense('5', {description: 'New desc'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE', 
        id: '5',
        updates: {
            description: 'New desc'
        }
    });
});
test('should edit expense from firebase', (done)=>{
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }
    const id = '1';
    store.dispatch(startEditExpense(id, expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates: expenseData
        });
        return database.ref(`users/${uid}/expenses/${actions[0].id}`).once('value');        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done(); //force jest to wait;
    })
});
test('should setup add expense action object with provided values', ()=>{
    const action = addExpense(expenses[1]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    })
});
test('should add expense to database and store', (done)=>{
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done(); //force jest to wait;
    })
});
test('should add expense with defaults to database and store', (done)=>{
    const store = createMockStore(defaultAuthState);
    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '', 
                note: '', 
                amount: 0, 
                createdAt: 0
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual({
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
        });
        done(); //force jest to wait;
    })
});
test('should setup set expenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses: expenses
    })
});
test('should fetch expenses from firebase', (done)=>{
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses: expenses
        });
    });
    done();
});




