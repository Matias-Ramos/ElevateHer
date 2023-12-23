// Icon
import IconInCircle from "../../../components/IconInCircle"
import { HiCheckBadge } from "react-icons/hi2";
import { IconContext } from "react-icons";
// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Styling
const firstColStyling = "d-flex align-items-center mb-3"
const iconStyling = { color: "black", size: "75%" }

const Warranty = () => (
    <section>
        <Container>
            <Row>
                <Col xs={12} className={firstColStyling}>
                    <IconInCircle>
                        <IconContext.Provider value={iconStyling}>
                            <HiCheckBadge />
                        </IconContext.Provider>
                    </IconInCircle>
                    <h2 className="ms-3">Garantía condicional</h2>
                </Col>
                <Col>
                    <p>Si al final de los tres meses no has visto ningún cambio, puedes agendar una llamada y revisaré con mi equipo si eres elegible para el <b>reembolso</b>. Esto dependerá que hayas asistido a todas nuestras reuniones virtuales, chequeos semanales, que demuestres desde la aplicación que cumpliste con el 95% de los entrenamientos, llevaste el registro de alimentación y cumpliste con los hábitos que te agendé en el cronograma al 100%.</p>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Warranty