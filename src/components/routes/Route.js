import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage2 from "../../dashboard/LandingPage2";
import LandingPage from "../../landingpage/LandingPage";
import Main from "../../Mainstakescreen/Main";

function Routeone() {
  return (
    <Routes>
      <Route path="/clock360" element={<LandingPage2 />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/Stake" element={<Main />} />
    </Routes>
  );
}
export default Routeone;
