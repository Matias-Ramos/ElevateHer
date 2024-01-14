// Icon
import IconInCircle from "../../../components/IconInCircle"
import { HiCheckBadge } from "react-icons/hi2";
// Styling
const iconContainerStyling = 'd-flex align-items-center gap-3';
const headerStyling = { textShadow: "2px 2px 4px #281e2d", margin: "0px 0px 0px 1rem" }

const Header = () => (
    <>
        <div className={iconContainerStyling} >
            <IconInCircle>
                <HiCheckBadge color="#43334b" />
            </IconInCircle>
        </div>
        <h2 style={headerStyling}>
            Garantía condicional
        </h2>
    </>
)
export default Header