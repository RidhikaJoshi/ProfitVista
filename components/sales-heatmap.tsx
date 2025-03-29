"use client"
import { ChartContainer } from "@/components/ui/chart"

// Generate dummy data for the heatmap
const generateHeatmapData = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const hours = Array.from({ length: 24 }, (_, i) => i)

  const data = days.map((day) => {
    return {
      day,
      hours: hours.map((hour) => {
        // Generate random value between 0 and 100
        // Make weekdays during business hours have higher values
        let value = Math.floor(Math.random() * 100)

        if (day !== "Saturday" && day !== "Sunday" && hour >= 9 && hour <= 17) {
          value = Math.floor(Math.random() * 50) + 50
        }

        return {
          hour,
          value,
        }
      }),
    }
  })

  return data
}

const heatmapData = generateHeatmapData()

const transformedData = heatmapData.flatMap((day) =>
  day.hours.map((hourData) => ({
    name: `${day.day} ${hourData.hour}:00`,
    value: hourData.value,
  }))
)

const config = {
  low: { color: "#004d4d" },
  medium: { color: "#006666" },
  high: { color: "#00e6e6" },
}

export function SalesHeatmap() {
  const getColor = (value: number) => {
    // Color scale from dark to bright turquoise based on value
    if (value < 20) return "bg-gray-800"
    if (value < 40) return "bg-[#004d4d]"
    if (value < 60) return "bg-[#006666]"
    if (value < 80) return "bg-[#008080]"
    return "bg-[#00e6e6]"
  }

  const formatHour = (hour: number) => {
    if (hour === 0) return "12 AM"
    if (hour === 12) return "12 PM"
    return hour < 12 ? `${hour} AM` : `${hour - 12} PM`
  }

  return (
    <div className="h-[300px] w-full overflow-auto">
      <ChartContainer
        title="Sales Heatmap"
        description="Peak sales hours by day"
        data={transformedData}
        config={config}
        className="h-full min-w-[800px]"
      >
        <div>
        <div className="flex">
          <div className="w-24 pt-6">
            {/* Day labels */}
            <div className="flex flex-col h-full justify-between">
              {heatmapData.map((day, i) => (
                <div key={i} className="h-8 flex items-center text-sm text-gray-400">
                  {day.day}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between px-2">
              {/* Hour labels - show every 3 hours for clarity */}
              {Array.from({ length: 9 }, (_, i) => i * 3).map((hour) => (
                <div key={hour} className="text-xs text-gray-400 w-8 text-center">
                  {formatHour(hour)}
                </div>
              ))}
            </div>
            <div className="mt-2">
              {heatmapData.map((day, dayIndex) => (
                <div key={dayIndex} className="flex h-8 mb-1">
                  {day.hours.map((hourData, hourIndex) => (
                    <div
                      key={hourIndex}
                      className={`w-[3.3%] h-full mx-[0.07%] rounded-sm ${getColor(hourData.value)}`}
                      title={`${day.day}, ${formatHour(hourData.hour)}: ${hourData.value} sales`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4 gap-2">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
            <span className="text-xs text-gray-400">Low</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-[#006666] rounded-sm"></div>
            <span className="text-xs text-gray-400">Medium</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-[#00e6e6] rounded-sm"></div>
            <span className="text-xs text-gray-400">High</span>
          </div>
        </div>
        </div>
      </ChartContainer>
    </div>
  )
}

