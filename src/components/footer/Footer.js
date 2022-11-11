import React from "react";
import { Row, Col } from "antd";
import "./footer.css";

function Footer() {
  return (
    <div className="Mainfooter">
      <div>
        <h4 className="footer11">Keep In Touch</h4>
        <div className="footer22">
          <div>
            <img src="footer2.png" alt="" />
          </div>
          <div>
            <img src="footer3.png" alt="" />
          </div>
          <div>
            <img src="footer4.png" alt="" />
          </div>
          <div>
            <img src="footer5.png" alt="" />
          </div>
          <div>
            <img src="footer1.png" alt="" />
          </div>
        </div>
      </div>
      <Row className="roww11" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={12} md={12} lg={6} className="footer3333">
          <div>
            <h3 className="footer333">Socials</h3>
          </div>
          <div className="ttt11">
            <div>
              <img className="footerlogo" src="footer2.png" alt="" />
            </div>
            <div>
              <p className="footer44">Twitter</p>
            </div>
          </div>
          <div className="ttt11">
            <div>
              <img className="footerlogo" src="footer3.png" alt="" />
            </div>
            <div>
              <p className="footer44">Telegram</p>
            </div>
          </div>
          <div className="ttt11">
            <div>
              <img className="footerlogo" src="footer4.png" alt="" />
            </div>
            <div>
              <p className="footer44">Discord</p>
            </div>
          </div>
          <div className="ttt11">
            <div>
              <img className="footerlogo" src="footer5.png" alt="" />
            </div>
            <div>
              <p className="footer44">Medium</p>
            </div>
          </div>
          <div className="ttt11">
            <div>
              <img className="footerlogo" src="footer1.png" alt="" />
            </div>
            <div>
              <p className="footer44">Github</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={12} lg={6} className="footer3333">
          <div>
            <h3 className="footer333">Products</h3>
            <p className="footer332">Autimatic-Staking</p>
          </div>
        </Col>
        <Col xs={12} md={12} lg={6} className="footer3333">
          <div>
            <h3 className="footer333">Learn</h3>
          </div>
          <p className="footer332">Documentation</p>
          <p className="footer332">Medium</p>
        </Col>
        <Col xs={12} md={12} lg={6} className="footer3333">
          <div>
            <p className="footer33355">Open App</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
