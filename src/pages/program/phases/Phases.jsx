// Mui
import Box from '@mui/material/Box';
// Components
import Tabs from './Tabs/Tabs';
import PanelMapper from './Panel/PanelMapper';
// Hooks
import { useState } from 'react';
import Picture from './Picture';
// Styling
const containerStyling = "d-flex flex-column flex-lg-row phasesContainer"
const boxStyling = { width: '100%', height: '100%', paddingTop: "8rem"}
const sectionStyling = { position: "relative", backgroundColor: "#6B5278"}
const logoCtStyling = { position: "absolute", display: "flex", justifyContent: "center"}


import Logo from '../../../components/Logo';

const Phases = () => {
  const [activePhase, setActivePhase] = useState(0);
  const handleChg = (_evt, newValue) => {
    setActivePhase(newValue);
  };
  
  return (
    <section id="phasesSection" style={sectionStyling}>
      <div className={containerStyling}>
        <Box sx={boxStyling} id="tabsContainer">
          <Tabs activePhase={activePhase} handleChg={handleChg} />
          <PanelMapper activePhase={activePhase} />
        </Box>
        <Picture />
      </div>
      <div id="logoContainer" style={logoCtStyling}>
        <Logo />
      </div>
    </section>
  );
}


export default Phases;