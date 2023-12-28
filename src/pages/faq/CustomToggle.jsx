import { useAccordionButton } from 'react-bootstrap/AccordionButton';

const CustomToggle = ({ children, eventKey }) => {

    const decoratedOnClick = useAccordionButton(eventKey);
    const cardCapStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x)',
        cursor: 'pointer'
    };

    return (
        <div onClick={decoratedOnClick} style={cardCapStyles}>
            {children}
        </div>
    );
}
export default CustomToggle;