// BTS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import ExternalCredits from "./ExternalCredits";
import DevCredits from './DevCredits';

const Signature = () => (
  <div id="signatureSection">
    <Container fluid>
      <Row>
        <Col>
          <DevCredits />
        </Col>
        <Col>
          <ExternalCredits />
        </Col>
      </Row>
    </Container>    
  </div>
);

export default Signature;
