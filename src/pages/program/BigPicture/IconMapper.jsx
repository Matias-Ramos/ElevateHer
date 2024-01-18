// Hooks
import useMediaQuery from '@mui/material/useMediaQuery';
// Icons
import { GiBodyBalance, GiBrain } from "react-icons/gi";
import { PiBowlFoodDuotone } from "react-icons/pi";
// BTS
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import IconInCircle from '../../../components/IconInCircle';
// Animation
import { motion } from "framer-motion";
import { applyVariantMobileOnly } from "./variants";
// Styling
const iconsRowStyling = 'flex-sm-row flex-md-column gap-md-3 my-3 h-100'
const iconsColStyling = 'd-flex justify-content-center'
const motionCtStyling = "w-100 h-100 d-flex justify-content-center align-items-center"


const IconMapper = () => {
    const isMobile = useMediaQuery('(max-width:991px)');
    const icons = [<GiBodyBalance />, <GiBrain />, <PiBowlFoodDuotone />];

    return (
        <Row className={iconsRowStyling}>
            {icons.map( (icon, index) => (
                <Col key={index} className={iconsColStyling}>
                    <IconInCircle>
                    <motion.div
                        {...applyVariantMobileOnly(isMobile)}
                        viewport={{ once: true }}
                        className={motionCtStyling}
                    >
                        {icon}
                    </motion.div>
                    </IconInCircle>

                </Col>
            ))}
        </Row>
    )
}
export default IconMapper