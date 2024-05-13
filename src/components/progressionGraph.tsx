import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function GridDemo() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          curve: "linear",
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          color: "#F18419",
        },
        { curve: "linear", data: [10, 8, 6, 4, 2, 0], color: "#1942ac" },
      ]}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
      sx={{ bgcolor: "background.paper" }}
    />
  );
}
