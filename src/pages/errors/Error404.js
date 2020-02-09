import React from "react";
import { Link } from "react-router-dom/";

import "../Page.css";

class Error404 extends React.Component {
    render() {
        return (
            <div className="Page">
                <h1>Ooops...</h1>
                <h2>404 - Page Not Found </h2>
                <h3>
                    The page you are looking for might have been removed, had
                    it's name changed or is temporarily unavailable
                </h3>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
        );
    }
}

export default Error404;
