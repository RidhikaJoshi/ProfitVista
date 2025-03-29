"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Visitors", value: 5000 },
  { name: "Product Views", value: 3500 },
  { name: "Add to Cart", value: 2200 },
  { name: "Checkout", value: 1500 },
  { name: "Purchase", value: 1000 },
]

const config = {
  Visitors: { color: "#00e6e6" },
  "Product Views": { color: "#00b3b3" },
  "Add to Cart": { color: "#008080" },
  Checkout: { color: "#006666" },
  Purchase: { color: "#004d4d" },
}

export function ConversionChart() {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer
        title="Customer Conversion"
        description="Conversion funnel analysis"
        data={data}
        config={config}
        className="h-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={true} vertical={false} />
            <XAxis type="number" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              dataKey="name"
              type="category"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              width={100}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const value = payload[0].value
                  return (
                    <div className="bg-gray-800 p-2 shadow-md rounded">
                      <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-400">{payload[0].payload?.name || ""}</p>
                        <p className="text-lg font-bold">
                          {typeof value === "number" ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0"}
                        </p>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Bar dataKey="value" fill="#00e6e6" radius={[0, 4, 4, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

