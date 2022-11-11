import React from "react";
import "./nft.css";
import { Row, Col } from "antd";
import { Container } from "react-bootstrap";
import Slide from "react-reveal/Slide";

function NFT() {
  return (
    <div className="mainnft">
      <div className="subnft">
        <Container>
          <Row justify="space-between" className="rowmoblie">
            <Col xs={24} md={12} lg={14} className="nft11112">
              <Slide top>
                <div>
                  <p className="nft11">Prize-Linked Accumulating Yield</p>
                  <h5 className="nft22">clock360 NFT</h5>
                  <p className="nft221">
                    clock360 is the new clock360 nft based project that
                    <br />
                    allows clock360 token holders to generate even more
                    <br />
                    rewards. Simple, Powerful and Proven.
                  </p>
                  <div className="nft224">
                    <li className="nft222">
                      Your Titano Tokens Give You Access to P.L.A.Y.
                    </li>
                  </div>
                  <div className="nft224">
                    <li className="nft222">Easy to Enter Easy to Play</li>
                  </div>
                  <div className="nft224">
                    <li className="nft222">Multiple Big Winners Each Week</li>
                  </div>
                  <div className="nft224">
                    <li className="nft222">
                      No One Loses Their Initial Deposit
                    </li>
                  </div>
                  <div className="nft224">
                    <li className="nft222">
                      {" "}
                      Even if you don’t win, keep all of your money!
                    </li>
                  </div>
                </div>
              </Slide>
            </Col>
            <Col xs={24} md={12} lg={8} className="nft1111">
              <Slide bottom>
                <div className="nftlogo11">
                  <img className="nftlogo1" src="1.png" alt="" />
                </div>
                <div className="nftlogo12">
                  <img className="nftlogo2" src="2.png" alt="" />
                </div>
                <div className="nftlogo13">
                  <img className="nftlogo3" src="3.png" alt="" />
                </div>
              </Slide>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default NFT;
