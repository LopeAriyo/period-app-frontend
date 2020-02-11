import React from "react";

import "../../Page.css";

import NavigationBar from "../../../components/primary/NavigationBar.js";
import ProfileCard from "../../../components/ProfileCard"

//TODO
//+ Have the app pass down user's first name, last name, email address and put in the profile card component
//+ Have the profile display the users goal, should this be put in the backend??
//+ As you create new functionalities, add setting options for display


//TODO - Mod 5
//+ On click on profile card, go to profile settings

class Profile extends React.Component {

    // componentDidMount() {
    //     if (this.props.email === null) {
    //         this.props.history.push("/signin");
    //     }
    // }

    render() {
        return (
            <div className="Page">
                <ProfileCard user={this.props.user}/>
                {/* <GoalCard/> */}
                {/* <SettingsCard/>
                <SettingsCard/>
                <SettingsCard/>
                <CycleSettingsCard/> */}
                <NavigationBar />
            </div>
        );
    }
}

export default Profile;
