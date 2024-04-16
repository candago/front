import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function App() {
  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getGrades() {
      const response = await axios.post("http://localhost:3001/grade", {
        tablename: "tbgrade_atuacao_taubate",
      });
      const sliced = response.data.slice(0, 25);
      const sample = sliced[0];
      const keys = Object.keys(sample);

      setColumns(keys);
      setRows(sliced);
    }

    getGrades();
  }, []);

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Grade
      </Typography>

      <TableContainer
        variant="outlined"
        component={Paper}
        sx={{ maxHeight: 512 }}
      >
        <Table>
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
    </Container>
  );
}
