import IconInCircle from '../../components/IconInCircle';
import { PiSealQuestionFill } from "react-icons/pi";
const h2styling = 'd-inline-block text-end'

const Header = () => (
    <>
        <h2 className={h2styling}>Preguntas frecuentes</h2>
        <IconInCircle>
            <PiSealQuestionFill />
        </IconInCircle>
    </>
)

export default Header