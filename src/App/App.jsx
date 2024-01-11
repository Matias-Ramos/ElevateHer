// Components
import CTA_Section from "../components/CallToAction/CTA_Section.jsx"
import Faq from "../pages/faq/Faq.jsx"
import Footer from "../pages/footer/Footer.jsx"
import Introduction from "../pages/introduction/Introduction.jsx"
import BigPicture from '../pages/program/bigPicture/BigPicture.jsx'
import Phases from "../pages/program/phases/Phases.jsx"
import Table from '../pages/program/table/Table.jsx'
import Warranty from "../pages/program/warranty/Warranty.jsx"
import Benefits from "../pages/benefits/Benefits.jsx"
import Testimonies from "../pages/testimonies/Testimonies.jsx"
import Signature from "../pages/signature/Signature.jsx"
// Mui styling
import { createTheme, ThemeProvider } from '@mui/material/styles'
// Navigation
import { BrowserRouter } from 'react-router-dom'
import WhoIsAna from "../pages/whoIsAna/WhoIsAna.jsx"
// Props
import { fullPayment, monthlypayment } from "./stripeLinks.js"
import PaymentMethods from "../pages/paymentMethods/PaymentMethods.jsx"
const CTAtext1 = 'Tu mejor versión te espera'
const CTAtext2 = 'Sé tu propia motivación'


const App = () => (
  <>
    <BrowserRouter>
      <ThemeProvider theme={THEME}>
        <main>
          <div id="firstBackground">
            <Introduction />
            <CTA_Section stripeLink={fullPayment} text={CTAtext1} />
            <BigPicture />
          </div>
          <Phases />
          <div id="secondBackground">
            <Table />
            <PaymentMethods />
          </div>
          <Warranty />
          <Benefits />
          <Testimonies />
          <Faq />
          <div id="lastCat">
            <CTA_Section stripeLink={fullPayment} text={CTAtext2}/>
          </div>
          <WhoIsAna />
          
        </main>
        <Footer />
        <Signature />
      </ThemeProvider>
      
    </BrowserRouter>
  </>
)

const THEME = createTheme({
  typography: {
   "fontFamily": `"Quicksand", sans-serif`,
   "fontSize": 17,
   "lineHeight": 1.7,
  }
});
export default App
