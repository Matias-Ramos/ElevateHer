import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
  width: "100%",
  height: "3rem"
}));

export default function ScheduleBtn() {
  const handleClick = () => {
    window.open('https://eathink.org/calendar', '_blank');
  };
  return (
      <ColorButton
        variant="contained"
        onClick={handleClick}
      >
        Agendar cita
      </ColorButton>
  );
}