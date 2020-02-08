import React from "react";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
class App extends React.Component {
    render() {
        return (
            <div className="App">
            <h2>Welcome to Athena </h2>
            <p>The personal assistant for your menstural cycle</p>
                <button onClick="#">Sign In</button>
                <br />
                <button onClick="#">Sign Up</button>
                <br />
            </div>
        );
    }
}

export default App;
