import React, {useState,} from 'react'
import {Howl} from "howler"

function Results(props) {

    //check if the user is playing a preview
    const [isPlaying, setIsPlaying]=useState(false)
    const playSound= (src)=>{
        const sound =new Howl({src, html5:true})
        setIsPlaying(!isPlaying)
        !isPlaying ? (sound.play()) : (sound.pause())  
    }

    let trackTime;
    let minutes = Math.floor(props.trackLength / 60000);
    let seconds = ((props.trackLength % 60000) / 1000).toFixed(0);
    (seconds<10) ? trackTime = minutes +":"+"0".concat(seconds) : trackTime= minutes + ":" +seconds;
           
return (
    <div className="card"> 

            <button className="fav-Button"  onClick={props.handleFave} ><i className="fa-regular fa-heart "></i></button>
            <div className="header">
                <img className="art" src={props.artworkUrl100} alt="album art"/>
            </div>

            <div className="info">
                <h3>{props.artistName}</h3>
                <p>{(props.trackName).slice(0,60)}</p>
            </div>
        
            <div className="prog">
                <div className="prog-time">
                    <p className="left">0:00</p>
                    <p className="right">{trackTime}</p>
                </div>
                <div className="prog-bar">
                    <div className="prog-bar-inner"></div>
                </div>
            </div>  
        
            <div className="buttons">
                <button className="preview-Button" onClick={()=> playSound(props.previewUrl)}>Preview Audio</button>
                {/* <button className="stop-button" onClick={()=> playSound()}><i className="fas fa-stop"></i></button> */}
               
            </div>
            <div className="kind">{props.kind}</div>
            <div className="bar"></div>
        </div>
  )
}
export default Results;
