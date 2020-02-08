import React from "react";
import "./App.css";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <SignIn/>
                <SignUp/>
                <Home/>
            </div>
        );
    }
}

export default App;
