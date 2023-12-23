// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableMui from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header2 from './Header2';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, price) {
    return { name, price };
}

const rows = [
    createData('Apoyo 24/7', "-"),
    createData('Llamada Semanal por Zoom conmigo 30 min', "$ 60"),
    createData('Ebook con 40 recetas low carb', "$ 49"),
    createData('Ebook con 40 recetas altas en Proteína', "$ 49"),
    createData('Recetario y manual de porciones', "$ 10"),
    createData('Plan de entrenamiento personalizado', "$ 299"),
    createData('Plan de alimentación personalizado', "$ 110"),
    createData('Lista de compras en el supermercado', "$ 10"),
    createData('Acceso a la App Trainerize', "$ 50"),
    createData('Masterclass Semanal MENTE Y CUERPO', "$ 99"),
    createData('Acceso a la comunidad y Chequeo por grupo de Whatsapp', "-"),
];

export default function Table() {
    return (
        <section>
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col md={9} lg={8} xl={7} xxl={6}>
                        <Header2 />
                        <TableContainer component={Paper}>
                            <TableMui sx={{ width: "100%" }} aria-label="Tabla de precios por separado">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Servicio</StyledTableCell>
                                        <StyledTableCell align="right">Valores si adquieres cada servicio por separado</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.price}</StyledTableCell>
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
