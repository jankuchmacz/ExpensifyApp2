import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
export const Header = (props) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
        <button onClick={props.startLogout}>Logout</button>
    </header>
);
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header);