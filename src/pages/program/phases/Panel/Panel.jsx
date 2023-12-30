// Mui
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// Typechecking
import PropTypes from 'prop-types';

const Panel = ({ children, activePhase, index, ...other }) => (
    <div
        role="tabpanel"
        hidden={activePhase !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
    >
        {activePhase === index && (
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
        )}
    </div>
);

Panel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    activePhase: PropTypes.number.isRequired,
};

export default Panel;