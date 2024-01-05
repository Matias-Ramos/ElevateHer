import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#43334b",
        color: "white",
    },
}));

const StyledTableRow = styled(TableRow)(() => ({
    
    '&:nth-of-type(odd)': {
        backgroundColor: "#C0B0E5",
    },
    '&:nth-of-type(even)': {
        backgroundColor: "#D5C6E5",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export { StyledTableCell, StyledTableRow };
