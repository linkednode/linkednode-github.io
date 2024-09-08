import Carousel from 'react-bootstrap/Carousel';
import CarouselImages from './CarouselImages';

function IndividualIntervals({ slides }) {
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index} interval={slide.interval || 1000}>
          <CarouselImages src={slide.src} alt={slide.alt} text={slide.text} />
          <Carousel.Caption>
            <p>{slide.label}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default IndividualIntervals;
