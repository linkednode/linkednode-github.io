import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photo-pic-no-bg.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { 
  FaDiscord
 } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="blue"> VALIDATOR </span> NODE-RUNNER
            </h1>
            <p className="home-about-body">
              <br />
              A validator is a participant in a <b className="blue">Proof of Stake (PoS)</b> blockchain network that is responsible for validating new transactions and maintaining the security of the blockchain.
              <br />
              Validators do this by staking their crypto to support the network.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US</h1>
            <p>
              Feel free to <span className="blue">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/linkednode"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/linked_node"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:linked.node09@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <IoMailOpenSharp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discordapp.com/users/1197219467462181007"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
