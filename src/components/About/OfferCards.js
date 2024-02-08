import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
// import CardGroup from 'react-bootstrap/CardGroup';

function OfferGroups(props) {
  const { icon: Icon, title, description } = props;
  return (
      <Card className="blog-card-view">
        {/* <Card.Img variant="top" src= {props.imgPath} alt="card-img"/> */}
        <Card.Body>
          <Col md="auto" className="tech-icons" >
            {Icon && <Icon />} {/* Render the icon if provided */}
          </Col>
          <Card.Title style={{ textAlign: "justify" }}>
            {props.title}
            <br/>
            {props.title2}
          </Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{props.footer}</small>
        </Card.Footer>
      </Card>
  );
}

export default OfferGroups;