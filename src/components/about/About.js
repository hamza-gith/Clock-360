import React from "react";
import "./about.css";
import { Row, Col } from "antd";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div className="mainabout">
      <Fade left>
        <div>
          <Row justify="center">
            <Col xs={24} md={12} lg={10} className="aboutcol">
              <h4 className="about11">102483.58%</h4>
              <p className="about112">Fixed Staking APY</p>
              <div>
                <button className="aboutbtn">Open app</button>
              </div>
            </Col>
            <Col xs={24} md={12} lg={14} className="about4444">
              <h6 className="about221">ABOUT</h6>
              <p className="about22">
                Titano Finance is transforming DeFi with the Titan° <br />
                Autostaking Protocol [TAP) that delivers the industry's <br />
                highest fixed APY, rebasing rewards every 30 minutes, <br />
                and a simple buy-hold-earn system that grows your <br />
                portfolio in your wallet, fast.
              </p>
            </Col>
          </Row>
        </div>
      </Fade>
    </div>
  );
}

export default About;
