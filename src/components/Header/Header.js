import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

import "./Header.css";

const Header = props => {
    const twitterUrl = 'https://twitter.com/ROBOROBO_gg';
    const discordUrl = 'https://discord.gg/BzRKhXFF';

    return (
      <div className="header-wrapper">
            <div className="logo">
              <img
                src={require("../../assets/ROBOROBO_LOGO.png")}
                alt="roborobo"
              />
            </div>
            <nav>
                <a href={ twitterUrl } target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href={ discordUrl } target="_blank"><FontAwesomeIcon icon={faDiscord} /></a>
            </nav>
      </div>
    );
  };
  
  export default Header;
