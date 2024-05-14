import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Paper } from "@mui/material";

export default function BasicBars() {
  return (
    <Paper>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: ["analista 1", "analista 2", "analista 3", "analista 4"],
          },
        ]}
        series={[
          { data: [4, 3, 5] },
          { data: [1, 6, 3] },
          { data: [2, 5, 6] },
          { data: [3, 4, 7] },
        ]}
        height={300}
        colors={["#F18419", "#1942ac", "#FF0000"]}
        sx={{ bgcolor: "background.paper" }}
      />
    </Paper>
  );
}
