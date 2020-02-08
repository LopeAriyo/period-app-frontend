import React from "react";
import SignUpForm from "../components/SignUpForm.js";

class SignUp extends React.Component {
    render() {
        return (
            <div className="SignUp">
                <SignUpForm />
                <p> Already have an account? Sign In </p>
            </div>
        );
    }
}

export default SignUp;
