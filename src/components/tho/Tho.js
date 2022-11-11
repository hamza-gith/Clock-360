import React from "react";
import { Col, Row } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./tho.css";

function Tho() {
  return (
    <div className="maintho">
      <Row justify="center">
        <Col xs={24} md={10} lg={10} className="colthree">
          <div className="divcolor2">
            <div className="thodiv">
              <div>
                <p className="thoword">THO</p>
              </div>
              <div>
                <InfoCircleOutlined className="icon" />
              </div>
            </div>  
            <p className="marketword">Market Price (AVAX)</p>
            <p className="dollar">$1.126</p>
            <div style={{ display: "flex", marginTop: "-.9rem" }}>
              <div>
                <img src="v.png" alt="" />
              </div>
              <div>
                <p className="noword">4.35%</p>
              </div>
            </div>
            <hr className="line" />

            <p className="marketword">Market Price (MOONBEAM)</p>
            <p className="dollar">$1.119</p>
            <div style={{ display: "flex", marginTop: "-.9rem" }}>
              <div>
                <img src="v.png" alt="" />
              </div>
              <div>
                <p className="noword">6.00%</p>
              </div>
            </div>
            <hr className="line" />

            <div className="thodiv">
              <div>
                <p className="backed">Backed Price</p>
              </div>
              <div>
                <InfoCircleOutlined className="icon" />
              </div>
            </div>
            <p className="dollar">$0.221</p>
            <hr className="line" />

            <div className="thodiv">
              <div>
                <p className="backed">Current emission rate</p>
              </div>
              <div>
                <InfoCircleOutlined className="icon" />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <p className="dollar">4.250</p>
              <p className="second">THO/SECOND</p>
            </div>
            <hr className="line" />

            <div style={{ display: "flex" }}>
              <div>
                <div style={{ display: "flex" }}>
                  <div>
                    <p className="backed">Total Supply</p>
                  </div>
                  <div>
                    <InfoCircleOutlined className="icon" />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <p className="backed1">13,935,803</p>
                  <p className="th033">THO</p>
                </div>
              </div>
            </div>
            <div className="laydiv1">
              <div>
                <img className="laylogo1" src="laye3.png" alt="" />
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
                    <p className="th0">Circulating Supply</p>
                    <div style={{ display: "flex", marginTop: "-.8rem" }}>
                      <p className="prize2">12,340,618 THO</p>
                      <p className="percent1">(89%)</p>
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
                    <p className="th0">Locked Supply</p>
                    <div style={{ display: "flex", marginTop: "-.8rem" }}>
                      <p className="prize2">1,595,186 THO</p>
                      <p className="percent1">(11%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} md={10} lg={10} className="colfour">
          <div className="divcolor2">
            <div className="thodiv">
              <div>
                <p className="thoword">STATIK</p>
              </div>
              <div>
                <InfoCircleOutlined className="icon" />
              </div>
            </div>
            <p className="marketword">Market Price (AVAX)</p>
            <p className="dollar">$1.009</p>
            <div style={{ display: "flex", marginTop: "-.9rem" }}>
              <div>
                <img src="v2.png" alt="" />
              </div>
              <div>
                <p className="noword1">0.31%</p>
              </div>
            </div>
            <hr className="line" />

            <p className="marketword">Market Price (MOONBEAM)</p>
            <p className="dollar">$1.012</p>
            <div style={{ display: "flex", marginTop: "-.9rem" }}>
              <div>
                <img src="v.png" alt="" />
              </div>
              <div>
                <p className="noword">0.57%</p>
              </div>
            </div>
            <hr className="line" />

            <div className="thodiv">
              <div>
                <p className="backed">Peg Price</p>
              </div>
              <div>
                <InfoCircleOutlined className="icon" />
              </div>
            </div>
            <p className="dollar">$1.000</p>
            <div style={{ display: "flex", marginTop: "-.9rem" }}>
              <div>
                <img src="v.png" alt="" />
              </div>
              <div>
                <p className="noword">0.11%</p>
              </div>
            </div>
            <hr className="line" />

            <div className="thodiv">
              <div>
                <p className="backed">Total Supply</p>
              </div>
              <div>
                <InfoCircleOutlined className="icon" />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <p className="dollar">5,240,981</p>
              <p className="second">STATIK</p>
            </div>
            <hr className="line" />

            <div style={{ display: "flex" }}>
              <div>
                <div style={{ display: "flex" }}>
                  <div>
                    <p className="backed">Total Collateral</p>
                  </div>
                  <div>
                    <InfoCircleOutlined className="icon" />
                  </div>
                </div>
                <p style={{ marginTop: "-1rem" }} className="backed1">
                  $4,192,785
                </p>
              </div>
            </div>
            <div className="laydiv1">
              <div>
                <img className="laylogo1" src="laye2.png" alt="" />
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
                    <p className="th0">Available collateral</p>
                    <div style={{ display: "flex", marginTop: "-.8rem" }}>
                      <p className="prize2">$1,092,785</p>
                      <p className="percent1">(26%)</p>
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
                    <p className="th0">Platypus</p>
                    <div style={{ display: "flex", marginTop: "-.8rem" }}>
                      <p className="prize2">$900,000</p>
                      <p className="percent1">(21%)</p>
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
                    <p className="th0">Curve AAVE</p>
                    <div style={{ display: "flex", marginTop: "-.8rem" }}>
                      <p className="prize2">$600,000</p>
                      <p className="percent1">(14%)</p>
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
                    <p className="th0">Curve 3poolV2</p>
                    <div style={{ display: "flex", marginTop: "-.8rem" }}>
                      <p className="prize2">$600,000</p>
                      <p className="percent1">(14%)</p>
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
                    <p className="th0">Impermax</p>
                    <div style={{ display: "flex", marginTop: "-.8rem" }}>
                      <p className="prize2">$400,000</p>
                      <p className="percent1">(10%)</p>
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
                    <p className="th0">Trader Joe (Lending)</p>
                    <div style={{ display: "flex", marginTop: "-.8rem" }}>
                      <p className="prize2">$300,000</p>
                      <p className="percent1">(7%)</p>
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
                    <p className="th0">Curve MAI</p>
                    <div style={{ display: "flex", marginTop: "-.8rem" }}>
                      <p className="prize2">$300,000</p>
                      <p className="percent1">(7%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Tho;
