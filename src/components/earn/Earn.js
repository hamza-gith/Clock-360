import React from "react";
import { Row, Col } from "antd";
import "./earn.css";

function Earn() {
  return (
    <div className="mainearn">
      <div>
        <h3 className="earn11">how much can i earn?</h3>
        <p className="earn12">
          our products are powered by defi and are designed to help you<br></br>
          effortlessly generate cash flow from your crypto.
        </p> 
      </div>
      <Row justify="center">
        <Col xs={24} md={12} lg={12} className="earn1111">
          <h4 className="earn22">
            At the end of the
            <br /> year amd with $1000
            <br /> usd of $clock360
            <br /> invested.
          </h4>
        </Col>
        <Col xs={24} md={12} lg={12} className="earn222">
          <h4 className="earn33">you can earn upto</h4>
          <h4 className="earn34">$1,002,758.54 uSD</h4>
          <h4 className="earn33">of $clock360 at</h4>
          <h4 className="earn33">102,483.58% aPY*.</h4>
          <p className="earn44">
            earnings are calculated in a scenatio where the RFV sustains the
            rebase rewards for 360 days.
          </p>
          <div className="btnearvdiv">
            <button className="earnbtn">start earning now ></button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Earn;
