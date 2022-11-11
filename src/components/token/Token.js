import React from "react";
import { Row, Col } from "antd";
import "./token.css";
import Slide from "react-reveal/Slide";

function Token() {
  return (
    <div className="maintoken">
      <div className="subtoken">
        <h3 className="token11">Tokenomics</h3>
      </div>
      <Row>
        <Col xs={24} md={8} lg={8} className="tokencol">
          <Slide left>
            <div className="token2222">
              <h4 className="token22">clock360 tokenomics Explained</h4>
              <hr className="tokenhr" />
              <p className="token221">
                $clock360 is a BEP-20 with an elastic
                <br />
                supply that rewards holders using a<br /> 
                positive rebase formula.
              </p>
            </div>
          </Slide>
        </Col>
        <Col xs={24} md={8} lg={8} className="tokencol1">
          <Slide top>
            <div className="token333">
              <div className="token33">
                <img className="logo23" src="graph.png" alt="" />
              </div>
              <div>
                <h5 className="token331">Automatic LP</h5>
                <p className="token332">
                  5% of the trading fees return to the
                  <br /> liquidity ensuring $clock360’s increasing
                  <br /> collateral value.
                </p>
              </div>
            </div>
          </Slide>
          <Slide bottom>
            <div className="token3331">
              <div className="token33">
                <img className="logo23" src="shield.png" alt="" />
              </div>
              <div>
                <h5 className="token331">Treasury</h5>
                <p className="token332">
                  3% of the Purchases and 8% of the Sales Go <br />
                  Directly To the Treasury Which Supports The
                  <br />
                  RFV
                </p>
              </div>
            </div>
          </Slide>
        </Col>
        <Col xs={24} md={8} lg={8} className="tokencol">
          <Slide right>
            <div className="token3332">
              <div className="token33">
                <img className="logo23" src="walet.png" alt="" />
              </div>
              <div>
                <h5 className="token331">risk free value</h5>
                <p className="token332">
                  5% of the trading fees are redirected to the
                  <br /> RFV which helps sustain and back the staking
                  <br /> rewards providing by the positive rebase.
                </p>
              </div>
            </div>
          </Slide>
        </Col>
      </Row>
    </div>
  );
}

export default Token;
