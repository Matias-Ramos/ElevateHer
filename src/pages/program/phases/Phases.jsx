// Mui
import Box from '@mui/material/Box';
// Components
import Tabs from './Tabs';
import DetailMapper from './DetailMapper';
// Hooks
import { useState } from 'react';
import Picture from './Picture';
// Styling
const containerStyling = "d-flex flex-column flex-lg-row phasesContainer"
const boxStyling = { width: '100%', height: '100%' }

const Phases = () => {
  const [activePhase, setActivePhase] = useState(0);
  const handleChg = (_evt, newValue) => {
    setActivePhase(newValue);
  };

  return (
    <section>
      <div className={containerStyling}>
        <Box sx={boxStyling}>
          <Tabs activePhase={activePhase} handleChg={handleChg} />
          <DetailMapper activePhase={activePhase} />
        </Box>
        <Picture />
      </div>
      
    </section>
  );
}

export default Phases;