// BTS
import { Col } from "react-bootstrap";
// Utils
import { stripeFullPayment, stripeMonthlyPayment } from "../../utils/Links";
// Components
import BuyBtn from "../../components/CallToAction/BuyBtn";
// Grid sys.
const breakpoints = { xs: 12, md: 6 }

const Buttons = () => (
    <>
        <Col 
            className="paymentCol"
            {...breakpoints}
        >
            <div className="paymentMethod gradient">
                <div className="innerContainer">
                    <span className="d-block price">
                        $ 1150
                    </span>
                    <span>
                        Abonando en un único pago<br /> con 15% de descuento
                    </span>
                    <BuyBtn stripeLink={stripeFullPayment} />
                </div>
            </div>
        </Col>

        <Col
            className="paymentCol"
            {...breakpoints}
        >
            <div className="paymentMethod gradient">
                <div className="innerContainer">
                    <span className="d-block price">
                        $ 450
                    </span>
                    <span>
                        Abonando mes a mes
                    </span>
                    <BuyBtn stripeLink={stripeMonthlyPayment} />
                </div>
            </div>
        </Col>
    </>
)

export default Buttons