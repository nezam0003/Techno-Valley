import React from "react";
import { MyCard, MyCardBody, MyCardText, MyCardImg } from "./MyStyled";

import testing from "../images/Solutions/testing.svg";
import testing1 from "../images/Solutions/testing-01.svg";
import webSolution from "../images/Solutions/web-solution.svg";
import webSolution1 from "../images/Solutions/web-solution-01.svg";
import itInfraction from "../images/Solutions/it-infraction.svg";
import itInfraction1 from "../images/Solutions/it-infraction-01.svg";
import network from "../images/Solutions/network.svg";
import network1 from "../images/Solutions/network-01.svg";
import support from "../images/Solutions/support.svg";
import support1 from "../images/Solutions/support-01.svg";
import projectManagement from "../images/Solutions/project-management.svg";
import projectManagement1 from "../images/Solutions/project-management-01.svg";
import erpSolution from "../images/Solutions/erp-solution.svg";
import erpSolution1 from "../images/Solutions/erp-solution-01.svg";
import digitalMarketing from "../images/Solutions/digital-marketing.svg";
import digitalMarketing1 from "../images/Solutions/digital-marketing-01.svg";
import devsops from "../images/Solutions/devsops.svg";
import devsops1 from "../images/Solutions/devsops-01.svg";
import cloundComputing from "../images/Solutions/clound-computing.svg";
import cloundComputing1 from "../images/Solutions/clound-computing-01.svg";
import cloudSolution from "../images/Solutions/cloud-solution.svg";
import cloudSolution1 from "../images/Solutions/cloud-solution-01.svg";
import blockChain from "../images/Solutions/block-chain.svg";
import blockChain1 from "../images/Solutions/block-chain-01.svg";
import bigData from "../images/Solutions/big-data.svg";
import bigData1 from "../images/Solutions/big-data-01.svg";
import atrtificialIntelligence from "../images/Solutions/atrtificial-intelligence.svg";
import atrtificialIntelligence1 from "../images/Solutions/atrtificial-intelligence-01.svg";
import arVr from "../images/Solutions/ar-vr.svg";
import arVr1 from "../images/Solutions/ar-vr-01.svg";
import appDevelopment from "../images/Solutions/app-development.svg";
import appDevelopment1 from "../images/Solutions/app-development-01.svg";

import Carousel from "react-elastic-carousel";
import Title from "./Title";

const breakPoints = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 550,
    itemsToShow: 2,
  },
  {
    width: 768,
    itemsToShow: 3,
  },
  {
    width: 1200,
    itemsToShow: 4,
  },
];

const OurSolutions = () => {
  const solutions = [
    {
      id: 1,
      img1: webSolution,
      img2: webSolution1,
      description:
        "An Ideal offshore partner of website Design/Development Services.",
    },
    {
      id: 2,
      img1: itInfraction,
      img2: itInfraction1,
      description:
        "Techno-Valley has IT Infrastructure Solutions with Trained and Certified",
    },
    {
      id: 3,
      img1: network,
      img2: network1,
      description:
        "All the netowrk security solutions and service business like Access",
    },
    {
      id: 4,
      img1: appDevelopment,
      img2: appDevelopment1,
      description:
        "Developing innovative and native mobile Apps for Android, iOS..",
    },
    {
      id: 5,
      img1: cloundComputing,
      img2: cloundComputing1,
      description:
        "We provide different cloud services, from PaaS to SaaS. Access as..",
    },
    {
      id: 6,
      img1: cloudSolution,
      img2: cloudSolution1,
      description:
        "We are the principal Partner of Oracle Cloud, Techno-Valley is the Only..",
    },
    {
      id: 7,
      img1: digitalMarketing,
      img2: digitalMarketing1,
      description:
        "We deliver Premium Concept & Design, Maximum Interaction with the..",
    },
    {
      id: 8,
      img1: erpSolution,
      img2: erpSolution1,
      description:
        "Techno-Valley has the ERP Solutions for the Garment and Health and SME",
    },
    {
      id: 9,
      img1: projectManagement,
      img2: projectManagement1,
      description:
        "Our PM solutions can help balance cost, complexity & Our PM solutions..",
    },
    {
      id: 10,
      img1: atrtificialIntelligence,
      img2: atrtificialIntelligence1,
      description: "We convert your AI Vision into a reality by applying our..",
    },
    {
      id: 11,
      img1: devsops,
      img2: devsops1,
      description:
        "Deliver speed, quality & reliability with our DevOps services..",
    },
    {
      id: 12,
      img1: testing,
      img2: testing1,
      description:
        "After all, your customers are counting on you and we know you’re Counting..",
    },
    {
      id: 13,
      img1: arVr,
      img2: arVr1,
      description:
        "One of the biggest benefits in a VR and AR environment is the..",
    },
    {
      id: 14,
      img1: blockChain,
      img2: blockChain1,
      description: "We do both cryptocurrency research, custom blockchain..",
    },
    {
      id: 15,
      img1: bigData,
      img2: bigData1,
      description: "We do Big Data & critical Business Analytics services..",
    },
    {
      id: 16,
      img1: support,
      img2: support1,
      description:
        "Supports team are always there to help you in need, 24/7/365 around..",
    },
  ];
  return (
    <>
      <div className="our-solutions">
        <div className="pt-3">
          <Title title="Our" subtitle="Solutions" />
        </div>
        <div className="container">
          <div className="row">
            <Carousel
              enableAutoPlay
              autoPlaySpeed={1500}
              itemPadding={[0, 24]}
              breakPoints={breakPoints}
            >
              {solutions.map((solution) => {
                return (
                  <MyCard key={solution.id}>
                    <MyCardBody>
                      <MyCardImg src={solution.img1} alt="img1" />
                      <MyCardImg src={solution.img2} alt="img1" />
                      <MyCardText>{solution.description}</MyCardText>
                    </MyCardBody>
                  </MyCard>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;
