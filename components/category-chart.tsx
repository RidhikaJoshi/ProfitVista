"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

const data = [
  { name: "Electronics", value: 35 },
  { name: "Clothing", value: 25 },
  { name: " Kitchen", value: 20 },
  { name: "Sports", value: 15 },
  { name: "Books", value: 5 },
]

const COLORS = ["#00e6e6", "#00b3b3", "#008080", "#006666", "#004d4d"]

const config = {
  Electronics: { color: "#00e6e6" },
  Clothing: { color: "#00b3b3" },
  "Home & Kitchen": { color: "#008080" },
  Sports: { color: "#006666" },
  Books: { color: "#004d4d" },
}

export function CategoryChart() {
  return (
    <div className=" h-[300px] w-full flex items-center justify-center">
      <ChartContainer
        title="Sales by Category"
        description="Distribution across product categories"
        data={data}
        config={config} // Pass the config here
        className="h-full"
      >
        <ResponsiveContainer className={"h-full w-full "}>
            <PieChart className="flex items-center justify-center">
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius="70%"
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                <div className="bg-gray-800 p-2 rounded shadow-md">
                  <div className="flex flex-col items-center gap-1">
                  <p className="text-sm text-gray-400">{payload[0].name || ""}</p>
                  <p className="text-lg font-bold">{payload[0].value || 0}%</p>
                  </div>
                </div>
                )
              }
              return null
              }}
            />
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              iconType="circle"
              iconSize={10}
              formatter={(value) => <span className="text-sm text-white">{value}</span>}
            />
            </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

