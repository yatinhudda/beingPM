import React from 'react';
import './Saved.css';
import { FaRetweet} from 'react-icons/fa';

const savedPage = () =>{

    const ClickedOnNewest = () =>{
        console.log("Clicked on Newest, Update the page now");
    }

    return (
        <div className = "saved-div">
            <div className = "Saved-text">
                <h4>Saved</h4>
            </div>
            <div className = "saved-buttons">
                <button>Videos</button>
                <button>Articles</button>
                <button>Podcast</button>
                <h5 onClick = {ClickedOnNewest}><FaRetweet/>  Newest</h5>
            </div>
        </div>
    )
}

export default savedPage;