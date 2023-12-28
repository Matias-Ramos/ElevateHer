// Components
import CTA_Section from "../components/CallToAction/CTA_Section.jsx"
import Faq from "../pages/faq/Faq.jsx"
import Footer from "../pages/footer/Footer.jsx"
import Introduction from "../pages/introduction/Introduction.jsx"
import BigPicture from '../pages/program/bigPicture/BigPicture.jsx'
import Phases from "../pages/program/phases/Phases.jsx"
import Table from '../pages/program/table/Table.jsx'
import Warranty from "../pages/program/warranty/Warranty.jsx"
import Target from "../pages/target/Target.jsx"
import Testimonies from "../pages/testimonies/Testimonies.jsx"
// Navigation
import { BrowserRouter } from 'react-router-dom'
// Props
const CTAtext1 = 'Tu mejor versión te espera'
const CTAtext2 = 'Sé tu propia motivación'

const App = () => (
  <>
    <BrowserRouter>
      <Introduction />
      <CTA_Section text={CTAtext1} />
      <BigPicture />
      <Phases />
      <Table />
      <Warranty />
      <Target />
      <Testimonies />
      <Faq />
      <CTA_Section text={CTAtext2} />
      <Footer />
    </BrowserRouter>
  </>
)


export default App
