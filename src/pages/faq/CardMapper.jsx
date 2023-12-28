import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { IoIosArrowDown } from "react-icons/io";
import CustomToggle from './CustomToggle';
import FaqData from './FaqData';

const CardMapper = () => (
    <>
        { FaqData.map(( faqItem ) => (
            <Card key={faqItem.id} className='mb-2'>
                <Card.Header className='p-0'>
                    <CustomToggle eventKey={faqItem.id}>
                        {faqItem.question}
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