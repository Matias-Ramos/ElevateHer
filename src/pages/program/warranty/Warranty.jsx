// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from "./Header";
// Styling
const firstColStyling = "d-flex align-items-center mb-3"
const rowStyling = "d-lg-flex justify-content-center"
const textureURL = `url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23281e2d' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
const warrantyStyling = {
    position: "relative",
    zIndex: 2,
    backgroundColor: '#6B5278',
    color: "white",
    boxShadow: `
        rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px -18px 36px -18px inset,  
        rgba(0, 0, 0, 0.3) 0px -18px 36px -18px inset`,
    textShadow: "2px 2px 4px #281e2d",
    backgroundImage: textureURL,
};


const Warranty = () => (
    <section
        id="warranty"
        style={warrantyStyling}
    >
        <Container>
            <Row className={rowStyling}>

                <Col xs={12} lg={11} className={firstColStyling}>
                    <Header />
                </Col>

                <Col lg={11}>
                    <p style={{ lineHeight: "2.3rem" }}>
                        Si al final de los tres meses no has visto ningún cambio, puedes agendar una llamada y revisaré con mi equipo si eres elegible para el <b>reembolso</b>. Esto dependerá que hayas asistido a todas nuestras reuniones virtuales, chequeos semanales, que demuestres desde la aplicación que cumpliste con el 95% de los entrenamientos, llevaste el registro de alimentación y cumpliste con los hábitos que te agendé en el cronograma al 100%.
                    </p>
                </Col>
                
            </Row>
        </Container>
    </section>
)

export default Warranty