// Components
import { IconContext } from "react-icons";
// Styling

const containerStyling = {
    backgroundImage: "linear-gradient(144deg, rgb(255, 227, 171), rgb(153, 120, 71) 80%, rgb(255, 227, 171))",
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