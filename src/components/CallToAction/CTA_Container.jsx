// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Custom components
import ScheduleBtn from './ScheduleBtn';
import BuyBtn from './BuyBtn';
// Animation
import { motion } from 'framer-motion';
const containerAnimation = {
    initial : { scale: 1 },
    whileInView: { scale: [1, 1.03, 1, 1.03, 1] },
    transition: { delay: 0.4, duration: 0.75, ease: "easeInOut" }
}
// Styling
const rowStyling = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}
const motivationalTxtStyling = {
    textAlign: "center",
    marginBottom: "1rem",
    textShadow: "2px 2px 2px rgba(76, 42, 42, 0.7)",
}
const btnsStyling = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
}

const CTA_Container = ({ stripeLink, text, isCTAsection = false }) => {

    return(
        <Container className="callToAction">
            <Row style={rowStyling}>

                <Col
                    style={motivationalTxtStyling}
                    className='ctaCol'
                    xs={12}
                    md={10}
                    lg={12}
                >
                    {text}
                </Col>

                <Col
                    className='ctaCol'
                    xs={12}
                    md={10}
                    lg={isCTAsection ? 6 : 10}
                >
                    <motion.div
                        initial={containerAnimation.initial}
                        whileInView={containerAnimation.whileInView}
                        transition={containerAnimation.transition}
                        viewport={{ once: true }}
                        style={btnsStyling} 
                    >
                        <ScheduleBtn />
                        <BuyBtn stripeLink={stripeLink} />
                    </motion.div>
                </Col>
            </Row>
        </Container>
    )
}

export default CTA_Container