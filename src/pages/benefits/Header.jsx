import IconInCircle from '../../components/IconInCircle';
import { MdSelfImprovement } from "react-icons/md";

const Header = () => {
    return (
        <div className='d-flex align-items-center gap-3 mb-4'>
            <IconInCircle>
                <MdSelfImprovement  />
            </IconInCircle>
            <h2>Beneficios:</h2>
        </div>
    )
}
export default Header