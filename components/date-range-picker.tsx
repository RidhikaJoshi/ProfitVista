"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DateRangePicker() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 0, 1),
    to: new Date(),
  })
  const [preset, setPreset] = React.useState<string>("custom")

  const handlePresetChange = (value: string) => {
    setPreset(value)

    const today = new Date()

    switch (value) {
      case "today":
        setDate({ from: today, to: today })
        break
      case "yesterday": {
        const yesterday = new Date(today)
        yesterday.setDate(yesterday.getDate() - 1)
        setDate({ from: yesterday, to: yesterday })
        break
      }
      case "7days": {
        const sevenDaysAgo = new Date(today)
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
        setDate({ from: sevenDaysAgo, to: today })
        break
      }
      case "30days": {
        const thirtyDaysAgo = new Date(today)
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
        setDate({ from: thirtyDaysAgo, to: today })
        break
      }
      case "thismonth": {
        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
        setDate({ from: firstDayOfMonth, to: today })
        break
      }
      case "lastmonth": {
        const firstDayOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1)
        const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
        setDate({ from: firstDayOfLastMonth, to: lastDayOfLastMonth })
        break
      }
      case "custom":
        // Keep the current date range
        break
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[240px] justify-start border-gray-800 bg-transparent text-left font-normal text-white",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-[#00e6e6]" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 border-gray-800 bg-gray-900" align="start">
          <div className="flex flex-col sm:flex-row gap-2 p-3 border-b border-gray-800">
            <Select value={preset} onValueChange={handlePresetChange}>
              <SelectTrigger className="w-full sm:w-[150px] border-gray-800 bg-gray-800">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="border-gray-800 bg-gray-900">
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="thismonth">This month</SelectItem>
                <SelectItem value="lastmonth">Last month</SelectItem>
                <SelectItem value="custom">Custom range</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="w-full border-gray-800 bg-gray-800"
                onClick={() => setDate(undefined)}
              >
                Reset
              </Button>
              <Button className="w-full bg-[#00e6e6] text-black hover:bg-[#00b3b3]">Apply</Button>
            </div>
          </div>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            className="p-3"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

