import React from "react";
import { Tabs } from "antd";
import "./mainstake.css";
import StakeC360 from "../stakec360/StakeC360"
import MyStats from "../mystats/MyStats";
import ClockYield from "../clockyield/ClockYield";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

function MainStake() {
  return (
    <div className="mainstake">
      <div className="substake1">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane
            tab="Clock Yield Simulation"
            key="1"
            className="tabword"
            style={{ outline: "none", width: "98vw" }}
          >
            <ClockYield />
          </TabPane>
          <TabPane
            tab="Stake C360"
            key="2"
            style={{ outline: "none", width: "98vw" }}
          >
           <StakeC360/>
          
          </TabPane>
          <TabPane
            style={{ outline: "none", width: "98vw" }}
            tab="My Stats"
            key="3"
          >
            <MyStats />
          </TabPane>
          <img className="earthimg" src="earth.png" alt="" />
        </Tabs>
      </div>
    </div>
  );
}
export default MainStake;
