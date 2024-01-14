// Components
import TableBodyMui from '@mui/material/TableBody';
import { StyledTableCell, StyledTableRow } from './StyledTable';
// Data
import rows from './tableData';

const TableBody = () => (
    <TableBodyMui>
        {rows.map((row) => (
            <StyledTableRow key={row.name} >
                <StyledTableCell
                    component="th"
                    scope="row"
                    style={{ fontWeight: 500 }}
                >
                    {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                    {row.price}
                </StyledTableCell>
            </StyledTableRow>
        ))}
    </TableBodyMui>
)
export default TableBody