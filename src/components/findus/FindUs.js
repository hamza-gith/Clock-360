import React from "react";
import { Row, Col } from "antd";
import { Container } from "react-bootstrap";
import "./find.css";
import Flip from "react-reveal/Flip";

function FindUs() {
  return (
    <div className="mainfind">
      <div>
        <h3 className="find11">find us on</h3>
      </div>
      <Flip right>
        <Container>
          <Row justify="center">
            <Col xs={12} md={12} lg={6} className="find22">
              <img className="findlogo" src="find1.png" alt="" />
            </Col>
            <Col xs={12} md={12} lg={6} className="find22">
              <img className="findlogo" src="find2.png" alt="" />
            </Col>
            <Col xs={12} md={12} lg={6} className="find22">
              <img className="findlogo" src="find3.png" alt="" />
            </Col>
            <Col xs={12} md={12} lg={6} className="find22">
              <img className="findlogo" src="find4.png" alt="" />
            </Col>
            <Col xs={12} md={12} lg={6} className="find22">
              <img className="findlogo" src="find5.png" alt="" />
            </Col>
            <Col xs={12} md={12} lg={6} className="find22">
              <img className="findlogo" src="find6.png" alt="" />
            </Col>
            <Col xs={12} md={12} lg={6} className="find22">
              <img className="findlogo" src="find7.png" alt="" />
            </Col>
            <Col xs={12} md={12} lg={6} className="find22">
              <img className="findlogo" src="find8.png" alt="" />
            </Col>
          </Row>
        </Container>

      </Flip> 
      <div>
<img className='linegif' src="line.gif" alt=""/>
</div>
    </div>
  );
}

export default FindUs;

