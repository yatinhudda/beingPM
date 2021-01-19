import React, { useState } from 'react';
import './Content.css';
import ReactPlayer from 'react-player';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const card = (props) => {

    // const [savedState] = useState({
    //     isSaved: false
    // });

    const toggleSaved = () => {
        console.log("Saved state changed");
    }
    
    return (
        <div className = "Content">
            <div className = "heading">
                <h1>{props.heading}</h1>
            </div>


            {/* image div */}
            <div className = "image">
                <img src = {props.imagelink}/>
                {/* <iframe 
                width="100%" 
                height="100%"
                margin = "auto"
                display = "block" 
                border-radius = "20px"
                src="https://www.youtube.com/embed/_Hp_dI0DzY4" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                {/* <ReactPlayer 
                    width = '100%'
                    height = '100%'
                    url = ''/> */}



            </div>

            <div className = "tag-saved">
                <div className = "tag">
                    <a>{props.tag}</a>
                </div>
                <div className = "saved" onClick = {toggleSaved}>
                    {/* {savedState.saved ? <FaBookmark/> : <FaRegBookmark/>}  */}
                    <FaRegBookmark/>
                </div>
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