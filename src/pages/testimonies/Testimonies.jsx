// Custom Components
import Text from './Text';
// BTS Components
import Carousel from 'react-bootstrap/Carousel';
// Data
import testimonies from "./testomonyList";
// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';


const Testimonies = () => {
  return (
    <section id="testimoniesContainer">
        <Carousel indicators={false}>
          {testimonies.map((testimony, i) => (
            <Carousel.Item key={i}>
              <Container>
                <Row>
                  <Col className='testimonyCol'>
                    <Text testimony={testimony} />
                  </Col>
                  <Col className='testimonyCol'>
                    <Image
                      src={testimony.img}
                      alt={`Imagen antes y despues #${i}`}
                    />
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
    </section>
  )
}
export default Testimonies

