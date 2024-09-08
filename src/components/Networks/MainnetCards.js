import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { GiChaingun } from "react-icons/gi";
import { FaExternalLinkAlt } from "react-icons/fa";

function MainnetCards(props) {
  return (
    <Card className="project-card-view" style={{ height: '400px', width: '300px' }}>
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img"
        style={{ maxWidth: '50%', maxHeight: '200px' ,display: 'block', margin: 'auto'}}
        />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.websiteLink} target="_blank">
          <FaExternalLinkAlt /> &nbsp;
          {props.isHaveExplorer ? "Website" : "Show Website"}
        </Button>
        {"\n"}
        {"\n"}
        {props.isHaveExplorer && props.explorerLink && (
          <Button
            variant="primary"
            href={props.explorerLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <GiChaingun /> &nbsp;
            {"Stake Us"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default MainnetCards;
