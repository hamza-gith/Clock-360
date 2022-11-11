import React, { Component } from "react";
import "./faq.css";
import { Collapse } from "antd";

const { Panel } = Collapse;

function Faq() {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="pg">
          <h2 className="titleHolder"> FAQ's-</h2>
          <p className="pg1">frequently asked questions</p>
        </div>
        <div> 
          <Collapse
            style={{
              backgroundColor: "black",
              marginTop: ".5rem",
              marginBottom: "1rem",
              color: "white",
            }}
            defaultActiveKey={["0"]}
          >
      
            <Panel
              header="What is Clock 360? "
              
              key="1"
              
            >
              <p>The collection consists of 9999 Goats priced at .06 Ether.</p>
              
            </Panel>
             
         
          </Collapse>
          <Collapse
            style={{
              backgroundColor: "black",
              marginTop: ".5rem",
              marginBottom: "1rem",
            }}
            defaultActiveKey={["0"]}
          >
            <Panel header="What is Auto-Compounding? " key="1">
              <p>
                Each of our goats was randomly created using computer software
                that combined more than 350 handcrafted traits to create unique
                goats.
              </p>
            </Panel>
          </Collapse>
          <Collapse
            style={{
              backgroundColor: "black",
              marginTop: ".5rem",
              marginBottom: "1rem",
            }}
            defaultActiveKey={["0"]}
          >
            <Panel header="What Issues is Clock 360 trying to Solve? " key="1">
              <p>Minting starts on December 15th, 15:00 (UTC +0)</p>
            </Panel>
          </Collapse>
          <Collapse
            style={{
              backgroundColor: "black",
              marginTop: ".5rem",
              marginBottom: "1rem",
            }}
            defaultActiveKey={["0"]}
          >
            <Panel header="What Makes Clock 360 Unique? " key="1">
              <p>
                You can mint Mabu NFT's through the official website
                (https://tobythegoat.io) or directly through the smart contract.
                Upon minting NFTs, these are automatically sent to your wallet
                and shown in your OpenSea account.
              </p>
            </Panel>
          </Collapse>
          <Collapse
            style={{
              backgroundColor: "black",
              marginTop: ".5rem",
              marginBottom: "1rem",
            }}
            defaultActiveKey={["0"]}
          >
            <Panel
              header="What are the Benefits of Yield Farming/Staking on Clock 360? 
            "
              key="1"
            >
              <p>
                Art reveal will start ten days after minting is enabled, on
                christmas day - December 25th, 15:00 (UTC +0)
              </p>
            </Panel>
          </Collapse>
          <Collapse
            style={{
              backgroundColor: "black",
              marginTop: ".5rem",
              marginBottom: "1rem",
            }}
            defaultActiveKey={["0"]}
          >
            <Panel header="What is C360 Tokens? " key="1">
              <p>Yes, the maximum amount of NFT's per transaction is 10.</p>
            </Panel>
          </Collapse>
          <Collapse
            style={{
              backgroundColor: "black",
              marginTop: ".5rem",
              marginBottom: "1rem",
            }}
            defaultActiveKey={["0"]}
          >
            <Panel
              header="How Can I Take Part in Clock 360's ICO?  
            "
              key="1"
            >
              <p>
                Yes, all NFT's are minted at random from the smart contract.
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Faq;
