// Components
import Image from 'react-bootstrap/Image';
// Assets
import AnaImg from '../../../assets/ana_pic_1.jpg';
const picStyling = {
    objectFit: 'cover',
    objectPosition: '100% 40%',
};

const Picture = () => (
    <Image src={AnaImg} style={picStyling} id="anaPic"/>
)

export default Picture