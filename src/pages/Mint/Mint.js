import React, { Fragment, useState, useEffect } from "react";
import { Header, MintButton, QuantitySelector } from "../../components";

import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Mint.css";
 
const Mint = () => {
    const [mintQuantity, setMintQuantity] = useState(1);

    const isPublic = false;

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
                    <h1>{ isPublic ? 'Public' : 'Whitelist'}<br/>mint is live!</h1>
                    <h2 className="color-gold">{ isPublic ? 'Max 3 per Transaction & No limit per wallet' : 'Public sale 6 PM UTC' }</h2>     
                    <div className="card">
                        <p>
                            { isPublic ? '' : 'Max 3 per Transaction & Max 3 NFTs per whitelisted wallet' }
                        
                        </p>
                        <div className="robo-packs">
                            <span><FontAwesomeIcon className="color-gold" icon={faRobot} /><br/><span className="price">50 ₳</span></span>
                            <span>⚶</span>
                            <span><FontAwesomeIcon className="color-gold" icon={faRobot} /> <FontAwesomeIcon className="color-gold" icon={faRobot} /><br/><span className="price">100 ₳</span></span>
                            <span>⚶</span>
                            <span><FontAwesomeIcon className="color-gold" icon={faRobot} /><br/><FontAwesomeIcon className="color-gold" icon={faRobot} /> <FontAwesomeIcon className="color-gold" icon={faRobot} /><br/><span className="price">150 ₳</span></span>
                        </div>
                        <MintButton changeMintQuantity={ setMintQuantity } quantity={ mintQuantity }></MintButton>
                    </div>
                    <div className="extra-info">
                        <p>
                            <span>SUPPLY</span><br/>
                            4000
                        </p>
                        <p>
                            <span>ROBOROBO ZIGMIT Policy ID</span><br/>
                            e4a1287629574fe5dd8025c3c6569680e0e6e883a2d8e9e48a516d2a
                        </p>
                    </div>
                    <p className="disclaimer">
                        <span className="color-gold">IMPORTANT</span><br/>
                        Do not send ADA from an exchange wallet. We suggest using a wallet like Nami, Eternl, Yoroi, or Daedalus.<br/><br/> 
                        Please send the exact ADA (Cardano) amount described. After the purchase is confirmed, you will receive a ROBOROBO ZIGMIT into your ADA wallet.<br/><br/> 
                        If you send the incorrect amount or if it's already sold out, you'll be refunded.
                    </p>
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
