"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", revenue: 18000 },
  { month: "Feb", revenue: 22000 },
  { month: "Mar", revenue: 32000 },
  { month: "Apr", revenue: 28000 },
  { month: "May", revenue: 35000 },
  { month: "Jun", revenue: 42000 },
  { month: "Jul", revenue: 38000 },
  { month: "Aug", revenue: 45000 },
  { month: "Sep", revenue: 52000 },
  { month: "Oct", revenue: 48000 },
  { month: "Nov", revenue: 56000 },
  { month: "Dec", revenue: 65000 },
]

const transformedData = data.map((item) => ({
  name: item.month,
  value: item.revenue,
}))

const config = {
  Jan: { color: "#00e6e6" },
  Feb: { color: "#00b3b3" },
  Mar: { color: "#008080" },
  Apr: { color: "#006666" },
  May: { color: "#004d4d" },
  Jun: { color: "#003333" },
  Jul: { color: "#002222" },
  Aug: { color: "#001111" },
  Sep: { color: "#000000" },
  Oct: { color: "#444444" },
  Nov: { color: "#888888" },
  Dec: { color: "#cccccc" },
}

export function SalesChart() {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer 
      title="Revenue Trends" 
      description="Monthly revenue over time" 
      data={transformedData} 
      config={config}
      className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const value = payload[0].value
                  return (
                    <div className="bg-gray-800 p-2 shadow-md rounded">
                      <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-400">{payload[0].payload.month}</p>
                        <p className="text-lg font-bold">
                          $
                          {typeof value === "number" ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0"}
                        </p>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#00e6e6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: "#00e6e6", stroke: "#000" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

