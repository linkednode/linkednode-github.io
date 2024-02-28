import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NetworksCard from "./NetworksCards";
import ArchiveCards from "./ArchiveCards";
// import Particle from "../Particle";
import entangle from "../../Assets/Networks/entangle.png"
import artela from "../../Assets/Networks/artela.png"
import pryzm from "../../Assets/Networks/pryzm.png"
import nulink from "../../Assets/Networks/nulink.png"
import dusk from "../../Assets/Networks/dusk.png"
import stratis from "../../Assets/Networks/stratis.png"
import crossfi from "../../Assets/Networks/crossfi.png"
import selfchain from "../../Assets/Networks/selfchain.jpg"
import bevm from "../../Assets/Networks/bevm.png"

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
              imgPath={crossfi}
              isHaveExplorer={true}
              title="Cross Finance"
              description=""
              websiteLink="https://crossfi.org"
              explorerLink="https://testnet.itrocket.net/crossfi/staking/mxvaloper1ad5hpf5f08kzx84p6ms8j6l9kdaj4p0vy3vdn8"
            />
          </Col>
          <Col md={4} className="project-card">
            <NetworksCard
              imgPath={selfchain}
              isHaveExplorer={true}
              title="Selfchain"
              description=""
              websiteLink="https://selfchain.xyz"
              explorerLink="https://explorer.nodestake.org/selfchain-testnet/staking/selfvaloper1v7zaq024vaykn8v3cqnyj0v0jjyd34eq95042l"
            />
          </Col>
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
              websiteLink="https://artela.network"
              explorerLink="https://testnet.itrocket.net/artela/staking/artvaloper127zfj59dsv557zh27juh79kdl8pmw8s9ws4njl"
            />
          </Col>
          <Col md={4} className="project-card">
            <NetworksCard
              imgPath={pryzm}
              isHaveExplorer={true}
              title="Pryzm"
              description=""
              websiteLink="https://pryzm.zone"
              explorerLink="https://testnet.itrocket.net/pryzm/staking/pryzmvaloper1rpx9jms35nk7t8rdjgscv49tku6q4nupkc5tje"
            />
          </Col>
          <Col md={4} className="project-card">
            <NetworksCard
              imgPath={dusk}
              isHaveExplorer={true}
              title="Dusk Network"
              description=""
              websiteLink="https://dusk.network/news/ITN-set-up/"
              explorerLink="https://explorer.dusk.network/"
            />
          </Col>
          <Col md={4} className="project-card">
            <NetworksCard
              imgPath={stratis}
              isHaveExplorer={true}
              title="Stratis Auroria Testnet"
              description=""
              websiteLink="https://www.stratisplatform.com/2024/02/07/500k-strax-airdrop-staking-quick-start-guide/"
              explorerLink="https://auroria.beacon.stratisevm.com/validator/b520077ea1d923f9a70851c249c7830dd5181715a669c05b8bbeaa9e1db1c7f228838d9ea1106a0447d9c0f9c29c5faf"
            />
          </Col>
          <Col md={4} className="project-card">
            <NetworksCard
              imgPath={nulink}
              isHaveExplorer={false}
              title="Nulink"
              description="Horus2.0 Testnet"
              websiteLink="https://nulink.org"
              explorerLink=""
            />
          </Col>
        </Row>
      <h2 className="logo-heading">
        Archive
      </h2>
      {/* <div className="d-grid gap-2">
        <Button variant="secondary" size="lg">
          N/A
        </Button>
      </div> */}
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="logo-card">
          <ArchiveCards
            imgPath={bevm}
            isHaveExplorer={false}
            title="BEVM"
            description=""
            websiteLink=""
            explorerLink=""
          />
        </Col>
      </Row>
      </Container>
    </Container>
  );
}

export default Networks;
