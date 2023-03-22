import React from "react";
import { activeApplicationchartData } from "../../chart-data/total-active-application-stats";

// import Chart from "react-apexcharts";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// import { Box } from "@mui/system";

export default function OverviewMainChart() {
  return (
    <ResponsiveContainer width={"100%"} height={280}>
      <BarChart
        data={activeApplicationchartData}
        margin={{
          top: 25,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          aria-hidden={true}
          dataKey="name"
          color="#546D7A"
          fill="#546D7A"
        />
        <YAxis domain={[0, 3000]} tickCount={30} color="#546D7A" />
        <Tooltip cursor={{ fill: "transparent" }} />
        {/* <Legend /> */}
        <Bar
          dataKey="pv"
          stackId="a"
          fill="#1168EB"
          overflow={"auto"}
          radius={[4, 4, 0, 0]}
          barSize={30}
        />
        <Bar
          dataKey="uv"
          stackId="a"
          fill="#21ACFF"
          radius={[4, 4, 0, 0]}
          barSize={30}
        />
        <Bar
          dataKey="amt"
          stackId="a"
          fill="#BCE2FF"
          radius={[4, 4, 0, 0]}
          barSize={30}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
