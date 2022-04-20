import React, { Fragment } from "react";
import "./RoboFaceButton.css";

const RoboFaceButton = props => {
    const handleClick = () => {
        console.log('clicking ');
        props.clickFn(props.value);
    }
    return (
      <div className={ `${props.className} robo-face-button` } onClick={ handleClick }>
          <div className="eye left open"></div>
          <div className="eye right"></div>
      </div>
    );
  };
  
  export default RoboFaceButton;
  