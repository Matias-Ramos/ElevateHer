// Components
import Image from 'react-bootstrap/Image';
// Assets
import AnaImg from '../../../assets/ana_pic_1.jpg';
// Styling
const imgStyles = {
    width: "100%",
    objectFit: "cover",
    objectPosition: "100% 20%"
}

const Picture = () => (
    <Image src={AnaImg} style={imgStyles} />
)

export default Picture