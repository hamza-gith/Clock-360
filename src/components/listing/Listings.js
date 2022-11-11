import React from "react";
import "./listing.css";
import { Row, Col } from "antd";
import Slide from "react-reveal/Slide";

function Listings() {
  return (
    <div className="mainlist">
      <div className="sublist">
        <p className="listtext">LISTINGS</p>
      </div>
      <div>
        <Row className="rowmobile" justify="space-around" gutter={30}>
          <Col xs={20} md={12} lg={12} className="collist">
            <Slide left>
              <div className="privatediv">
                <img className="taglogo" src="tag.png" alt="" />
                <p className="copmword">Completed</p>
                <p className="saletext">PRIVATE SALE</p>
                <p className="febtext"> 28 FEB 2022</p>
                <p className="bonustext">BONUS</p>
                <p className="noseven">7%</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p className="bonustext">Allocation: </p>
                  <p className="febtext">1.5% Tokens </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p className="bonustext">Price: </p>
                  <p className="febtext">1 BNB = 691.93 C360 </p>
                </div>
              </div>
            </Slide>
          </Col>
          <Col xs={20} md={12} lg={12} className="collist1">
            <Slide right>
              <div className="privatediv">
                <img className="taglogo" src="tag.png" alt="" />
                <p className="copmword1">Coming soon</p>
                <p className="saletext">LISTING</p>
                <p className="febtext">PancakeSwap</p>
                <p className="bonustext">LISTING PRICE</p>
                <p className="noseven">$0.75</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p className="bonustext">Allocation: </p>
                  <p className="febtext">1.5% Tokens </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p className="bonustext">Price: </p>
                  <p className="febtext">1 BNB = 646.66 C360</p>
                </div>
              </div>
            </Slide>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Listings;
