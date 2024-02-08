import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaUserFriends} from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <GiPadlock />
      </Col>
      <p style={{ textAlign: "center" }}>
        <br/>
        High security
        <br/>
      </p>
      <Col xs={4} md={2} className="tech-icons">
        <FaUserFriends />
      </Col>
      <p style={{ textAlign: "center" }}>
        <br/>
        Community friendly
        <br/>
      </p>
    </Row>
  );
}

export default Techstack;

