//Higher Order Component (HOC) - a component that renders another component
import React from "react";
import ReactDOM  from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}
const requireAuthentication = (WrappedComponent) => {
    return (props)=> (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please log in!</p> }
        </div>
    );
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info="Details"/>, document.querySelector('#app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Details"/>, document.querySelector('#app'));
//pokaz Info jezeli ktos jest zalogowany jeśli nie prośbę aby się zalogował