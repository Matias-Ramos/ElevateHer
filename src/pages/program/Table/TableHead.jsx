import TableHeadMui from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell } from './StyledTable';

const TableHead = () => (
    <TableHeadMui>
        <TableRow>
            <StyledTableCell>
                Servicio
            </StyledTableCell>
            <StyledTableCell align="right">
                Valores si mensualmente adquiereses cada servicio  por separado.
            </StyledTableCell>
        </TableRow>
    </TableHeadMui>
)
export default TableHead