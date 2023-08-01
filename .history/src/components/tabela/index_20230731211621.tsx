import { Paper } from "@mui/material";
import TableContainer from "@mui/material/TableContainer/TableContainer";

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