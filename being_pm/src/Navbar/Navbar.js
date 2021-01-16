import React from 'react';
import './Navbar.css';
import { FaBookmark } from 'react-icons/fa';



const navbar = (props) => {

    const profileClick = () => {
        console.log("Clicked on profile");
    }

    const savedIconClick = () => {
        console.log("Clicked on saved icon");
    }

    return (
        <div className = "Navbar">
            <div className = "profile" onClick = {profileClick}>

            </div>
            <div className = "profile-name">
                <h2>Hello, {props.name}</h2>
            </div>
            <div className = "saved" onClick = {savedIconClick}>
                <h5> <FaBookmark/>  Saved</h5>
            </div>
        </div>
    );
}
export default navbar;