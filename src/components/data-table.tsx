import axios from "axios";
import { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Skeleton } from "@mui/material";

interface Data {
  [key: string]: number | string;
}

type Order = "asc" | "desc";

export default function DataTableTaubate() {
  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    async function getGrades() {
      const response = await axios.post("http://localhost:3001/grade", {
        tablename: "tbgrade_atuacao_taubate",
      });

      const sample = response.data[0];
      const keys = Object.keys(sample);
      setColumns(keys);
      setRows(response.data);
      setLoading(true);
    }

    getGrades();
  }, []);

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const stableSort = (
    array: Data[],
    comparator: (a: Data, b: Data) => number,
  ) => {
    const stabilizedThis = array.map(
      (el, index) => [el, index] as [Data, number],
    );
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      return order;
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const descendingComparator = (a: Data, b: Data) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const sortedRows = stableSort(
    rows,
    order === "asc"
      ? descendingComparator
      : (a, b) => -descendingComparator(a, b),
  );

  const filteredRows = sortedRows.filter((row) =>
    Object.values(row).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (typeof value === "number" && !isNaN(value)) {
        // Convertemos o número para string e realizamos a busca
        return value
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      }
      return false;
    }),
  );

  return (
    <Box>
      <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h3" gutterBottom>
          Grade de Atuação de Taubaté
        </Typography>
        <TextField
          label="Busca"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          variant="outlined"
        />
      </Box>
      {loading ? (
        <TableContainer component={Paper} sx={{ maxHeight: 512 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column, columnIndex) => (
                  <TableCell key={columnIndex}>
                    <TableSortLabel
                      active={orderBy === column}
                      direction={orderBy === column ? order : "asc"}
                      onClick={() => handleRequestSort(column)}
                    >
                      {column}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column, columnIndex) => (
                    <TableCell key={columnIndex}>{row[column]}</TableCell>
                  ))}
                </TableRow>
              ))}
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
