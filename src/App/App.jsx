// Components
import CTA_Section from "../components/CallToAction/CTA_Section.jsx"
import Faq from "../pages/faq/Faq.jsx"
import Footer from "../pages/footer/Footer.jsx"
import Introduction from "../pages/introduction/Introduction.jsx"
import BigPicture from '../pages/program/bigPicture/BigPicture.jsx'
import Phases from "../pages/program/phases/Phases.jsx"
import Table from '../pages/program/table/Table.jsx'
import Warranty from "../pages/program/warranty/Warranty.jsx"
import Benefits from "../pages/target/Benefits.jsx"
import Testimonies from "../pages/testimonies/Testimonies.jsx"
// Mui styling
import { createTheme, ThemeProvider } from '@mui/material/styles'
// Navigation
import { BrowserRouter } from 'react-router-dom'
// Props
const CTAtext1 = 'Tu mejor versión te espera'
const CTAtext2 = 'Sé tu propia motivación'

const App = () => (
  <>
    <BrowserRouter>
      <ThemeProvider theme={THEME}>
        <Introduction />
        <CTA_Section text={CTAtext1} />
        <BigPicture />
        <Phases />
        <Table />
        <Warranty />
        <Benefits />
        <Testimonies />
        <Faq />
        <CTA_Section text={CTAtext2} />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </>
)

const THEME = createTheme({
  typography: {
   "fontFamily": `"Nunito Sans", sans-serif`,
   "fontSize": "1.2rem",
   "lineHeight": 1.7,
  }
});
export default App
