import { Carousel, Container } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <>
      <Container className="mt-5">
        <Carousel>
          <Carousel.Item>
            <img src="../src/assets/slide1.png" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="../src/assets/slide2.png" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="../src/assets/slide3.png" alt="" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default CarouselComponent;
