import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import areaChartData from "./data.json";
import { Card, CardTitle } from "../sharedStyles";
import { FlexContainer, TimeCTA } from "./styles";

export function TrendChart() {
  return (
    <Card style={{ paddingBottom: 16 }}>
      <FlexContainer>
        <CardTitle style={{ marginBottom: 8 }}>Trend</CardTitle>
        <TimeCTA onClick={() => alert('Work in Progress ♻️')}>
          Last 14 days
          <ExpandMoreIcon sx={{ color: '#212529', fontSize: 16 }} />
        </TimeCTA>
      </FlexContainer>
      <AreaChart
        width={700}
        height={220}
        data={areaChartData as object[]}
        margin={{
          top: 10,
          right: 16,
          left: -15,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="15%" stopColor="#5F3196" stopOpacity={0} />
            <stop offset="100%" stopColor="#5F3196" stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#CED4DA" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
          interval={1}
        />
        <YAxis
          width={70}
          domain={[0, 2000]}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `${value} TB`}
          tick={{ fontSize: 12 }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#5F3196"
          fillOpacity={1}
          fill="url(#gradient)"
        />
      </AreaChart>
    </Card>
  );
}
