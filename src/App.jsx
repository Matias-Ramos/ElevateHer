// Components
import Introduction from "./pages/introduction/Introduction"
import Table from "./pages/program/table/Table"
import BigPicture from "./pages/program/bigPicture/BigPicture"
import Phases from "./pages/program/phases/Phases"
import Warranty from "./pages/program/warranty/Warranty"
import Target from "./pages/target/Target"
import Testimonies from "./pages/testimonies/Testimonies"
import CTA_Section from "./components/CallToAction/CTA_Section"
// Props
const CTAtext1 = 'Tu mejor versión te espera'
const CTAtext2 = 'Sé tu propia motivación'

const App = () => (
  <>
    <Introduction />
    <CTA_Section text={CTAtext1} />
    <BigPicture />
    <Phases />
    <Table />
    <Warranty />
    <Target />
    <Testimonies />
    <CTA_Section text={CTAtext2} />
  </>
)


export default App
