import React from "react";
import { Route, Switch } from "react-router-dom";

import "../Page.css";

import Cycle from "./subpages/Cycle";
import Journal from "./subpages/Journal";
import Insights from "./subpages/Insights";
import Profile from "./subpages/Profile";

import NavigationBar from "../../components/primary/NavigationBar.js";

class Home extends React.Component {
    render() {
        return (
            <div className="Page">
                <h1>Welcome First Name</h1>
                {/* <Switch>
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
                </Switch> */}
                <NavigationBar />
            </div>
        );
    }
}

export default Home;