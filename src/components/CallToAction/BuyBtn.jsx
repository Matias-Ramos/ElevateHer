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
  

export default function BuyBtn() {
    const payingLink = "https://checkout.stripe.com/c/pay/cs_live_a1UC6pI6tZ2XWIyy1lvGO99JK8vaWD0yQhXr3tLquIjxPh5XOhVDPAWlhT#fidkdWxOYHwnPyd1blppbHNgWjA0SHcwMUpAfExOPEsyc2AxTXNNNGZud3x8dEBVZndRMDRpVU89X2F%2FZ05HXDxzR3ddQnRsbmpgU0AxRGNIbzZ0Tz1UVXRfSDVAbU1yaFVUbUBuYH1UbkNxNTV9dV1JZDRRdicpJ3VpbGtuQH11anZgYUxhJz8nZ0xcYVdiZG80NWZxPGlWZkhQJyknd2BjYHd3YHdKd2xibGsnPydtcXF1PyoqbGt2cWRid2RoK2ZqaConeCUl"
    const handleClick = () => {
        window.open(payingLink, '_blank');
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