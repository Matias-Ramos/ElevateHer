import IconInCircle from '../../components/IconInCircle';
import { PiSealQuestionFill } from "react-icons/pi";

const containerStyling = 'd-flex w-100 align-items-center justify-content-between gap-3 mb-3';
const h2Styling = {
    textShadow: "2px 2px 4px #281e2d",
    display: "inline-block",
    marginLeft: "10px",
    marginBottom: 0
}

const Header = () => (
    <div className={containerStyling}>

        <h2 style={h2Styling}>
            Preguntas frecuentes
        </h2>
        
        <div id="respectWidth">
            <IconInCircle>
                <PiSealQuestionFill />
            </IconInCircle>
        </div>
    </div>
)

export default Header