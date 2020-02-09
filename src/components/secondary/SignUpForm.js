import React from "react";

class SignUpForm extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleSubmit = () => {
        //     API.signIn(this.state.email, this.state.password)
        //       .then(data => {
        //         if (data.error) throw Error(data.error)
        //         this.props.signIn(data)
        //         this.props.history.push('/inventory')
        //       })
        //       .catch(error => alert(error))
    };

    handleChange = event =>
        this.setState({ [event.target.name]: event.target.value });

    render() {
        const {firstName, lastName, email, password } = this.state;
        const { handleChange, handleSubmit } = this;

        return (
            <div>
            <input
                    id="firstNameInput"
                    name="firstname"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={handleChange}
                />
                <br />
                <input
                    id="lastNameInput"
                    name="lastname"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={handleChange}
                />
                <br />
                <input
                    id="emailInput"
                    name="email"
                    placeholder="Enter E-Mail Address"
                    value={email}
                    onChange={handleChange}
                />
                <br />
                <input
                    id="passwordInput"
                    name="password"
                    placeholder="Create Password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                />
                <br />
                <button onClick={handleSubmit}>Sign Up</button>
            </div>
        );
    }
}

export default SignUpForm;