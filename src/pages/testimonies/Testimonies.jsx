// BTS Components
import Carousel from 'react-bootstrap/Carousel';
// Data
import testimonies from "./testomonyList";
// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';
// Styling
const height = "25rem";

const Testimonies = () => {
  return (
    <section>
      <div id="testimoniesContainer">
        <Carousel >
          {testimonies.map((testimony, i) => (
            <Carousel.Item key={i} interval={100000000} style={{height: height}}>
              <Container style={{height: height}}>
                <Row style={{height: height}}>
                  <Col className='testimonyCol d-flex' style={{height: height}}>
                    <div className='mt-auto mb-auto'>
                        <span className='d-block mb-2'>{testimony.written}</span>
                        <span>{testimony.personName}</span>
                    </div>
                  </Col>
                  <Col className='testimonyCol d-flex justify-content-center' style={{height: height}}>
                    <Image
                      src={testimony.img}
                      alt="First slide"
                      style={{ width: "auto", height: "25rem" }}
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

