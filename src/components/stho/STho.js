import React from "react";
import { Col, Row } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./stho.css";

function STho() {
  return (
    <div className="MainStho">
      <Row justify="center">
        <Col xs={24} md={10} lg={10} className="colfive">
          <div className="colordivthree">
            <div style={{ display: "flex" }}>
              <div>
                <p className="avax">sTHO (AVAX)</p>
              </div>
              <div> 
                <InfoCircleOutlined className="icon22" />
              </div>
            </div>
            <p className="marketone">Market Price</p>
            <p className="marketthree">$1.314</p>
            <hr className="hrthree" />
            <p className="marketone">sTHO:THO Ratio</p>
            <p className="marketthree">1.168</p>
          </div>
        </Col>
        <Col xs={24} md={10} lg={10} className="colsix">
          <div className="colordivthree">
            <div style={{ display: "flex" }}>
              <div>
                <p className="avax">sTHO (MOONBEAM)</p>
              </div>
              <div>
                <InfoCircleOutlined className="icon22" />
              </div>
            </div>
            <p
              style={{ color: "rgba(255, 230, 0, 0.5)" }}
              className="marketone"
            >
              Market Price
            </p>
            <p className="marketthree">$1.187</p>
            <hr className="hrthree" />
            <p
              style={{ color: "rgba(255, 230, 0, 0.5)" }}
              className="marketone"
            >
              sTHO:THO Ratio
            </p>
            <p className="marketthree">1.061</p>
          </div>
        </Col>
        <img className="reallogo" src="reallogo.png" alt="" />
      </Row>
      <div className="fadiv">
        <p className="faword">Faucet</p>
        <p className="faword">Avalanche Bridge</p>
      </div>
    </div>
  );
}

export default STho;
