import React from "react";
import { Link } from "react-router-dom/";

import SignInForm from "../../../components/secondary/SignInForm";

class SignIn extends React.Component {
    render() {
        return (
            <div className="SignIn">
                <h1>Sign In </h1>
                <SignInForm />
                {/* <p>-OR-</p>
                <SignInWithSocials /> */}
                <p> Don't have an account? <Link to="/signup">Sign Up</Link> </p>
            </div>
        );
    }
}

export default SignIn;
