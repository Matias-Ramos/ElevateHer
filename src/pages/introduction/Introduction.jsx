// BTS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import Logo from '../../components/Logo';
import Video from './Video'
import Text from './Text';
// Grid sys.
const breakpointsLeft = { sm: 11, md: 10, lg: 5, xl: 4 };
const breakpointsRight = { sm: 12, md: 11, lg: 7, xl: 6 };


const Introduction = () => (
    <section id="presentation">
        <Container fluid>
            <Row>

                <Col {...breakpointsLeft}>
                </Col>

                <Col {...breakpointsRight} id="logoCol">
                    <Logo />
                </Col>

                <Col {...breakpointsLeft} id="h1column">
                    <Text />
                </Col>

                <Col {...breakpointsRight}>
                    <Video />
                </Col>

            </Row>
        </Container>
    </section>
)

export default Introduction