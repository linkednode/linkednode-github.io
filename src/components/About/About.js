import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Github from "./Github";
// import Techstack from "./OfferCards";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about-linkednode.png";
// import Toolstack from "./Toolstack";
import OfferGroups from "./OfferCards";
// import chatify from "../../Assets/Networks/chatify.png";
import { GiPadlock } from "react-icons/gi";
import { MdMonitor } from "react-icons/md";
import { IoDocument, IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaServer } from "react-icons/fa";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle />/ */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="blue">?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          What we <strong className="blue">offer </strong>?
        </h1>
        <br/>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md="auto">
            <OfferGroups
              icon={IoShieldCheckmarkSharp}
              title="Trusted validator"
              description=""
            />
          </Col>
          <Col md="auto">
            <OfferGroups
              icon={GiPadlock}
              title="High-security"
              description=""
            />
          </Col>
          <Col md="auto">
            <OfferGroups
              icon={MdMonitor}
              title="24/7 monitoring"
              description=""
            />
          </Col>
          <Col md="auto">
            <OfferGroups
              icon={FaServer}
              title="Decentralized"
              title2="infrastructure"
              description=""
            />
          </Col>
          <Col md="auto">
            <OfferGroups
              icon={IoDocument}
              title="Docs guide"
              description=""
            />
          </Col>
        </Row>

        {/* <h1 className="project-heading">
          <strong className="blue">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
