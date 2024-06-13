import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Stack, Typography } from "@mui/material";

const mock = {
  cities: [
    { name: "Taubate", total_area: 1000, completed_area: 500 },
    { name: "Atibaia", total_area: 800, completed_area: 300 },
  ],
};

const pieParams = { height: 200 };

export default function BasicPie() {
  return mock.cities.map((city) => (
    <Stack direction="row" textAlign="center" spacing={3}>
      <Box flexGrow={1}>
        <Typography variant="h6">{city.name}</Typography>
        <PieChart
          series={[
            {
              data: [
                {
                  id: "total_area",
                  value: city.total_area,
                  label: "Área Total",
                },
                {
                  id: "completed_area",
                  value: city.completed_area,
                  label: "Área Concluída",
                },
              ],
            },
          ]}
          {...pieParams}
        />
      </Box>
    </Stack>
  ));
}
