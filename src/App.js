import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Welcome from "./pages/welcome/Welcome";
import SignIn from "./pages/welcome/subpages/SignIn";
import SignUp from "./pages/welcome/subpages/SignUp";

import Home from "./pages/home/Home";
import Cycle from "./pages/home/subpages/Cycle";
import Journal from "./pages/home/subpages/Journal";
import Insights from "./pages/home/subpages/Insights";
import Profile from "./pages/home/subpages/Profile";

// import 404 from "./pages/errors/404";

//TODO
//+ Introduce 404 page and redo route

//QUESTIONS
//? Why does react router not work if you define a new route in a sub component
class App extends React.Component {
    state = {
        // email: null
        email: "lopeariyo@faker.com"
    };

    render() {
        return (
            <div className="App">
                {/* {this.state.email === null ? <Welcome /> : <Home />} */}
                <Switch>
                    {this.state.email === null ? (
                        <Route
                            exact
                            path="/"
                            component={props => <Welcome {...props} />}
                        />
                    ) : (
                        <Route
                            exact
                            path="/"
                            component={props => <Home {...props} />}
                        />
                    )}
                    <Route
                        path="/signin"
                        component={props => <SignIn {...props} />}
                    />
                    <Route
                        path="/signup"
                        component={props => <SignUp {...props} />}
                    />
                    <Route
                        path="/cycle"
                        component={props => <Cycle {...props} />}
                    />
                    <Route
                        path="/journal"
                        component={props => <Journal {...props} />}
                    />
                    <Route
                        path="/insights"
                        component={props => <Insights {...props} />}
                    />
                    <Route
                        path="/profile"
                        component={props => <Profile {...props} />}
                    />
                    <Route
                        component={() => <h1>Ooops...404 - Page Not Found </h1>}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
