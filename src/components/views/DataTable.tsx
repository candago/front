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
} from "@mui/material";
import { Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TableVirtuoso, TableComponents } from "react-virtuoso";
import React from "react";

interface Data {
  [key: string]: number | string;
}

type Order = "asc" | "desc";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  "&.MuiTableCell-head": {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  "&.MuiTableCell-body": {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer
      component={Paper}
      {...props}
      ref={ref}
      sx={{ borderRadius: 8 }}
    />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead component="thead" {...props} ref={ref} />
  )),
  TableRow: (props) => <StyledTableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

export default function CombinedTable() {
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
        return value
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      }
      return false;
    }),
  );

  function fixedHeaderContent() {
    return (
      <TableRow>
        {columns.map((column) => (
          <StyledTableCell
            key={column}
            variant="head"
            align="left"
            style={{ width: 120 }}
          >
            <TableSortLabel
              active={orderBy === column}
              direction={orderBy === column ? order : "asc"}
              onClick={() => handleRequestSort(column)}
            >
              {column}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    );
  }

  function rowContent(_index: number, row: Data) {
    return (
      <React.Fragment>
        {columns.map((column) => (
          <TableCell key={column} align="left">
            {row[column]}
          </TableCell>
        ))}
      </React.Fragment>
    );
  }

  return (
    <Box>
      <Box
        sx={{
          mb: 2,
          ml: 14.5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          label="Busca"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {loading ? (
          <Paper
            style={{ height: 300, width: "100%" }}
            sx={{ borderRadius: 8 }}
          >
            <TableVirtuoso
              data={filteredRows}
              components={VirtuosoTableComponents}
              fixedHeaderContent={fixedHeaderContent}
              itemContent={rowContent}
            />
          </Paper>
        ) : (
          <Skeleton
            variant="rounded"
            animation="pulse"
            width="100%"
            height={300}
          />
        )}
      </Box>
    </Box>
  );
}
