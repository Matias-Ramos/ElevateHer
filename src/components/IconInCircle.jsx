// Components
import { IconContext } from "react-icons";
// Styling
const containerStyling = {
    background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1) 20%, rgba(160, 160, 160, 1) 100%)",
    boxShadow: "rgba(0, 0, 0, 0.5) 1.95px 1.95px 2.6px",
    height: "4rem",
    width: "4rem",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const iconStyling = { className: "w-75 h-75 p-1", color:"#43334b" }

const IconInCircle = ({ children }) =>(
    <div style={containerStyling}>
        <IconContext.Provider value={iconStyling}>
            {children}
        </IconContext.Provider>
    </div>
)

export default IconInCircle