import React from "react";

import "./ProfileCard.css";
import UserIcon from "../assets/user.svg"


const ProfileCard = props => {
    return (
        <div className="ProfileCard">
        <h1>Profile</h1>
            <div className="icon">
                <img id= "user-icon" alt="User Icon" src={UserIcon}></img>
            </div>
            <div className="user-details">
                <div> {props.user.first_name} {props.user.last_name}</div>
                <div> {props.user.email}</div>
            </div>
        </div>
    );
};

export default ProfileCard;
