import { BarChart } from "@mui/x-charts/BarChart";
import { Box, LinearProgress, Paper, Typography } from "@mui/material";

const mock = {
  analysts: [
    {
      name: "Analista 1",
      completed_area: 14.05 /* valor em m2 de quanta área foi feita pelo caba */,
      assigned_area: 96.05 /* valor em m2 de quanta área esse cara tem que fazer */,
    },
    {
      name: "Analista 2",
      completed_area: 5.64 /* valor em m2 de quanta área foi feita pelo caba */,
      assigned_area: 12.3 /* valor em m2 de quanta área esse cara tem que fazer */,
    },
  ],
};
const normalize = (value, min, max) => {
  return ((value - min) * 100) / (max - min);
};
function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number },
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
export default function AnalistInfo() {
  return mock.analysts.map((analisty) => (
    <Paper
      elevation={1}
      sx={{
        padding: 2,
        backgroundColor: "rgba(255, 233, 241, 0.001)",
        borderRadius: 8,
        border: 3,
        borderColor: "rgba(255, 233, 241, 0.15)",
      }}
    >
      <div>
        <h2>{analisty.name}</h2>
        <div>
          <LinearProgressWithLabel
            value={normalize(
              analisty.completed_area,
              0,
              analisty.assigned_area,
            )}
            variant="determinate"
          ></LinearProgressWithLabel>
          <Box sx={{ display: "flex", justifyContent: "right" }}>
            <span>Progresso Atual</span>
            <span>
              : {analisty.completed_area}km² de {analisty.assigned_area}km²
            </span>
          </Box>
        </div>
      </div>
    </Paper>
  ));
}
