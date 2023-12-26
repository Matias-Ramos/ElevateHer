// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ScheduleBtn from './ScheduleBtn';
// Custom components
import FormattedText from './FormattedText';

const CTA_Container = ({ text, isCTAsection = false }) => (
    <Container className="callToAction">
        <Row>
            <Col className='col' xs={12} md={6} lg={12}>
                <FormattedText text={text} />
            </Col>
            <Col className='col' xs={12} md={6} lg={isCTAsection ? 6 : 10}>
                <ScheduleBtn />
            </Col>
        </Row>
    </Container>
)

export default CTA_Container