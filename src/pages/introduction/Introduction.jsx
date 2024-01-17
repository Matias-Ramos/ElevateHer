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
// Grid sys.
const breakpointsLeft = { sm: 11, md: 10, lg: 5, xl: 4 };
const breakpointsRight = { sm: 12, md: 11, lg: 7, xl: 6 };



const Introduction = () => {
    const isMobile = useMediaQuery('(max-width:991px)');

    const logoVariant = {
        hidden: {
            opacity: 0,
            y: isMobile ? -150 : 150,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                delay: 1,
                bounce: 0.25,
            }
        }
    }


    // FUNCA
    const headerVariant = {
        hidden: {
            opacity: 0,
            x: 150
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                delay: 1,
                bounce: 0.25,
            }
        }
    }


    const newVariant2 = () => {
        if(isMobile){
            return {}
        } else {
            return {
                variants: headerVariant ,
                initial: "hidden",
                animate: "visible"
            }
        }
    }

    return(
        <section id="presentation">
            <Container fluid>
                <Row>

                    <Col {...breakpointsLeft}>
                    </Col>

                    <Col {...breakpointsRight} id="logoCol">
                        <motion.div 
                            variants={logoVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            <Logo />

                        </motion.div>
                    </Col>

                    <Col {...breakpointsLeft} id="h1column">
                        <motion.div {...newVariant2()}>
                            <Text />
                        </motion.div>
                    </Col>

                    <Col {...breakpointsRight}>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <Video />
                        </motion.div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Introduction