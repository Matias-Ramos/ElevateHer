import { SiInstagram } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";


const SocialNetworks = () => {
  return (
    <div className="d-flex" style={{height:"2rem"}}>
        <SiInstagram style={{height:"100%", width: "auto", marginRight:"0.5rem"}}/>
        <FaWhatsapp style={{height:"100%", width: "auto"}}/>
    </div>
  )
}
export default SocialNetworks