// BTS
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Data
import testimonies from "./testomonyList";
// Components
import Text from './Text';
// Grid sys.
const breakpoints = { sm: 12, md: 6 };

const Testimonies = () => (
  <section id="testimonies">
    <Carousel
      id="carouselTestim"
      indicators={false}
    >
      {testimonies.map((testimony, i) => (
        <Carousel.Item key={i} interval={10000}>
          <Container className='gradient'>
            <Row>

              <Col className='testimonyCol' {...breakpoints}>
                <Text testimony={testimony} />
              </Col>

              <Col className='testimonyCol' {...breakpoints}>
                <Image src={testimony.img} alt={`Imagen antes y despues #${i}`} />
              </Col>

            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  </section>
)
export default Testimonies

