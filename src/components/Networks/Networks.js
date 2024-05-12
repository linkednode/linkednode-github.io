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
import lava from "../../Assets/Networks/lava.png"
import bevm from "../../Assets/Networks/bevm.png"
import autonity from "../../Assets/Networks/autonity.jpg"
import warden from "../../Assets/Networks/warden.jpeg"
import oglabs from "../../Assets/Networks/oglabs.jpg"
import galactica from "../../Assets/Networks/galactica.jpg"
import airchains from "../../Assets/Networks/airchains.jpg"

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
              imgPath={oglabs}
              isHaveExplorer={true}
              title="0glabs"
              description=""
              websiteLink="https://0g.ai/"
              explorerLink="https://testnet.linkednode.xyz/0g/staking/0gvaloper132tnykv52dh2z4z2xs0tvxtgqy6eq4udrn8qjn"
            />
          </Col>
          <Col md={4} className="project-card">
            <NetworksCard
              imgPath={airchains}
              isHaveExplorer={true}
              title="Airchains"
              description=""
              websiteLink="https://www.airchains.io/"
              explorerLink="https://testnet.linkednode.xyz/airchains/staking/airvaloper12z70y9wky62y686v64xrs6e8vkzxgzsuzesf8q"
            />
          </Col>
          <Col md={4} className="project-card">
            <NetworksCard
              imgPath={artela}
              isHaveExplorer={true}
              title="Artela"
              description=""
              websiteLink="https://artela.network"
              explorerLink="https://testnet.linkednode.xyz/artela/staking/artvaloper127zfj59dsv557zh27juh79kdl8pmw8s9ws4njl"
            />
          </Col>
          <Col md={4} className="project-card">
            <NetworksCard
              imgPath={crossfi}
              isHaveExplorer={true}
              isHaveApiRpc={true}
              title="CrossFi"
              description=""
              websiteLink="https://crossfi.org"
              explorerLink="https://testnet.linkednode.xyz/crossfi/staking/mxvaloper1ad5hpf5f08kzx84p6ms8j6l9kdaj4p0vy3vdn8"
              ApiLink="https://api.crossfi.linkednode.xyz"
              RpcLink="https://rpc.crossfi.linkednode.xyz"
            />
          </Col>
          <Col md={4} className="project-card">
            <NetworksCard
              imgPath={galactica}
              isHaveExplorer={true}
              title="Galactica"
              description=""
              websiteLink="https://galactica.com/"
              explorerLink="https://testnet.linkednode.xyz/galactica/staking/galavaloper1psc65ql4pu6j6dhfu2zrzn584djwhthhz80del"
            />
          </Col>
          <Col md={4} className="project-card">
            <NetworksCard
              imgPath={warden}
              isHaveExplorer={true}
              title="Warden"
              description=""
              websiteLink="https://wardenprotocol.org"
              explorerLink="https://testnet.linkednode.xyz/warden/staking/wardenvaloper1g8ggpa8t99qyrzyldvcmmy5p2p44n44el0290r"
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
        <Col md={4} className="project-card">
          <NetworksCard
            imgPath={entangle}
            isHaveExplorer={true}
            title="Entangle"
            description=""
            // websiteLink="https://entangle.fi"
            // explorerLink="https://testnet.linkednode.xyz/entangle/staking/ethmvaloper1k9zes784hjml8ktdyzussxaqrrvlnec5jsjt4f"
          />
        </Col>
        <Col md={4} className="project-card">
          <NetworksCard
            imgPath={lava}
            isHaveExplorer={true}
            title="Lava"
            description=""
            // websiteLink="https://www.lavanet.xyz"
            // explorerLink="https://testnet.linkednode.xyz/lava/staking/lava@valoper18e5r6pec60lsxmakajsgh7nc8e4tl5lnkup8j5"
          />
        </Col>
        <Col md={4} className="project-card">
          <NetworksCard
            imgPath={pryzm}
            isHaveExplorer={true}
            title="Pryzm"
            description=""
            // websiteLink="https://pryzm.zone"
            // explorerLink="https://testnet.linkednode.xyz/pryzm/staking/pryzmvaloper1rpx9jms35nk7t8rdjgscv49tku6q4nupkc5tje"
          />
        </Col>
        <Col md={4} className="project-card">
          <NetworksCard
            imgPath={selfchain}
            isHaveExplorer={true}
            title="Selfchain"
            description=""
            // websiteLink="https://selfchain.xyz"
            // explorerLink="https://testnet.linkednode.xyz/selfchain/staking/selfvaloper1v7zaq024vaykn8v3cqnyj0v0jjyd34eq95042l"
          />
        </Col>
        <Col md={4} className="project-card">
          <NetworksCard
            imgPath={autonity}
            isHaveExplorer={true}
            title="Autonity"
            description="Piccadilly Testnet R5"
            // websiteLink="https://game.autonity.org"
            // explorerLink="https://stakeflow.io/autonity-piccadilly/validators/0xc7a7c5314b924d442787888fcdbb0dfbd9123a27"
          />
        </Col>
      </Row>
      </Container>
    </Container>
  );
}

export default Networks;
