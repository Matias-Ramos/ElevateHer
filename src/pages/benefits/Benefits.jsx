// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Components
import CTA_Container from '../../components/CallToAction/CTA_Container';
import List from './List';
import Header from './Header';
// Styling
const rowStyling = 'flex-column flex-lg-row justify-content-lg-evenly'
const secondColStyling = 'd-flex align-items-center'
// Others
import { stripeFullPayment } from '../../utils/Links';
const sellingSpeech = 'El camino se recorre dando el primer paso';
// Styling
const sectionStyling = {
    paddingTop: '8rem',
    paddingBottom: '5.5rem',
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

const Benefits = () => {
    return (
        <section id="benefits" style={sectionStyling}>
            <Container>
                <Row className={rowStyling}>
                    <Col lg={12} xl={11}>
                        <Header />
                        <List />
                    </Col>
                    <Col className={secondColStyling} md={12} lg={8}>
                        <CTA_Container
                            stripeLink={stripeFullPayment}
                            text={sellingSpeech} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Benefits