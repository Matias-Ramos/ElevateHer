import TabMui from '@mui/material/Tab';
import { styled } from '@mui/system';

const Tab = styled(TabMui)(() => ({
    color: '#adb5bd',
    '&.Mui-selected': {
        color: '#fafafa',
    },
}));
const accessibilityProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export {Tab, accessibilityProps};
