import React from "react";
import "./best.css";
import Fade from "react-reveal/Fade";
function BestAuto() {
  return (
    <div className="Mainbest">
      <Fade>
        <div className="best22">
          <p className="best11">
            The Best Auto-Staking
            <br />
            & Auto- Compounding
            <br />
            Protocol in Crypto
          </p>
          <div>
            <li className="li11">highest fixed APY - 102,483% </li>
            <li className="li11">
              {" "}
              First Automatic Staking and Compounding in Your Wallet!
            </li>
            <li className="li11">
              Get Rewards Every 30 Minutes / 48 Times Daily!
            </li>
          </div>
          <div className="bestbtn">
            <div className="bestbtn11">
              <p>Open App</p>
            </div>
            <div className="bestbtn12">
              <p>White Paper</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default BestAuto;
