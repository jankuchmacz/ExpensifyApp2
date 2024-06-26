import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/Dashboard';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import NotFoundPage from '../components/Error';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute  from './PublicRoutes';

export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <Route component={NotFoundPage}/>
            </Switch> 
        </div>    
    </Router>
);
export default AppRouter;