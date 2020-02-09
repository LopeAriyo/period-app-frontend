import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";

class App extends React.Component {
    state = {
        email: null
    };

    render() {
        return (
            <div className="App">
                {this.state.email === null ? (
                    <Route exact path="/" component={props => <Welcome {...props} />} />
                ) : (
                    <Route exact path="/" component={props => <Home {...props} />} />
                )}
            </div>
        );
    }
}

export default App;
