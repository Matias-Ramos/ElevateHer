import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import CardMapper from './CardMapper';
import Header from './Header';
// Styling
const h2rowStyling = 'd-flex justify-content-center'
const h2containerStyling = 'd-flex align-items-end justify-content-between mb-4';
const sectionStyling = {
    backgroundImage:"url('/src/assets/backgrounds/faqBckgDesktop.svg')", 
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
    color: "white",
    borderTop: "1px solid #5e4869"
}

const Faq = () => (
    <section id="faq" style={sectionStyling}>
        <Container>
            <Row className={h2rowStyling}>
                <Col md={10} lg={10} xl={9} xxl={8} className={h2containerStyling}>
                    <Header />
                </Col>
                <Col md={10} lg={10} xl={9} xxl={8}>
                    <Accordion>
                        <CardMapper />
                    </Accordion>
                </Col>
            </Row>
        </Container>

    </section>
);

export default Faq;
