// BTS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import Logo from '../../components/Logo';
import Video from './Video'
import Text from './Text';
// Grid sys.
const breakpointsOne = { sm: 11, md: 10, lg: 5, xl: 4 };
const breakpointsTwo = { sm: 12, md: 11, lg: 7, xl: 6 };


const Introduction = () => (
    <section id="presentation">
        <Container fluid>
            <Row>

                <Col {...breakpointsOne}>
                </Col>

                <Col {...breakpointsTwo} id="logoCol">
                    <Logo />
                </Col>

                <Col {...breakpointsOne} id="h1column">
                    <Text />
                </Col>

                <Col {...breakpointsTwo}>
                    <Video />
                </Col>

            </Row>
        </Container>
    </section>
)

export default Introduction