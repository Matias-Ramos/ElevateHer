// Hooks
import useMediaQuery from '@mui/material/useMediaQuery';
// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Components
import Logo from '../../components/Logo';
import Text from './Text';
import Video from './Video';
// Animation
import { motion } from 'framer-motion';
import { headerVariant, videoVariant, applyLogoVariant } from './variants';
import applyVariant from '../../utils/applyVariants';
// Grid sys.
const breakpointsLeft = { sm: 11, md: 10, lg: 5, xl: 4 };
const breakpointsRight = { sm: 12, md: 11, lg: 7, xl: 6 };



const Introduction = () => {
    
    const isMobile = useMediaQuery('(max-width:991px)');

    return(
        <section id="presentation">
            <Container fluid>
                <Row>

                    <Col {...breakpointsLeft}>
                    </Col>

                    <Col {...breakpointsRight} id="logoCol">
                        <motion.div {...applyLogoVariant(isMobile)}>
                            <Logo />
                        </motion.div>
                    </Col>

                    <Col {...breakpointsLeft} id="h1column">
                        <motion.div {...applyVariant(headerVariant, isMobile)}>
                            <Text />
                        </motion.div>
                    </Col>

                    <Col {...breakpointsRight}>
                        <motion.div {...applyVariant(videoVariant, isMobile)}>
                            <Video />
                        </motion.div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Introduction