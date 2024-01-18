// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Components
import IconMapper from './IconMapper';
import Text from './Text';
// Hooks
import useMediaQuery from '@mui/material/useMediaQuery';
// Animation
import applyVariantDesktopOnly from '../../../utils/applyVariants';
import { motion } from 'framer-motion';
import { textVariant, iconsDktpVariant, iconsMobileVariant } from './variants';
// Styling
const textStyling = 'd-md-flex flex-md-column justify-content-md-center'
// Grid sys.
const breakpoints = { xs: 11, sm: 11, md: 9, lg: 7, xl: 6, xxl: 5};

const BigPicture = () => {

    const isMobile = useMediaQuery('(max-width:991px)');

    return(
        <section id="aboutTheProgram">
            <Container fluid>
                <Row className='justify-content-center'>

                    <Col sm={12} md={2} >
                        <motion.div
                            {...applyVariantDesktopOnly(iconsDktpVariant, isMobile)}
                            viewport={ !isMobile && {once: true} }
                            className='h-100'
                        >
                            <IconMapper />
                        </motion.div>
                    </Col>

                    <Col className={textStyling} {...breakpoints} >
                        <motion.div
                            {...applyVariantDesktopOnly(textVariant, isMobile)}
                            viewport={ !isMobile && {once: true} }
                        >
                            <Text />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}



export default BigPicture