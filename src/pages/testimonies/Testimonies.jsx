// BTS Components
import Carousel from 'react-bootstrap/Carousel';
// Data
import testimonies from "./testomonyList";
// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';
// Hooks
import useMediaQuery from '@mui/material/useMediaQuery';

const Testimonies = () => {
  const isMobile = useMediaQuery('(max-width:576px)');
  return (
    <section id="testimoniesContainer">
      <div>
        <Carousel
          indicators={isMobile ? true : false}
        >
          {testimonies.map((testimony, i) => (
            <Carousel.Item key={i} interval={100000000}>
              <Container>
                <Row>
                  <Col className='testimonyCol d-flex'>
                    <div className='mt-auto mb-auto'>
                      <span className='d-block mb-2'>{testimony.written}</span>
                      <span>{testimony.personName}</span>
                    </div>
                  </Col>
                  <Col className='testimonyCol d-flex justify-content-center'>
                    <Image
                      src={testimony.img}
                      alt="First slide"

                    />
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
export default Testimonies

