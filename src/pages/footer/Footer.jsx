// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Custom components
import Links from './Links';
import SocialNetworks from './SocialNetworks';

const Footer = () => (
    <footer>
        <Container>
            <Row>
                <Col>
                    <Links />
                </Col>
                <Col>
                    <SocialNetworks />
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer