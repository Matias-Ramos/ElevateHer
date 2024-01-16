// Assets
import anaPicture from "../../assets/photos/ana_pic_2.jpg";
// BTS
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
// Components
import List from "./List";
import StoryTelling from "./StoryTelling";
import Waves from "./Waves";
// Styles
const sectionStyling = {
  background: "linear-gradient(180deg, rgb(107, 82, 120) 0%, rgb(131, 100, 147) 50%, rgb(152, 125, 166) 100%)",
  color: "white",
  textShadow: "rgba(76, 42, 42, 0.7) 2px 2px 2px",
  position: "relative"
}

const WhoIsAna = () => (
  <section style={sectionStyling} id="whoIsAna">
    <Waves />
    <Container>
      <Row>

        <Col xs={12} className="mb-lg-2">
          <h2 className="mb-3">
            Quién es Ana Restrepo?
          </h2>
          <List />
        </Col>

        <Col>
          <Image
            src={anaPicture}
            alt="Fotografía de Ana Restrepo"
            className="rounded"
            fluid />
        </Col>

        <Col xs={12} lg={6}>
          <StoryTelling />
        </Col>

      </Row>
    </Container>

  </section>
)
export default WhoIsAna;