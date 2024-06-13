import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function GridDemo() {
  return (
    <LineChart
      xAxis={[{ data: [0, 2, 4, 6, 8, 10] }]}
      series={[
        {
          curve: "monotoneX",
          data: [10, 9, 5.5, 5, 1.5, 0],
          color: "#F18419",
        },
        { curve: "linear", data: [10, 8, 6, 4, 2, 0], color: "#1942ac" },
      ]}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
      sx={{ bgcolor: "background.paper", borderRadius: 8 }}
    />
  );
}
