import { Container, Row } from "react-bootstrap";

export default function ErrorPage() {
  return (
    <section>
      {/* <Container fluid className="home-section" id="home"> */}
        <Container className="container-section">
          <Row>
            {/* <Col md={7} className="home-header"></Col> */}
                <h1 className="big-text">404 - Page Not Found</h1>
                <p>
                  Sorry, the page you are looking for could not be found.
                </p>
          </Row>
        </Container>
      {/* </Container> */}
    </section>
  );
}
