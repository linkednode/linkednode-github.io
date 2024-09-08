import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';

function ArchiveCards(props) {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4} style={{ marginBottom: '20px'}} >
          <Image src={props.imgPath}  roundedCircle style={{ width: '100px', height: '100px' }} />
          <h3>{props.title}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default ArchiveCards;