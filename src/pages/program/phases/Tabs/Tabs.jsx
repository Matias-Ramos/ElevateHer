// Mui
import Box from '@mui/material/Box';
import MuiTabs from '@mui/material/Tabs';
import { Tab, accessibilityProps } from './Tab';

const Tabs = ({ activePhase, handleChg }) => (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <MuiTabs
            indicatorColor="secondary"
            value={activePhase}
            onChange={handleChg}
            aria-label="Fases del programa"
            allowScrollButtonsMobile
            variant="scrollable"
        >
            <Tab label="Fase 1" {...accessibilityProps(0)} />
            <Tab label="Fase 2" {...accessibilityProps(1)} />
            <Tab label="Fase 3" {...accessibilityProps(2)} />
            <Tab label="Fase 4" {...accessibilityProps(3)} />
        </MuiTabs>
    </Box>
)

export default Tabs