import React from 'react';
import './Profile.css';
import { FaAngry} from 'react-icons/fa';

const profile = () => {
    return (
        <div className = "profile-section">
            <div className = "profile-header">
                <div>
                    <h4>Your Profile</h4>
                </div>
            </div>
            <div className = "profile-picture">
                <div>
                    <FaAngry size = {80}/>
                </div>
            </div>
            <div className = "Profile-content">
                <div className = "name">
                    <div className = "question">
                        <p>Name</p>
                    </div>
                    <div>
                        <p>Yatin Hudda</p>
                    </div>
                </div>

                <div className = "user-name">
                    <div className = "question">
                        <p>Username</p>
                    </div>
                    <div>
                        <p>Yatin007</p>
                    </div>
                </div>

                <div className = "user-email">
                    <div className = "question">
                        <p>Email ID</p>
                    </div>
                    <div>
                        <p>yatinchaudhary72@gmail.com</p>
                    </div>
                </div>
                <div>
                    <hr></hr>
                </div>
                <div className = "change-password">
                    <p>Change Password</p>
                </div>

                <div>
                    <hr></hr>
                </div>
                <div className = "log-out">
                    <p>Log Out</p>
                </div>

            </div>
        </div>
    );
}

export default profile;