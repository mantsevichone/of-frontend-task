import { Pie, PieChart, Label, Legend } from "recharts";

import { type VirtualMachine } from "../../types";
import { Card, CardTitle } from "../sharedStyles";
import { LegendLabel } from "./styles";

interface PieData {
  name: "Stopped" | "Running";
  fill: string;
  amount: number;
  [key: string]: string | number;
}

interface Props {
  vmList: VirtualMachine[];
}

export function StateChart({ vmList }: Props) {
  const initPieCharData: PieData[] = [
    {
      name: "Stopped",
      fill: "#DC3545",
      amount: 0,
    },
    {
      name: "Running",
      fill: "#459E74",
      amount: 0,
    },
  ];

  const pieChartData: PieData[] = vmList.reduce((acc, vm) => {
    acc[vm.state ? 1 : 0].amount += 1;

    return acc;
  }, initPieCharData);

  return (
    <Card style={{ width: 440, paddingBottom: 44 }}>
      <CardTitle style={{ marginBottom: 24 }}>State</CardTitle>
      <PieChart width={392} height={178}>
        <Pie
          data={pieChartData}
          innerRadius={65}
          outerRadius={89}
          paddingAngle={2}
          startAngle={90}
          endAngle={450}
          dataKey="amount"
          cx={89}
        >
          <Label
            dx={-44.5}
            dy={-10}
            fill="#212529"
            fontSize={40}
            fontWeight={700}
            position="center"
          >
            {vmList.length}
          </Label>
          <Label
            dx={-44.5}
            dy={20}
            fontSize={12}
            fontWeight={400}
            position="center"
          >
            Total number
          </Label>
          <Legend
            align="right"
            layout="vertical"
            verticalAlign="middle"
            iconType="circle"
            iconSize={10}
            itemSorter="dataKey"
            formatter={(value, entry) => {
              const pie = entry.payload as PieData;

              return (
                <LegendLabel>
                  <strong>{pie.amount}</strong>
                  {value}
                </LegendLabel>
              );
            }}
            wrapperStyle={{
              right: 64,
            }}
          />
        </Pie>
      </PieChart>
    </Card>
  );
}
