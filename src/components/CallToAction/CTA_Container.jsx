// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ScheduleBtn from './ScheduleBtn';
// Hooks
import useMediaQuery from '@mui/material/useMediaQuery';


const CTA_Container = ({text}) => {

    const isSmallPhone = useMediaQuery('(max-width:374px)');
    const FormattedText = () => {
        if(isSmallPhone){
            const half = Math.ceil(text.length / 2);
            const firstHalf = text.slice(0, half)
            const secondHalf = text.slice(half)
            return(
            <>
                <div>
                    {firstHalf} <br /> {secondHalf}
                </div>
            </>
            )
        } else return(text)
    }


  return (
    <Container id="callToAction">
        <Row>
            <Col className='col' xs={12} md={6} lg={12}>
                <FormattedText />
            </Col>
            <Col className='col' xs={12} md={6} lg={10}>
                <ScheduleBtn  />
            </Col>
        </Row>
    </Container>
  )
}
export default CTA_Container