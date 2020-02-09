import React from "react";

import API from "../../API";
class SignInForm extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleSubmit = () => {
        API.signIn(this.state.email, this.state.password)
            .then(data => {
                if (data.error) throw Error(data.error);
                this.props.signIn(data);
                this.props.history.push("/profile");
            })
            .catch(error => alert(error));
    };

    handleChange = event =>
        this.setState({ [event.target.name]: event.target.value });

    render() {
        const { email, password } = this.state;
        const { handleChange, handleSubmit } = this;

        return (
            <div>
                <input
                    id="emailInput"
                    name="email"
                    placeholder="E-Mail Address"
                    value={email}
                    onChange={handleChange}
                />
                <br />
                <input
                    id="passwordInput"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                />
                {/* <p> Forgot Password? </p> */}
                <br />
                <button onClick={handleSubmit}>Sign In</button>
            </div>
        );
    }
}

export default SignInForm;
