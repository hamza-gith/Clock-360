import { Col, Row } from "antd";
import React from "react";
// import { Container } from "react-bootstrap";
import "./clockyield.css";
import { Slider } from "antd";

function Clock() {
  function formatter(value) {
    return `${value}%`;
  }

  return (
    <div className="clockmainone">
      <div className="clockmaintwo">
        <div>
          <h3 className="heading">Clock360 Yield Simulator</h3>
        </div>
        <div>
          <p className="paragraph">
            In order to participate in SHOs users are required to Stake their
            DAO Tokens. Depositing DAO tokens to the Staking Contracts also
            provides Venture Yield Rewards. The Size of the reward depends on
            the staking period. Longer Stakes pay better, however users are
            required to pay 50% of their earned rewards when unstaking before
            the end of their defined period. To learn more watch the explainer
            video on the right. Check Historical APR from SHO Yield
          </p>
        </div>
        <Row gutter={30} justify="center" className="rowwclock">
          <Col xs={24} md={16} lg={8} className="col3">
            <div className="clockcol1div1">
              <div className="clockcol1div11">
                <div>
                  <img style={{ width: "1rem" }} src="Vector.png" alt="" />
                </div>
                <div>
                  <p style={{ paddingTop: "1.1rem", lineHeight: ".8rem" }}>
                    Table Clock
                  </p>
                </div>
              </div>
              <div>
                <p className="p180">Your 180 Days C360 Yiled Rewards</p>
              </div>
              <div>
                <p className="p170">170 C360</p>
              </div>
              <div className="divv">
                <div>
                  <p className="p9">9% APR</p>
                </div>
                <div>
                  <p>$1,189</p>
                </div>
              </div>
            </div>
            <div className="divv2">
              <div>
                <p className="pimpt">Staking Inputs</p>
              </div>
              <div>
                <p className="pc360">Number of table C360 to be Staked</p>
              </div>
              <div className="divv3">
                <div>
                  <p>2,000</p>
                </div>
                <div>
                  <p>1,000,000</p>
                </div>
              </div>
              <div>
                <Slider style={{ color: "green" }} tipFormatter={formatter} />
              </div>
              <div>
                <p className="pc360">Days to be Staked</p>
              </div>
              <div className="divv3">
                <div>
                  <p>30d</p>
                </div>
                <div>
                  <p>1,095d</p>
                </div>
              </div>
              <div>
                <Slider style={{ color: "green" }} tipFormatter={formatter} />
              </div>
              <div>
                <p className="btn">Join SHOs & VENTURE YIELD</p>
              </div>
            </div>
          </Col>
          <Col xs={24} md={16} lg={8} className="col3">
            <div className="clockcol2div1">
              <div className="clockcol1div11">
                <div>
                  <img style={{ width: "1rem" }} src="Vector.png" alt="" />
                </div>
                <div>
                  <p style={{ paddingTop: "1.1rem", lineHeight: ".8rem" }}>
                    Wall Clock
                  </p>
                </div>
              </div>
              <div>
                <p className="p280">Your 180 Days C360 Yiled Rewards</p>
              </div>
              <div>
                <p className="p270">125 C360</p>
              </div>
              <div className="divvv">
                <div>
                  <p className="p2">5% APR</p>
                </div>
                <div>
                  <p>$1,169</p>
                </div>
              </div>
            </div>
            <div className="divv222">
              <div>
                <p className="pimpt2">Staking Inputs</p>
              </div>
              <div>
                <p className="pc260">Number of Wall C360 to be Staked</p>
              </div>
              <div className="divv32">
                <div>
                  <p>2,000</p>
                </div>
                <div>
                  <p>1,000,000</p>
                </div>
              </div>
              <div>
                <Slider style={{ color: "green" }} tipFormatter={formatter} />
              </div>
              <div>
                <p className="pc260">Days to be Staked</p>
              </div>
              <div className="divv32">
                <div>
                  <p>30d</p>
                </div>
                <div>
                  <p>1,095d</p>
                </div>
              </div>
              <div>
                <Slider style={{ color: "green" }} tipFormatter={formatter} />
              </div>
              <div className="btndiv">
                <p className="btn2">Join SHOs & VENTURE YIELD</p>
              </div>
            </div>
          </Col>

          <Col xs={24} md={16} lg={8} className="col3">
            <div className="col3div1">
              <div className="col1div11">
                <div>
                  <img style={{ width: "1rem" }} src="Vector (1).png" alt="" />
                </div>
                <div>
                  <p style={{ paddingTop: "1rem", lineHeight: ".8rem" }}>
                    Grand Father Clock
                  </p>
                </div>
              </div>
              <div>
                <p className="p380">Your 180 Days C360 Yiled Rewards</p>
              </div>
              <div>
                <p className="p370">90 C360</p>
              </div>
              <div className="divvv3">
                <div>
                  <p className="p3">3% APR</p>
                </div>
                <div>
                  <p>$1,230</p>
                </div>
              </div>
            </div>
            <div className="divv333">
              <div>
                <p className="pimpt3">Staking Inputs</p>
              </div>
              <div>
                <p className="pc360">Number of GrandFather C360 to be Staked</p>
              </div>
              <div className="divv33">
                <div>
                  <p>2,000</p>
                </div>
                <div>
                  <p>1,000,000</p>
                </div>
              </div>
              <div>
                <Slider style={{ color: "green" }} tipFormatter={formatter} />
              </div>
              <div>
                <p className="pc360">Days to be Staked</p>
              </div>
              <div className="divv33">
                <div>
                  <p>30d</p>
                </div>
                <div>
                  <p>1,095d</p>
                </div>
              </div>
              <div>
                <Slider style={{ color: "green" }} tipFormatter={formatter} />
              </div>
              <div className="btndiv3">
                <p className="btn3">Join SHOs & VENTURE YIELD</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Clock;
