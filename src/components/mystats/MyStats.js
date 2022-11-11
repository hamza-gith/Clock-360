import { Col, Row } from "antd";
import React from "react";
import "./mystats.css";

function MyStats() {
  return (
    <div className="Mainstats">
      <div className="subdivstats ">
        <Row justify="center" className="statrow">
          <Col xs={24} md={20} lg={8} className="colstats">
            <div>
              <div style={{ display: "flex" }}>
                <div>
                  <img src="stats.png" alt="" />
                </div>
                <div>
                  <p className="capword">Market Cap</p>
                </div>
              </div>
              <div className="numbdiv">
                <p className="numb">$152,641,662.05</p>
              </div>
            </div>
          </Col>
          <Col xs={24} md={20} lg={8} className="colstats">
            <div>
              <div style={{ display: "flex" }}>
                <div>
                  <img src="stats2.png" alt="" />
                </div>
                <div>
                  <p className="capword">APY Statistics</p>
                </div>
              </div>
              <div className="numbdiv2">
                <p className="numb">102 483.58%</p>
                <img className="stats3logo" src="stats3.png" alt="" />
              </div>
            </div>
          </Col>

          <Col xs={24} md={20} lg={8} className="colstats">
            <div>
              <div style={{ display: "flex" }}>
                <div>
                  <img src="stats4.png" alt="" />
                </div>
                <div>
                  <p className="capword">Next Rebase</p>
                </div>
              </div>
              <div className="numbdiv3">
                <p className="numbtwo">00:15:04</p>
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <p className="currentword1">Staking Statistics</p>
          <div className="apydiv">
            <div className="currentdiv">
              <p className="currentword">Current APY:</p>
              <p className="currentone">102 483.58%</p>
            </div>
            <hr className="breakline" />

            <div className="currentdiv">
              <p className="currentword">Your Wallet Balance:</p>
              <p className="currentword">0</p>
            </div>

            <div className="currentdiv">
              <p className="currentword">Next Reward Amount:</p>
              <p className="currentword">0</p>
            </div>
            <div className="currentdiv">
              <p className="currentword">Next Reward Yield:</p>
              <p className="currentword">0,03958%</p>
            </div>
            <div className="currentdiv">
              <p className="currentword">ROI (5-Day Rate):</p>
              <p className="currentone">9,94%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyStats;
 