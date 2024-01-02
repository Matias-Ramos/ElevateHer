// Custom Components
import Text from './Text';
// BTS Components
import Carousel from 'react-bootstrap/Carousel';
// Data
import testimonies from "./testomonyList";
// BTS
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Testimonies = () => {
  return (
    <section id="testimonies">
      <Carousel indicators={false} id="carouselTestim" interval={null}>
        {testimonies.map((testimony, i) => (
          <Carousel.Item key={i} interval={7000}>
            <Container className='gradient'>
              <Row>
                <Col className='testimonyCol' sm={12} md={6}>
                  <Text testimony={testimony} />
                </Col>
                <Col className='testimonyCol' sm={12} md={6}>
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

