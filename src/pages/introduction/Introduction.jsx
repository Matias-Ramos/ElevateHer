// BTS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import Logo from './Logo';
import Video from './Video'
// Styling
const logoStyling = 'd-flex justify-content-center pb-4';
const secondRowStyling = 'px-lg-4 px-xl-0';

const Introduction = () => (
    <section>
        <Container fluid id="presentation">

            <Row>
                <Col className={logoStyling}>
                    <Logo />
                </Col>
            </Row>

            <Row className={secondRowStyling}>
                <Col sm={11} md={10} lg={5} xl={4} id="h1column">
                    <h1>Revoluciona tu cuerpo, fortalece tu mente y sana tu relación con la comida con el método <b>EmpowerHer</b> en tan solo 12 semanas de compromiso y dedicación.</h1>
                </Col>

                <Col sm={12} md={11} lg={7} xxl={6} id="introVideoColumn">
                    <Video />
                </Col>

            </Row>
        </Container>
    </section>
)

export default Introduction