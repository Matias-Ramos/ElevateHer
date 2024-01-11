import { Col } from "react-bootstrap";
import { fullPayment, monthlypayment } from "../../App/stripeLinks";
import BuyBtn from "../../components/CallToAction/BuyBtn";

const Buttons = () => (
    <>
        <Col xs={12} md={6} className="paymentCol">
            <div className="paymentMethod gradient">
                <div className="innerContainer">
                    <span className="d-block price">$600</span>
                    <span>Abonando en un único pago<br /> con 20% de descuento</span>
                    <BuyBtn stripeLink={fullPayment} />
                </div>
            </div>
        </Col>
        <Col xs={12} md={6} className="paymentCol">
            <div className="paymentMethod gradient">
                <div className="innerContainer">
                    <span className="d-block price">$ 275</span>
                    <span>Abonando mes a mes</span>
                    <BuyBtn stripeLink={monthlypayment} />
                </div>
            </div>
        </Col>
    </>
)

export default Buttons