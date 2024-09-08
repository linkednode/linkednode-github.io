// import React from "react";
// import { Container, Row, Col, Image } from 'react-bootstrap';

// function ArchiveCards(props) {
//   return (
//     <Container>
//       <Row>
//         <Col xs={6} md={4} style={{ marginBottom: '20px'}} >
//           <Image src={props.imgPath}  roundedCircle style={{ width: '100px', height: '100px' }} />
//           <h3>{props.title}</h3>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default ArchiveCards;

import IndividualIntervals from './IndividualIntervals'
import entangle from "../../Assets/Networks/entangle.png"
import pryzm from "../../Assets/Networks/pryzm.png"
import nulink from "../../Assets/Networks/nulink.png"
import dusk from "../../Assets/Networks/dusk.png"
import stratis from "../../Assets/Networks/stratis.png"
import lava from "../../Assets/Networks/lava.png"
import bevm from "../../Assets/Networks/bevm.png"
import autonity from "../../Assets/Networks/autonity.jpg"
import initia from "../../Assets/Networks/initia.png"

const slides = [
  {
    src: entangle,
    alt: 'Entangle',
    label: 'Entangle',
    interval: 500,
    text: 'Entangle',
  },
  {
    src: pryzm,
    alt: 'Pryzm',
    label: 'Pryzm',
    interval: 500,
    text: 'Pryzm',
  },
  {
    src: nulink,
    alt: 'Nulink',
    label: 'Nulink',
    interval: 500,
    text: 'Nulink',
  },
  {
    src: dusk,
    alt: 'Dusk',
    label: 'Dusk',
    interval: 500,
    text: 'Dusk',
  },
  {
    src: stratis,
    alt: 'Stratis',
    label: 'Stratis',
    interval: 500,
    text: 'Stratis',
  },
  {
    src: lava,
    alt: 'Lava',
    label: 'Lava',
    interval: 500,
    text: 'Lava',
  },
  {
    src: bevm,
    alt: 'Bevm',
    label: 'Bevm',
    interval: 500,
    text: 'Bevm',
  },
  {
    src: autonity,
    alt: 'Autonity',
    label: 'Autonity',
    interval: 500,
    text: 'Autonity',
  },
  {
    src: initia,
    alt: 'Initia',
    label: 'Initia',
    interval: 500,
    text: 'Initia',
  },
];

function ArchiveCards() {
  return <IndividualIntervals slides={slides} />;
}

export default ArchiveCards;