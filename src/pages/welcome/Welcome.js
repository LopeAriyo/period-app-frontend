import React from "react";
import { Route, Link } from "react-router-dom/";

import SignIn from "./subpages/SignIn";
import SignUp from "./subpages/SignUp";

// Todo
//+ Add a logo
//+ Add icon into input boxes

class Welcome extends React.Component {
    render() {
        return (
            <div className="Welcome">
                <h1>Welcome to Athena </h1>
                <p>A personal assistant for your menstural cycle</p>
                <Link to="/signin">
                    <button>Sign In</button>
                </Link>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
                <br />
                {/* <Switch> */}

                {/* </Switch> */}
            </div>
        );
    }
}

export default Welcome;
