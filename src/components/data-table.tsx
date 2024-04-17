import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { Box, Skeleton } from "@mui/material";

export default function DataTableTaubate() {
  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getGrades() {
      const response = await axios.post("http://localhost:3001/grade", {
        tablename: "tbgrade_atuacao_taubate",
      });
      const sliced = response.data;
      const sample = sliced[0];
      const keys = Object.keys(sample);
      setColumns(keys);
      setRows(sliced);
      setLoading(true);
    }

    getGrades();
  }, []);
  return (
    <Box>
      {loading ? (
        <TableContainer component={Paper} sx={{ maxHeight: 512 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column, columnIndex) => (
                  <TableCell key={columnIndex}>{column}</TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row, rowIndex) => {
                return (
                  <TableRow key={rowIndex}>
                    {columns.map((column, columnIndex) => {
                      const value = row[column];

                      return <TableCell key={columnIndex}>{value}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Skeleton
          variant="rounded"
          animation="pulse"
          width="100%"
          height={512}
        />
      )}
    </Box>
  );
}
