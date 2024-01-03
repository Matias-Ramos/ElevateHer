import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { IoIosArrowDown } from "react-icons/io";
import CustomToggle from './CustomToggle';
import FaqData from './FaqData';
import { IconContext } from "react-icons";
// Styling
const questionStyling = { display:"block", width: "100%", marginLeft: "25px" }
const cardStyling = { color:"#252422", backgroundColor:"rgba(0,0,0,0)" }

const CardMapper = () => (
    <>
        { FaqData.map(( faqItem ) => (
            <Card key={faqItem.id} className='mb-3' style={cardStyling}>
                <Card.Header className='p-0'>
                    <CustomToggle eventKey={faqItem.id}>
                        <IconContext.Provider value={{ size: "1.5rem"}}>
                            {faqItem.icon}
                        </IconContext.Provider>
                        <span style={questionStyling}>{faqItem.question}</span>
                        <IoIosArrowDown />
                    </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey={faqItem.id}>
                    <Card.Body>{faqItem.answer}</Card.Body>
                </Accordion.Collapse>
            </Card>
        ))}
    </>
)
export default CardMapper