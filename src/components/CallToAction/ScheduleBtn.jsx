import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#B100C8"),
  backgroundColor: "#B100C8",
  '&:hover': {
    backgroundColor: "#A400C8",
  },
  width: "100%",
  height: "auto",
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
        Agendar<br className='d-sm-none'/> cita
      </ColorButton>
  );
}