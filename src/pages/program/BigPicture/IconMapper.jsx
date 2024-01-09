// BTS
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import IconInCircle from '../../../components/IconInCircle';
// Styling
const iconsRowStyling = 'flex-sm-row flex-md-column gap-md-3 my-3 h-100'
const iconsColStyling = 'd-flex justify-content-center'

const IconMapper = ({ icons }) => {
    return (
        <Row className={iconsRowStyling}>
            {icons.map( (icon, index) => (
                <Col key={index} className={iconsColStyling}>
                    <IconInCircle>
                        {icon}
                    </IconInCircle>
                </Col>
            ))}
        </Row>
    )
}
export default IconMapper