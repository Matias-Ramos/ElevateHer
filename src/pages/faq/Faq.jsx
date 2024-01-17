import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import CardMapper from './CardMapper';
import Header from './Header';
import backgroundPath from '../../assets/backgrounds/faqBckgDesktop.svg';
// Styling
const h2rowStyling = 'd-flex justify-content-center'
const h2containerStyling = 'd-flex align-items-end justify-content-between mb-3';
const sectionStyling = {
    backgroundImage: `url(${backgroundPath})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
    borderTop: "1px solid #5e4869"
}
// Grid sys.
const breakpoints = {  md: 10, lg: 10, xl: 9, xxl: 8 };


const Faq = () => (
    <section
        id="faq"
        style={sectionStyling}
    >
        <Container>
            <Row className={h2rowStyling}>
                <Col {...breakpoints} className={h2containerStyling}>
                    <Header />
                </Col>

                <Col {...breakpoints}>
                    <Accordion>
                        <CardMapper />
                    </Accordion>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Faq;
