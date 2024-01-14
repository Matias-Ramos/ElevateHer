// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Components
import Paper from '@mui/material/Paper';
import TableMui from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Header from './Header';
import { StyledTableCell, StyledTableRow } from './StyledTable';
// Data
import rows from './tableData';
// Styling
const tableShadow = {
    boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
}
// Grid sys.
const breakpoints = { md: 9, lg: 8, xl: 7, xxl: 7 }
const Table = () => {
    return (
        <section id="table" >
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col {...breakpoints}>
                        <Header />
                        <TableContainer 
                            component={Paper}
                            style={tableShadow}
                        >
                            <TableMui
                                sx={{ width: "100%" }}
                                aria-label="Tabla de precios por separado"
                            >
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>
                                            Servicio
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            Valores si mensualmente adquiereses cada servicio  por separado. 
                                        </StyledTableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
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
                                </TableBody>
                            </TableMui>
                        </TableContainer>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Table;