import React, { useState } from "react";
import "./BackgroundControls.css"

const BackgroundControls = (props) => {
      
    const handleClick = () => {
      props.setBgColor(getRandomColor());
    };
  
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };  

    return (
        <div className="backgroundControls">
            <span>
                Customizar Rocketcard
            </span>
            
            <button onClick={handleClick}>
                Gerar background
            </button>
                
        </div>    
    )
}

export default BackgroundControls;