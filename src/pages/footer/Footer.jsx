// BTS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Custom components
import SocialNetworks from './SocialNetworks';
import Links from './Links';

const Footer = () => (
    <footer className='py-4'>
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