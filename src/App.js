import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";

import "./App.css";

import API from "./API";

import Welcome from "./pages/welcome/Welcome";
import SignIn from "./pages/welcome/subpages/SignIn";
import SignUp from "./pages/welcome/subpages/SignUp";

import Home from "./pages/home/Home";
import Cycle from "./pages/home/subpages/Cycle";
import Journal from "./pages/home/subpages/Journal";
import Insights from "./pages/home/subpages/Insights";
import Profile from "./pages/home/subpages/Profile";

import Error404 from "./pages/errors/Error404";

//TODO
//+ Introduce 404 page and redo route

//QUESTIONS
//? Why does react router not work if you define a new route in a sub component
class App extends React.Component {

    state = {
        email: null
    };

    signIn = data => {
        this.setState({ email: data.email });
        localStorage.token = data.token;
    };

    signOut = () => {
        this.setState({ email: null });
        localStorage.removeItem("token");
    };

    componentDidMount() {
        if (localStorage.token) {
            API.validate()
                .then(data => {
                    if (data.error) throw Error(data.error);
                    this.signIn(data);
                    this.props.history.push("/inventory");
                })
                .catch(error => alert(error));
        }
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    {this.state.email === null ? (
                        <Route exact path="/" component={Welcome} />
                    ) : (
                        <Route exact path="/" component={Home} />
                    )}
                    <Route
                        path="/signin"
                        component={props => (
                            <SignIn {...props} signIn={this.signIn} />
                        )}
                    />
                    <Route
                        path="/signup"
                        component={props => <SignUp {...props} />}
                    />

                    <Route
                        path="/cycle"
                        component={props => (
                            <Cycle {...props} email={this.state.email} />
                        )}
                    />
                    <Route
                        path="/journal"
                        component={props => (
                            <Journal {...props} email={this.state.email} />
                        )}
                    />
                    <Route
                        path="/insights"
                        component={props => (
                            <Insights {...props} email={this.state.email} />
                        )}
                    />
                    <Route
                        path="/profile"
                        component={props => (
                            <Profile {...props} email={this.state.email} />
                        )}
                    />
                    <Route component={Error404} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
