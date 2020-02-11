import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";

import "./App.css";

import API from "./API";

import Welcome from "./pages/welcome/Welcome";
import SignIn from "./pages/welcome/subpages/SignIn";
// import SignUp from "./pages/welcome/subpages/SignUp";

import Home from "./pages/home/Home";
import Cycle from "./pages/home/subpages/Cycle";
// import Journal from "./pages/home/subpages/Journal";
// import Insights from "./pages/home/subpages/Insights";
import Profile from "./pages/home/subpages/Profile";

import Error404 from "./pages/errors/Error404";

//QUESTIONS
//? Why does react router not work if you define a new route in a sub component
class App extends React.Component {
    state = {
        user: null
    };

    signIn = data => {
        this.setState({ user: data});
        console.log(data)
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
                    this.props.history.push("/");
                })
                .catch(error => alert(error));
        }
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    {this.state.user === null ? (
                        <Route exact path="/" component={Welcome} />
                    ) : (
                        <Route
                            exact
                            path="/"
                            component={props => (
                                <Home {...props} user={this.state.user.user} signOut={this.signOut} />
                            )}
                        />
                    )}
                    <Route
                        path="/signin"
                        component={props => (
                            <SignIn {...props} signIn={this.signIn} />
                        )}
                    />
                    {/* <Route
                        path="/signup"
                        component={props => <SignUp {...props} />}
                    /> */}
                    <Route
                        path="/cycle"
                        component={props => (
                            <Cycle {...props} user={this.state.user.user} />
                        )}
                    />
                    {/* <Route
                        path="/journal"
                        component={props => (
                            <Journal {...props} email={this.state.email} />
                        )}
                    /> */}
                    {/* <Route
                        path="/insights"
                        component={props => (
                            <Insights {...props} email={this.state.email} />
                        )}
                    /> */}
                    <Route
                        path="/profile"
                        component={props => (
                            <Profile {...props} user={this.state.user.user} />
                        )}
                    />
                    <Route component={Error404} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
