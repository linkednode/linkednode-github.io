import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, we are <span className="blue">linkednode</span>
            <br />
            Validators are an essential part of proof-of-stake blockchain networks.
            <br />
            They help to ensure the security and stability of the chain and are rewarded for their work in the form of transaction fees and block rewards.
            <br />
            If you want to become a validator, its important to know the terms of your commitment.
            <br />
            We're committed to maintaining a fair and transparent approach to commission rates, with a focus on ensuring the long-term success of the network and the best interests of our delegators.
          </p>
          <p style={{ color: "rgb(57 104 156)" }}>
            "Everything will be tokenized and connected by a blockchain one day."{" "}
          </p>
          <footer className="blockquote-footer">Fred Ehrsam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
