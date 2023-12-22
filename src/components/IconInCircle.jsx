// Components
import { IconContext } from "react-icons";
// Styling
const containerStyling = {
    backgroundColor: "lightgray",
    height: "4rem",
    width: "4rem",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const iconStyling = { className: "w-75 h-75 p-1" }

const IconInCircle = ({ children }) =>(
    <div style={containerStyling}>
        <IconContext.Provider value={iconStyling}>
            {children}
        </IconContext.Provider>
    </div>
)

export default IconInCircle