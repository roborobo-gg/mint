import React, { Fragment, useState, useEffect } from "react";
import { Header, MintButton, QuantitySelector } from "../../components";

import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Mint.css";
 
const Mint = () => {
    const [mintQuantity, setMintQuantity] = useState(1);

    const [isShownMain, setIsShownMain] = useState(true);
    
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
	setIsShown(current => !current);
	setIsShownMain(false)
    };
    const isPublic = false;

    const today = new Date();
    today.setHours(17, 59, 59, 998);
    const now = new Date();

    
    useEffect(() => {
        function handleResize() {
            setVh();
        }

        window.addEventListener('resize', handleResize)
    });

    const setVh = () => {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
    }

    setVh();
    
    return (
	<Fragment>
            <Header></Header>
            <div className="mint-page-wrapper">
                <div className="content-wrapper">
		    <input id="input1" type="image" style={{ display: (isShownMain ? 'block' : 'none') }} src={require('../../assets/capa.jpg')} width="100%" height="200%" onClick={handleClick} />	 
		    <div class="scrollmenu" style={{ display: (isShown ? 'block' : 'none') }}>
			<div class="media-element">
			    <p> PAGE 01 </p>
			    <p></p>
			    <img style={{ display: (isShown ? 'block' : 'none') }} src={require('../../assets/page1.jpg')} width="100%" height="100%"/>            

		    	    <p></p>
			    <p>Sold Out </p>
			</div>
			<div class="media-element">
			    <p> PAGE 02 </p>
			    <p></p>
			    <img style={{ display: (isShown ? 'block' : 'none') }} src={require('../../assets/03_ROBODOINGTHINGS.jpg')} width="100%" height="100%"/>            

		    	    <p></p>
			    <p>Sold Out </p>
			
			</div>
			<div class="media-element">
			    <p> PAGE 03 </p>
			    <p></p>
			    <img style={{ display: (isShown ? 'block' : 'none') }} src={require('../../assets/04_ROBODOINGTHINGS.jpeg')} width="100%" height="100%"/>            

		    	    <p></p>
			    <p><a href="https://pay.nmkr.io/?p=f334f7e9221d46738755ed4232eb611c&c=1" class="button">Mint Here</a></p>
			
			</div>

		    </div>
		    
		    <div style={{ display: (isShown ? 'block' : 'none') }}>
			<p></p>
			<br/>  
			<p className="disclaimer">
			    <span className="color-gold">IMPORTANT</span><br/>
			    Do not send ADA from an exchange wallet. We suggest using a wallet like Nami, Eternl, Yoroi, or Daedalus.<br/><br/> 
			    Please send the exact ADA (Cardano) amount described. After the purchase is confirmed, you will receive a ROBOROBO ODYSSEY page into your ADA wallet.<br/><br/> 
			    If you send the incorrect amount or if it's already sold out, you'll be refunded.
			</p>
		    </div>
		</div>
	    </div>
        <footer>
            <p>-</p>
            <p>ROBOROBO</p>
        </footer>
        </Fragment>
	
        
    );
};

export default Mint;

  /*
    <QuantitySelector quantity={ mintQuantity } setQuantity={ setMintQuantity }></QuantitySelector>
  */
