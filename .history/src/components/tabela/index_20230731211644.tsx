import { Paper } from "@mui/material";
import TableContainer from "@mui/material/TableContainer/TableContainer";
import Table from "@mui/material/Table/Table";
imp

export default function Tabela() {
    return(
        <>
            <TableContainer component = {Paper}>
                <Table sx={{minWidth: 700}} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </>
    )
}