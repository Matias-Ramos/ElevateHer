// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Components
import CTA_Container from '../../components/CallToAction/CTA_Container';
import List from './List';
// Styling
const rowStyling = 'flex-column flex-lg-row justify-content-lg-evenly'
const secondColStyling = 'd-flex align-items-center'
// Const
const sellingSpeech = 'El camino se recorre dando el primer paso'

const Target = () => {
    return (
        <section id="target">
            <Container>
                <Row className={rowStyling}>
                    <Col lg={7} xl={5}>
                        <List />
                    </Col>
                    <Col className={secondColStyling} lg={5}>
                        <CTA_Container text={sellingSpeech} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Target