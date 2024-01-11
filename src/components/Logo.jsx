// Assets
import Image from 'react-bootstrap/Image';
import logo from '../assets/logo/ColorLogo-WithBckgr.svg'

const Logo = () => (
    <Image
        id="brandLogo"
        src={logo}
        height={"auto"}
        width="30%"
        alt="ElevateHer By Ana Restrepo"
    />
)

export default Logo