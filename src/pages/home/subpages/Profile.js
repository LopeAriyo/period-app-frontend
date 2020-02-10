import React from "react";

import "../../Page.css";

import NavigationBar from "../../../components/primary/NavigationBar.js";

class Profile extends React.Component {
    state = {
    };

    componentDidMount (){
        if (this.props.email === null){
            this.props.history.push('/signin')
        }
    }

 

    render() {
        return (
            <div className="Page">
                <h1>This is {this.props.email} Profile Page</h1>
                <NavigationBar />
            </div>
        );
    }
}

export default Profile;
