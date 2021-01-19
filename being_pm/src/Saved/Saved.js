import React from 'react';
import './Saved.css';
const savedPage = () =>{
    return (
        <div className = "saved-div">
            <div className = "Saved-text">
                <h4>Saved</h4>
            </div>
            <div className = "saved-buttons">
                <button>Videos</button>
                <button>Articles</button>
                <button>Podcast</button>
            </div>
        </div>
    )
}

export default savedPage;