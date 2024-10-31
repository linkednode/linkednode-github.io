import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TestnetCard from "./TestnetCards";
import MainnetCard from "./MainnetCards";
import artela from "../../Assets/Networks/artela.png"
import crossfi from "../../Assets/Networks/crossfi.png"
import selfchain from "../../Assets/Networks/selfchain.jpg"
import warden from "../../Assets/Networks/warden.jpeg"
import oglabs from "../../Assets/Networks/oglabs.jpg"
import galactica from "../../Assets/Networks/galactica.jpg"
import airchains from "../../Assets/Networks/airchains.jpg"
import blockx from "../../Assets/Networks/blockx.jpg"
import empeiria from "../../Assets/Networks/empe.jpg"
import symphony from "../../Assets/Networks/symphony.jpg"
import arkeo from "../../Assets/Networks/arkeo.jpg"
import ArchiveCards from "./ArchiveCards";

function Networks() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Our <strong className="blue">Networks </strong>
        </h1>
        <h2 className="project-heading">
          Mainnet
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <MainnetCard
              imgPath={blockx}
              isHaveExplorer={true}
              isHaveApiRpc={false}
              title="Blockx"
              description=""
              websiteLink="https://www.blockxnet.com"
              explorerLink="https://mainnet.linkednode.xyz/blockx/staking/blockxvaloper1gnp93ssekvr5psajzzgplalurycfs6p0hjs0r7"
            />
          </Col>
          <Col md={4} className="project-card">
            <MainnetCard
              imgPath={crossfi}
              isHaveExplorer={true}
              isHaveApiRpc={false}
              title="CrossFi"
              description=""
              websiteLink="https://crossfi.org"
              explorerLink="https://xfiscan.com/validator/mxvaloper1qv29xct293fn0qgx2phpm85rnkhwqfc52hlnyc"
            />
          </Col>
          <Col md={4} className="project-card">
            <MainnetCard
              imgPath={selfchain}
              isHaveExplorer={true}
              isHaveApiRpc={false}
              title="Selfchain"
              description=""
              websiteLink="https://selfchain.xyz"
              explorerLink="https://staking.selfchain.xyz/"
            />
          </Col>
        </Row>
        <h2 className="project-heading">
          Testnet
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <TestnetCard
              imgPath={oglabs}
              isHaveExplorer={true}
              title="0glabs"
              description=""
              websiteLink="https://0g.ai/"
              explorerLink="https://testnet.linkednode.xyz/0g/staking/0gvaloper132tnykv52dh2z4z2xs0tvxtgqy6eq4udrn8qjn"
            />
          </Col>
          <Col md={4} className="project-card">
            <TestnetCard
              imgPath={arkeo}
              isHaveExplorer={true}
              title="Arkeo"
              description=""
              websiteLink="https://www.arkeo.network"
              explorerLink="https://testnet.arkeo.explorers.guru/validator/tarkeovaloper17fvkwr369stgd92746udazfjsvwrqdge0vg73v"
            />
          </Col>
          <Col md={4} className="project-card">
            <TestnetCard
              imgPath={airchains}
              isHaveExplorer={true}
              title="Airchains"
              description=""
              websiteLink="https://www.airchains.io/"
              explorerLink="https://testnet.linkednode.xyz/airchains/staking/airvaloper12z70y9wky62y686v64xrs6e8vkzxgzsuzesf8q"
            />
          </Col>
          <Col md={4} className="project-card">
            <TestnetCard
              imgPath={artela}
              isHaveExplorer={true}
              title="Artela"
              description=""
              websiteLink="https://artela.network"
              explorerLink="https://testnet.linkednode.xyz/artela/staking/artvaloper127zfj59dsv557zh27juh79kdl8pmw8s9ws4njl"
            />
          </Col>
          <Col md={4} className="project-card">
            <TestnetCard
              imgPath={crossfi}
              isHaveExplorer={true}
              isHaveApiRpc={true}
              title="CrossFi"
              description=""
              websiteLink="https://crossfi.org"
              explorerLink="https://testnet.linkednode.xyz/crossfi/staking/mxvaloper1ad5hpf5f08kzx84p6ms8j6l9kdaj4p0vy3vdn8"
            />
          </Col>
          <Col md={4} className="project-card">
            <TestnetCard
              imgPath={empeiria}
              isHaveExplorer={true}
              isHaveApiRpc={true}
              title="Empeiria"
              description=""
              websiteLink="https://empe.io"
              explorerLink="https://explorer-testnet.empe.io/validators/empevaloper1kwpw2jqvzl272catndx6xea6fnnqf64565qe7d"
            />
          </Col>
          <Col md={4} className="project-card">
            <TestnetCard
              imgPath={galactica}
              isHaveExplorer={true}
              title="Galactica"
              description=""
              websiteLink="https://galactica.com/"
              explorerLink="https://testnet.linkednode.xyz/galactica/staking/galavaloper1psc65ql4pu6j6dhfu2zrzn584djwhthhz80del"
            />
          </Col>
          <Col md={4} className="project-card">
            <TestnetCard
              imgPath={symphony}
              isHaveExplorer={true}
              isHaveApiRpc={true}
              title="Symphony"
              description=""
              websiteLink="https://orchestralabs.org"
              explorerLink="https://testnet.linkednode.xyz/symphony/staking/symphonyvaloper10khujjn6jdvlg6nqu3kl3jj0jqgkpxrxt5ezen"
            />
          </Col>
          <Col md={4} className="project-card">
            <TestnetCard
              imgPath={warden}
              isHaveExplorer={true}
              title="Warden"
              description=""
              websiteLink="https://wardenprotocol.org"
              explorerLink="https://testnet.linkednode.xyz/warden/staking/wardenvaloper1g8ggpa8t99qyrzyldvcmmy5p2p44n44el0290r"
            />
          </Col>
        </Row>
      <h2 className="logo-heading">
        Archive
      </h2>
      </Container>
      <Row style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "10px" , paddingLeft: "5px"}}>
        <Col md={4} className="project-card">
          <ArchiveCards/>
        </Col>
      </Row>
    </Container>
  );
}

export default Networks;
