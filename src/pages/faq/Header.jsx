import IconInCircle from '../../components/IconInCircle';
import { PiSealQuestionFill } from "react-icons/pi";
const h2Styling = 'ms-2 d-inline-block'

const Header = () => (
    <>
        <h2 className={h2Styling}>Preguntas frecuentes</h2>
        <IconInCircle>
            <PiSealQuestionFill />
        </IconInCircle>
    </>
)

export default Header