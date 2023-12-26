// Components
import Introduction from "./pages/introduction/Introduction.jsx"
import {MyTable} from './pages/program/table/Table.jsx'
import BigPicture from './pages/program/bigPicture/BigPicture.jsx'
import Phases from "./pages/program/phases/Phases.jsx"
import Warranty from "./pages/program/warranty/Warranty.jsx"
import Target from "./pages/target/Target.jsx"
import Testimonies from "./pages/testimonies/Testimonies.jsx"
import CTA_Section from "./components/CallToAction/CTA_Section.jsx"
import Footer from "./pages/footer/Footer.jsx"
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
      <MyTable />
      <Warranty />
      <Target />
      <Testimonies />
      <CTA_Section text={CTAtext2} />
      <Footer />
    </BrowserRouter>
  </>
)


export default App
