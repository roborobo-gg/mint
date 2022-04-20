import React, { Fragment } from "react";
import "./RobotsButton.css";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RobotsButton = props => {
    const handleClick = () => {
        console.log('clicking');
        props.clickFn(props.value);
    }
    return (
      <div className={ `${props.className} robots-button` } onClick={ handleClick }>
            {
                Array.from(Array(props.value)).map( (x, i) => <FontAwesomeIcon icon={faRobot} />)
            }
      </div>
    );
  };
  
  export default RobotsButton;
  