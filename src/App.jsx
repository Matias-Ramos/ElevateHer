import Introduction from "./pages/introduction/Introduction"
import Table from "./pages/program/table/Table"
import BigPicture from "./pages/program/bigPicture/BigPicture"
import Phases from "./pages/program/phases/Phases"
import Warranty from "./pages/program/warranty/Warranty"
import Target from "./pages/target/Target"
import Testimonies from "./pages/testimonies/Testimonies"
import CTA_Container from "./components/CallToAction/CTA_Container"

const App = () => {

  return (
    <>
      <Introduction />
      <BigPicture />
      <Phases />
      <Table />
      <Warranty />
      <Target />
      <Testimonies />
    </>
  )
}

export default App
