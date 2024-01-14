// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Components
import IconMapper from './IconMapper';
import Text from './Text';
// Styling
const textStyling = 'd-md-flex flex-md-column justify-content-md-center'
// Grid sys.
const breakpoints = { xs: 11, sm: 11, md: 9, lg: 7, xl: 6, xxl: 5};

const BigPicture = () => (
    <section id="aboutTheProgram">
        <Container fluid>
            <Row className='justify-content-center'>

                <Col sm={12} md={2} >
                    <IconMapper />
                </Col>

                <Col className={textStyling} {...breakpoints} >
                    <Text />
                </Col>
            </Row>
        </Container>
    </section>
)


export default BigPicture