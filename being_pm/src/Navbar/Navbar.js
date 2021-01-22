import React from 'react';
import './Navbar.css';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const navbar = (props) => {

    const profileClick = () => {
        console.log("Clicked on profile");
    }

    const savedIconClick = () => {
        console.log("Clicked on saved icon");
    }

    return (
        <div className = "Navbar">
            <div className = "inner-nav">
                <Link to = './Profile/Profile'>
                <div className = "profile" onClick = {profileClick}>

                </div>
                </Link>
                <div className = "profile-name">
                    <h2>Hello, {props.name}</h2>
                </div>
                <Link to = './Saved/Saved'>
                <div className = "saved" onClick = {savedIconClick}>
                    <h5> <FaBookmark/>  Saved</h5>
                </div>
                </Link>
            </div>
        </div>
    );
}
export default navbar;