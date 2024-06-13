import { BarChart } from "@mui/x-charts/BarChart";
import { LinearProgress } from "@mui/material";

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
export default function AnalistInfo() {
  return mock.analysts.map((analisty) => (
    <div>
      <h1>{analisty.name}</h1>
      <div>
        <LinearProgress
          value={normalize(analisty.completed_area, 0, analisty.assigned_area)}
          variant="determinate"
        ></LinearProgress>
        <span>
          {analisty.completed_area}/{analisty.assigned_area}
        </span>
      </div>
    </div>
  ));
}
