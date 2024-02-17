import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NetworksCard from "./NetworksCards";
// import Particle from "../Particle";
// import blockchain from "../../Assets/Networks/blockchain-tech.png"
import entangle from "../../Assets/Networks/entangle.png"
import artela from "../../Assets/Networks/artela.png"
import pryzm from "../../Assets/Networks/pryzm.png"
import nulink from "../../Assets/Networks/nulink.png"
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
          {/* <Button variant="secondary" size="lg">
            On going
          </Button> */}
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <NetworksCard
              imgPath={entangle}
              isHaveExplorer={true}
              title="Entangle"
              // description="Entangle is the first customizable messaging Infrastructure designed to unify web3 and optimize ecosystem liquidity. Entangle provides builders & dApps authenticated, customizable and interoperable data secured on the blockchain with full security configurability."
              websiteLink="https://entangle.fi"
              explorerLink="https://testnet.itrocket.net/entangle/staking/ethmvaloper1k9zes784hjml8ktdyzussxaqrrvlnec5jsjt4f"
            />
          </Col>
          <Col md={4} className="project-card">
            <NetworksCard
              imgPath={artela}
              isHaveExplorer={true}
              title="Artela"
              // description="Artela is an extensible blockchain network enabling developers to build feature-rich dApps. Developers can build smart contract in EVM and add WASM native extension at blockchain runtime called Aspect. Artela is fully EVM compatible and built with Cosmos SDK. You can seamlessly deploy your EVM dApps on Artela without any issue. And at the mean time, you can also leverage your dApp with Aspect programming to make it even more powerful."
              websiteLink="https://artela.network/"
              explorerLink="https://testnet.itrocket.net/artela/staking/artvaloper127zfj59dsv557zh27juh79kdl8pmw8s9ws4njl"
            />
          </Col>
          <Col md={4} className="project-card">
            <NetworksCard
              imgPath={pryzm}
              isHaveExplorer={true}
              title="Pryzm"
              description=""
              websiteLink="https://pryzm.zone/"
              explorerLink="https://testnet.itrocket.net/pryzm/staking/pryzmvaloper1rpx9jms35nk7t8rdjgscv49tku6q4nupkc5tje"
            />
          </Col>
          <Col md={4} className="project-card">
            <NetworksCard
              imgPath={nulink}
              isHaveExplorer={false}
              title="Nulink"
              description="Horus2.0 Testnet"
              websiteLink="https://nulink.org/"
              explorerLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Networks;
