// Components
export { default as CTA_Section } from "../components/CallToAction/CTA_Section.jsx";
export { default as Faq } from "../pages/faq/Faq.jsx";
export { default as Footer } from "../pages/footer/Footer.jsx";
export { default as Introduction } from "../pages/introduction/Introduction.jsx";
export { default as BigPicture } from '../pages/program/bigPicture/BigPicture.jsx';
export { default as Phases } from "../pages/program/phases/Phases.jsx";
export { default as Table } from '../pages/program/table/Table.jsx';
export { default as PaymentMethods } from "../pages/paymentMethods/PaymentMethods.jsx";
export { default as Warranty } from "../pages/program/warranty/Warranty.jsx";
export { default as Benefits } from "../pages/benefits/Benefits.jsx";
export { default as Testimonies } from "../pages/testimonies/Testimonies.jsx";
export { default as WhoIsAna } from "../pages/whoIsAna/WhoIsAna.jsx";
export { default as Signature } from "../pages/signature/Signature.jsx";

// Mui styling
export {  ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
export const fontStyles = createTheme({
  typography: {
    "fontFamily": `"Quicksand", sans-serif`,
    "fontSize": 17,
    "lineHeight": 1.7,
  }
});

// Navigation
export { BrowserRouter } from 'react-router-dom';

// Text values
export { stripeFullPayment } from "../utils/Links.js";

// Additional text values
export const CTAtext1 = 'Tu mejor versión te espera';
export const CTAtext2 = 'Sé tu propia motivación';
