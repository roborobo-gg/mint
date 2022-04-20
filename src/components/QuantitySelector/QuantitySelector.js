import React, { Fragment, useState } from "react";
import RoboFaceButton from "../RoboFaceButton";
import "./QuantitySelector.css";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RobotsButton from "../RobotsButton";

const QuantitySelector = props => {    
    const onSelectMintQuantity = (quantity) => {
        props.setQuantity(quantity)
    }

    return (
    <div>   
        mint quantity
        <div className="quantity-selector">
            {
                Array.from(Array(3)).map( (x, i) => <RobotsButton key={ i } value={ i+1 } clickFn={ onSelectMintQuantity } className={ props.quantity != i+1 ? 'hide' : '' }></RobotsButton>)
            }
        </div>
    </div>
    );
  };
  
  export default QuantitySelector;

  /*
          quantity: { props.quantity }
        <RoboFaceButton value={ 1 } clickFn={ setMintQuantity } className="teste"></RoboFaceButton>
        <RoboFaceButton value={ 2 } clickFn={ setMintQuantity }></RoboFaceButton>
        <RoboFaceButton value={ 3 } clickFn={ setMintQuantity }></RoboFaceButton>
  */


        /*
        Array.from(Array(3)).map( (x, i) => <RoboFaceButton key={ i } value={ i+1 } clickFn={ onSelectMintQuantity } className={ props.quantity >= i+1 ? 'highlight' : 'z' }></RoboFaceButton>)
        */