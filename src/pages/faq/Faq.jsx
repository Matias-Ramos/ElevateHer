import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import CardMapper from './CardMapper';
import Header from './Header';

const h2rowStyling = 'd-flex justify-content-center'
const h2containerStyling = 'd-flex align-items-center justify-content-between mb-3';

const Faq = () => (
    <section>
        <Container>
            <Row className={h2rowStyling}>
                <Col md={10} lg={9} xl={8} xxl={7} className={h2containerStyling}>
                    <Header />
                </Col>
                <Col md={10} lg={9} xl={8} xxl={7}>
                    <Accordion>
                        <CardMapper />
                    </Accordion>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Faq;
