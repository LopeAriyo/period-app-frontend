import React from "react";

import "../../Page.css";

import NavigationBar from "../../../components/primary/NavigationBar.js";

class Cycle extends React.Component {
    render() {
        return (
            <div className="Page">
                <h1>This is the Cycle Page</h1>
                <NavigationBar />
            </div>
        );
    }
}

export default Cycle;
