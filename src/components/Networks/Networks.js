import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NetworksCard from "./NetworksCards";
// import Particle from "../Particle";
import blockchain from "../../Assets/Networks/blockchain-tech.png"
import Button from 'react-bootstrap/Button';

function Networks() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Our <strong className="blue">Networks </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          All of networks here.
        </p> */}
        <h2 className="project-heading">
          Mainnet
        </h2>
        <div className="d-grid gap-2">
          <Button variant="secondary" size="lg">
            COMING SOON
          </Button>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        </Row>
        <h2 className="project-heading">
          Testnet
        </h2>
        <div className="d-grid gap-2">
          <Button variant="secondary" size="lg">
            On going
          </Button>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <NetworksCard
              imgPath={blockchain}
              isBlog={true}
              title="Blockchain"
              description=" A digital database or ledger that is distributed among the nodes of a peer to network."
              ghLink="https://en.wikipedia.org/wiki/Blockchain"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Networks;
