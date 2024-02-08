import React from "react";
import { Container} from "react-bootstrap";
// import Particle from "../Particle";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DocGuide() {
  return (
    <Container fluid className="resume-section" id="guide">
      {/* <Particle /> */}
      <Container>
          <Card className="quote-card-view">
            <Card.Header>Docs guide</Card.Header>
            <Card.Body>
              <Card.Title>Documents guide will be here</Card.Title>
              <Card.Text>
                Documents guide help our community got some cheatsheet clearly
              </Card.Text>
              <Button variant="info">Click</Button>
            </Card.Body>
            <Card.Footer className="text-muted">updated soon</Card.Footer>
          </Card>
      </Container>
    </Container>
  );
}

export default DocGuide;