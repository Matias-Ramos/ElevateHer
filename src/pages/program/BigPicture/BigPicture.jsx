// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Components
import { GiBodyBalance, GiBrain } from "react-icons/gi";
import { PiBowlFoodDuotone } from "react-icons/pi";
import IconMapper from './IconMapper';
import Text from './Text';
// Styling
const textStyling = 'd-md-flex flex-md-column justify-content-md-center'

const BigPicture = () => {

    const icons = [<GiBodyBalance />, <GiBrain />, <PiBowlFoodDuotone />];

    return (
        <section id="aboutTheProgram">
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col sm={12} md={2} >
                        <IconMapper icons={icons} />
                    </Col>
                    <Col xs={11} sm={11} md={9} lg={7} xl={6} xxl={5} className={textStyling}>
                        <Text />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BigPicture