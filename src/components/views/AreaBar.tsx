import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBars() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: ["analista 1", "analista 2", "analista 3"],
        },
      ]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      height={300}
      colors={["#F18419", "#1942ac", "#FF0000"]}
      sx={{ bgcolor: "background.paper", borderRadius: 8 }}
    />
  );
}
