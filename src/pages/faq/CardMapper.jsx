import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import CustomToggle from './CustomToggle';
import FaqData from './FaqData';
// Styling
const questionStyling = { display: "block", width: "100%", marginLeft: "25px" }
const cardStyling = { color: "white", backgroundColor: "rgba(94, 72, 105,0.5)", textShadow: "2px 2px 4px #281e2d", marginBottom: "1rem" }

const CardMapper = () => (
    <>
        {FaqData.map((faqItem) => (
            <Card
                key={faqItem.id}
                style={cardStyling}
            >
                {/* Closed button text */}
                <Card.Header className='p-0'>
                    <CustomToggle eventKey={faqItem.id}>
                        <IconContext.Provider value={{ size: "1.5rem" }}>
                            {faqItem.icon}
                        </IconContext.Provider>
                        <span style={questionStyling}>
                            {faqItem.question}
                        </span>
                        <IoIosArrowDown />
                    </CustomToggle>
                </Card.Header>

                {/* Open button text */}
                <Accordion.Collapse eventKey={faqItem.id}>
                    <Card.Body>
                        {faqItem.answer}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        ))}
    </>
)
export default CardMapper