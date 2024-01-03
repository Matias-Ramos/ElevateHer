import IconInCircle from '../../components/IconInCircle';
import { PiSealQuestionFill } from "react-icons/pi";
const h2Styling = 'd-inline-block ms-2 mb-0'

const Header = () => (
    <>
        <h2 className={h2Styling}>Preguntas frecuentes</h2>
        <IconInCircle>
            <PiSealQuestionFill />
        </IconInCircle>
    </>
)

export default Header