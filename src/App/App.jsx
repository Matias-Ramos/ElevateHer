import {
  CTA_Section, Faq, Footer, Introduction, BigPicture, Phases, Table, PaymentMethods, Warranty, Benefits, Testimonies, WhoIsAna, Signature, ThemeProvider, fontStyles, BrowserRouter, stripeFullPayment, CTAtext1, CTAtext2
} from './imports';


const App = () => (
  <>
    <BrowserRouter>
      <ThemeProvider theme={fontStyles}>
        <main>
          <div id="firstBackground">
            <Introduction />
            <CTA_Section
              stripeLink={stripeFullPayment}
              text={CTAtext1} 
            />
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
          <WhoIsAna />
          <Faq />
          <div id="lastCat">
            <CTA_Section
              stripeLink={stripeFullPayment}
              text={CTAtext2}
            />
          </div>
        </main>
        <Footer />
        <Signature />
      </ThemeProvider>
    </BrowserRouter>
  </>
)


export default App;
