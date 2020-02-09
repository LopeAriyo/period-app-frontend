import React from "react";
// import { Route, withRouter, Switch } from "react-router-dom";

// import SignIn from "./SignIn";
// import SignUp from "./SignUp";


// Todo
//+ Add a logo
//+ Add icon into input boxes

//Reminder
//& Add onClick functionality for Sign In and Sign Up Buttons so they display just the sign in and Sign Up form pages
//& If a user is already signed in display Home

//Warning
//! OnClick has no value currently


class Welcome extends React.Component {
    render() {
        return (
            <div className="Welcome">
                <h1>Welcome to Athena </h1>
                <p>A personal assistant for your menstural cycle</p>
                <button>Sign In</button>
                {/* <Route
                            path="/signin"
                            component={props => <SignIn {...props} />}
                        />
                        <br /> */}
                <button>Sign Up</button>
                {/* <Route path="/signup" component={props => <SignUp/>}> */}
                <br />
            </div>
        );
    }
}

export default Welcome;
