import React from 'react';
import './Content.css';

const card = (props) => {
    return (
        <div className = "Content">
            <div className = "heading">
                <h1>{props.heading}</h1>
            </div>


            {/* image div */}
            <div className = "image">
                <img src = {props.imagelink}/>
            </div>

            <div className = "tag">
                <a>{props.tag}</a>
            </div>

            <div className = "text">
                <p> 
                    {props.text} 
                </p>
            </div>

            {/* <div className = "link">
                <a href = {props.redirectlink}>
                    <button className = "buttonlink">Listen on Spotify</button>
                </a>
            </div> */}
            <div>
            <a href = {props.redirectlink}>
                <button className = "buttonlink">Listen on Spotify</button>
            </a>
            </div>
            

        </div>
    );
}
export default card;