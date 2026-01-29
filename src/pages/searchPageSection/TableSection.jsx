import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export default function TableSection({
  companyName,
  stateName,
  program,
  rows = [],
}) {
  // When no data is available
  if (!rows.length) {
    return (
      <Paper sx={{ p: 3, textAlign: "center" }}>
        <Typography color="text.secondary">
          No data available. Please apply filters to view results.
        </Typography>
      </Paper>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 1100, width: "100%", border: "1px solid #ddd" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }} align="right">
              Company Name
            </TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="right">
              State Name
            </TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="right">
              Program
            </TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Quarter</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="right">
              Current Q Sales
            </TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="right">
              Current Q Rebate
            </TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="right">
              RAR %
            </TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="right">
              Prior Q Rebate
            </TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="right">
              Total Rebate
            </TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="right">
              Company Accrual
            </TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="right">
              Over / Under Accrual
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            console.log(row);
            const totalRebate =
              row.currentQuarterRebate + row.priorQuarterRebate;

            return (
              <TableRow
                key={row?.quarter}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{companyName}</TableCell>
                <TableCell align="right">{stateName}</TableCell>
                <TableCell align="right">{program}</TableCell>
                <TableCell align="right">{row?.quarter}</TableCell>
                <TableCell align="right">{row?.currentQuarterSales}</TableCell>
                <TableCell align="right">{row?.currentQuarterRebate}</TableCell>
                <TableCell align="right">{row?.currentQuarterRAR}</TableCell>
                <TableCell align="right">{row?.priorQuarterRebate}</TableCell>
                <TableCell align="right">{row?.companyAccrual}</TableCell>
                <TableCell align="right">{totalRebate}</TableCell>
                <TableCell align="right">{row?.overUnderAccrual}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
