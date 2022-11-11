import React from "react";
import BestAuto from "../components/best-auto/BestAuto";
import Navbar1 from "../components/navbar/Navbar";
import About from "../components/about/About";
import "./landing.css";
import Titano from "../components/titano/Titano";
import HowItsWork from "../components/how-its/HowItsWork";
import NFT from "../components/nftcoming/NFT";
import Earn from "../components/earn/Earn";
import Token from "../components/token/Token";
import RoadMap from "../components/roadmap/RoadMap";
import Roadpic from "../components/roadpic/Roadpic";
import FindUs from "../components/findus/FindUs";
import Footer from "../components/footer/Footer";
import Listings from "../components/listing/Listings";
import FaQ from "../components/faqs/FaQ";

function LandingPage() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar1 />
      <BestAuto />
      <About />
      <FindUs />
      <Titano />
      <HowItsWork />
      <Listings />
      <NFT />
      <Earn />
      <Token />
      <RoadMap />
      <Roadpic />
      <FaQ />
      <Footer />
      <img src="mask.png" className="logomask" />
      <img src="mask2.png" className="logomask2" />
    </div>
  );
}

export default LandingPage;
