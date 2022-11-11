import React from "react";
import { Col, Row } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./common.css";

function Common() {
  return (
    <div className="Maincommon">
      <Row justify="center"   >
        <Col xs={24} md={10} lg={10}  className="colone">
          <div className="divcolor ">
            <p className="com">Common</p>
            <div style={{ display: "flex" }}>
              <div>
                <p className="total ">Total Value Locked</p>
              </div>
              <div> 
                <InfoCircleOutlined className="infoicon " />
              </div>
            </div>
            <p className="number">$22,395,791</p>
            <div>
              <img className="layer1" src="layer.png" alt="" />
              <img
                className="layer2"
                style={{ marginTop: "-5.2rem" }}
                src="layer2.png"
                alt=""
              />
            </div>
            <hr className="hr" />
            <div style={{ display: "flex" }}>
              <div>
                <p className="total">24h Trading Volume</p>
              </div>
              <div>
                <InfoCircleOutlined className="infoicon" />
              </div>
            </div>
            <p className="number">$4,453,799</p>
            <div>
              <img className="layer1" src="layer3.png" alt="" />
              <img
                className="layer2"
                style={{ marginTop: "-5.2rem" }}
                src="layer4.png"
                alt=""
              />
            </div>
            <hr className="hr" />
            <div style={{ display: "flex" }}>
              <div>
                <p className="total">Market Cap</p>
              </div>
              <div></div>
            </div>
            <p className="number">$13,889,967</p>
            <div>
              <img className="layer1" src="layer5.png" alt="" />
              <img
                className="layer2"
                style={{ marginTop: "-5.2rem" }}
                src="layer6.png"
                alt=""
              />
            </div>
          </div>
        </Col>
        <Col xs={24} md={10} lg={10} className="coltwo">
          <div className="divcolor">
            <p className="com">Treasury</p>
            <div style={{ display: "flex" }}>
              <div>
                <p className="total">Balance</p>
              </div>
            </div>
            <p className="number">$2,597,749</p>
            <div>
              <img className="layer1" src="layer7.png" alt="" />
              <img
                className="layer2"
                style={{ marginTop: "-5.2rem" }}
                src="layer8.png"
                alt=""
              />
            </div>
            <hr className="hr" />
            <div style={{ display: "flex" }}>
              <div>
                <p className="com">Collateral Distribution</p>
              </div>
            </div>
            <div className="laydiv">
              <div>
                <img className="laylogo" src="laye9.png" alt="" />
              </div>
              <div>
                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      style={{ marginLeft: "1rem" }}
                      src="Group.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="th0">THO-USDC.e</p>
                    <div style={{ display: "flex", marginTop: "-.8rem" }}>
                      <p className="prize">$806,749 </p>
                      <p className="percent">(31%)</p>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      style={{ marginLeft: "1rem" }}
                      src="Group.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="th0">USDC.e (SpiritSwap)</p>
                    <div style={{ display: "flex", marginTop: "-.8rem" }}>
                      <p className="prize">$300,000</p>
                      <p className="percent">(12%)</p>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      style={{ marginLeft: "1rem" }}
                      src="Group.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="th0">Curve aTriCrypto</p>
                    <div style={{ display: "flex", marginTop: "-.8rem" }}>
                      <p className="prize">$300,000</p>
                      <p className="percent">(12%)</p>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      style={{ marginLeft: "1rem" }}
                      src="Group.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="th0">USDC.e</p>
                    <div style={{ display: "flex", marginTop: "-.8rem" }}>
                      <p className="prize">$254,284</p>
                      <p className="percent">(10%)</p>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      style={{ marginLeft: "1rem" }}
                      src="Group.png"
                      alt=""
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <p className="th0">Others</p>
                    <div>
                      {" "}
                      <InfoCircleOutlined className="infoicon" />
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "-.8rem" }}>
                  <p className="prize1">$936,716</p>
                  <p className="percent">(36%)</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Common;
 