import React from 'react';
import './Navbar.css';

const navbar = (props) => {
    return (
        <div className = "Navbar">
            <div className = "profile">

            </div>
            <div className = "profile-name">
                <h2>Hello, {props.name}</h2>
            </div>
        </div>
    );
}
export default navbar;