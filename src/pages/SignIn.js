import React from "react";
import SignInForm from "../components/SignInForm";

class SignIn extends React.Component {
    render() {
        return (
            <div className="SignIn">
                <SignInForm />
                <p> Don't have an account? Sign Up </p>
            </div>
        );
    }
}

export default SignIn;
