import { Container, Row } from "react-bootstrap";
import Buttons from "./Buttons";
import Header from "./Header";

const PaymentMethods = () => {
  return (
    <section id="paymentMethods">
      <Header />
      <Container>
        <Row>
          <Buttons />
        </Row>
      </Container>
    </section>
  )
}
export default PaymentMethods