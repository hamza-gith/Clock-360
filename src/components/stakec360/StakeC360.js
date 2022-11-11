import React from "react";
import { Col, Row } from "antd";
import "./stakec360.css";

function StakeC360() {
  return (
    <div className="mainstake">
      <Row justify="center" className="substake">
        <Col xs={24} md={20} lg={12} className="stakecol">
          <div>
            <p className="clock">Clock To Be Staked</p>
            <div className="maincountdiv">
              <div>
                <div className="clock2">
                  <div>
                    <img src="alram.png" alt="" />
                  </div>
                  <div>
                    <p className="tableword">Table C360</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="countdiv">
                  <div>
                    <img className="neglogo" src="negative.png" alt="" />
                  </div>
                  <div>
                    <p className="count0">0</p>
                  </div>
                  <div>
                    <img className="poslogo" src="positive.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="maincountdiv">
              <div>
                <div className="clock2">
                  <div>
                    <img src="clarity.png" alt="" />
                  </div>
                  <div>
                    <p className="tableword">Wall C360</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="countdiv">
                  <div>
                    <img className="neglogo" src="negative.png" alt="" />
                  </div>
                  <div>
                    <p className="count0">0</p>
                  </div>
                  <div>
                    <img className="poslogo" src="positive.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="maincountdiv">
              <div>
                <div className="clock2">
                  <div>
                    <img src="redclock.png" alt="" />
                  </div>
                  <div>
                    <p className="tableword">Grand Father C360</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="countdiv">
                  <div>
                    <img className="neglogo" src="negative.png" alt="" />
                  </div>
                  <div>
                    <p className="count0">0</p>
                  </div>
                  <div>
                    <img className="poslogo" src="positive.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="maincountdiv">
              <div>
                <div>
                  <p className="dayword">Days</p>
                </div>
              </div>
              <div>
                <div className="countdiv">
                  <div>
                    <img className="maxlogo" src="max.png" alt="" />
                  </div>
                  <div>
                    <p className="count30">30</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="longkdiv">
              <div>
                <img src="qmark.png" alt="" />
              </div>
              <div>
                <p className="longword">Long term Bonus</p>
              </div>
              <div>
                <p className="longword1"> 49%</p>
              </div>
            </div>
            <div className="buttondiv">
              <div>
                <button className="approvebtn">Approve</button>
              </div>
              <div>
                <button className="stakebtn">Stake the join</button>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} md={20} lg={6} className="stakecol ">
          <div>
            <div style={{ display: "flex" }}>
              <div>
                <img src="percent.png" alt="" />
              </div>
              <div>
                <p className="Estiword">Estimated C360 Yield</p>
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "2rem" }}>
              <div>
                <p className="Estiword1">Estimated APR</p>
              </div>
              <div>
                <img className="qmark1" src="qmark.png" alt="" />
              </div>
            </div>
            <p className="zero">0%</p>

            <div style={{ display: "flex", marginTop: "4rem" }}>
              <div>
                <img src="percent.png" alt="" />
              </div>
              <div>
                <p className="Estiword">Estimated Venture Yield</p>
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "1.5rem" }}>
              <div>
                <p className="Estiword1">Total DAO Power</p>
              </div>
              <div>
                <img className="qmark1" src="qmark.png" alt="" />
              </div>
            </div>
            <p className="zero">0%</p>

            <div style={{ display: "flex", marginTop: "1.2rem" }}>
              <div>
                <p className="Estiword1">MAx Allocations</p>
              </div>
              <div>
                <img className="qmark1" src="qmark.png" alt="" />
              </div>
            </div>
            <p className="zero">0%</p>

            <div style={{ display: "flex", marginTop: "1.2rem" }}>
              <div>
                <p className="Estiword1">Estimated SHO Yield APR</p>
              </div>
              <div>
                <img className="qmark1" src="qmark.png" alt="" />
              </div>
            </div>
            <p className="zero">0% APR</p>
          </div>
        </Col>
        <Col xs={24} md={20} lg={6} className="stakecol">
          <div>
            <div style={{ display: "flex" }}>
              <div>
                <p className="Estiword1">Estimated Total C360 Rewards</p>
              </div>
              <div>
                <img className="qmark1" src="qmark.png" alt="" />
              </div>
            </div>
            <p className="zero">0 C360</p>

            <div style={{ display: "flex", marginTop: "8rem" }}>
              <div>
                <p className="Estiword1">Titer</p>
              </div>
              <div>
                <img className="qmark1" src="qmark.png" alt="" />
              </div>
            </div>
            <p className="zero">NO Active yet</p>

            <div style={{ display: "flex", marginTop: "1.2rem" }}>
              <div>
                <p className="Estiword1">Estimated Winning Chances</p>
              </div>
              <div>
                <img className="qmark1" src="qmark.png" alt="" />
              </div>
            </div>
            <p className="zero">0% </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default StakeC360;
