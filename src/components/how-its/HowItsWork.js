import React from "react";
import "./how.css";
import { Row, Col } from "antd";
import Fade from "react-reveal/Fade";

function HowItsWork() {
  return (
    <div className="Mainhow">
      <img className="meshimg" src="mesh.png" alt="" />
      <div>
        <h4 className="how11">How It Works</h4>
      </div>
      <Fade big>
        <Row justify="center" className="how121">
          <Col xs={24} md={8} lg={8} className="how111">
            <div className="how22">
              <div>
                <p className="how221">1</p>
              </div>
              <div>
                <h6 className="how222">Treasury Revenue </h6>
                <h5 className="how223">Buy Et Sell Fees</h5>
              </div>
            </div>
            <p className="how224">
              {" "}
              a portion of the buy and sell helps
              <br /> sustain the clock360 revenue.
              <br />
              5%of the tradimg volume is
              <br /> redirected to the RFV, thus helping <br /> control the
              clock360 staking protocol distribution.
            </p>
          </Col>
          <Col xs={24} md={8} lg={8} className="how111">
            <div className="how22">
              <div>
                <p className="how221">2</p>
              </div>
              <div>
                <h6 className="how222">Treasury Growth </h6>
                <h5 className="how223"> Clock360 Treasuary</h5>
              </div>
            </div>
            <p className="how224">
              {" "}
              Treasuary inflow increases the
              <br />
              clock360 treasury balance and <br />
              back outstanding clock360 tokens.
              <br />
            </p>
          </Col>
          <Col xs={24} md={8} lg={8} className="how111">
            <div className="how22">
              <div>
                <p className="how221">3</p>
              </div>
              <div>
                <h6 className="how222">Staking rewards </h6>
                <h5 className="how223"> Clock360 Token </h5>
              </div>
            </div>
            <p className="how224">
              {" "}
              compounds automatically with a<br />
              treasuary-backed currency with
              <br />
              intrinsic value.
            </p>
          </Col>
        </Row>
      </Fade>
    </div>
  );
}

export default HowItsWork;
