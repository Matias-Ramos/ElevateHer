// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Custom components
import FormattedText from './FormattedText';
import ScheduleBtn from './ScheduleBtn';
import BuyBtn from './BuyBtn';

const CTA_Container = ({ text, isCTAsection = false }) => (
    <Container className="callToAction">
        <Row>
            <Col className='ctaCol' xs={12} md={10} lg={12}>
                <FormattedText text={text} />
            </Col>
            <Col className='ctaCol' xs={12} md={10} lg={isCTAsection ? 6 : 10}>
                <ScheduleBtn />
                <BuyBtn />
            </Col>
        </Row>
    </Container>
)

export default CTA_Container