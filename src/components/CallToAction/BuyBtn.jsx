import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#B100C8"),
    backgroundColor: "#B100C8",
    '&:hover': {
      backgroundColor: "#A400C8",
    },
    width: "100%",
    height: "3rem"
  }));
  

export default function BuyBtn({stripeLink}) {
    const handleClick = () => {
        window.open(stripeLink, '_blank');
    };
    return (
        <ColorButton
            variant="contained"
            onClick={handleClick}
        >
            Adquirir programa
        </ColorButton>
    );
}