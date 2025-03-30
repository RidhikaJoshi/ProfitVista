"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Download,
  Filter,
  Share2,
  ShoppingCart,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SalesChart } from "@/components/sales-chart"
import { CategoryChart } from "@/components/category-chart"
import { SalesTable } from "@/components/sales-table"
import { ConversionChart } from "@/components/conversion-chart"
import { SalesHeatmap } from "@/components/sales-heatmap"

export default function DashboardPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-400">Track your sales performance and analytics</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px] border-gray-800 bg-transparent">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent className="border-gray-800 bg-gray-900">
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="furniture">Furniture</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px] border-gray-800 bg-transparent">
              <SelectValue placeholder="Filter by region" />
            </SelectTrigger>
            <SelectContent className="border-gray-800 bg-gray-900">
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="north">North America</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      >
        {[
          {
            title: "Total Revenue",
            value: "$124,563.00",
            change: "+12.5%",
            icon: <ArrowUp className="h-4 w-4" />,
            positive: true,
          },
          {
            title: "Total Sales",
            value: "1,243",
            change: "+8.2%",
            icon: <ArrowUp className="h-4 w-4" />,
            positive: true,
          },
          {
            title: "Monthly Growth",
            value: "18.4%",
            change: "+4.1%",
            icon: <ArrowUp className="h-4 w-4" />,
            positive: true,
          },
          {
            title: "Conversion Rate",
            value: "3.6%",
            change: "-0.8%",
            icon: <ArrowDown className="h-4 w-4" />,
            positive: false,
          },
          
          {
            title: "Avg. Order Value",
            value: "$96.20",
            change: "+3.1%",
            icon: <ArrowUp className="h-4 w-4" />,
            positive: true,
          },
          {
            title: "Acquiring clients",
            value: "$34.72",
            change: "-2.4%",
            icon: <ArrowDown className="h-4 w-4" />,
            positive: false,
          }
        ].map((card, index) => (
          <motion.div key={index} variants={itemVariants}>
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 230, 230, 0.2)" }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border-gray-800 bg-gray-900/50">
                <CardHeader className="pb-2">
                  <CardDescription className="text-gray-400 text-sm">{card.title}</CardDescription>
                  <CardTitle className="text-2xl font-bold">{card.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`flex items-center gap-1 ${card.positive ? "text-[#00e6e6]" : "text-red-500"}`}>
                    {card.icon}
                    <span className="text-sm font-medium">{card.change}</span>
                    <span className="text-xs text-gray-400">vs last month</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}

      <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.div variants={itemVariants}>
              <Card className="border-gray-800 bg-gray-900/50">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle>Revenue Trends</CardTitle>
                    <CardDescription className="text-gray-400">Monthly revenue over time</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-gray-800">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <SalesChart />
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="border-gray-800 bg-gray-900/50">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle>Sales by Category</CardTitle>
                    <CardDescription className="text-gray-400">Distribution across product categories</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-gray-800">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CategoryChart />
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.div variants={itemVariants}>
              <Card className="border-gray-800 bg-gray-900/50">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle>Customer Conversion</CardTitle>
                    <CardDescription className="text-gray-400">Conversion funnel analysis</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-gray-800">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ConversionChart />
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="border-gray-800 bg-gray-900/50">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle>Sales Heatmap</CardTitle>
                    <CardDescription className="text-gray-400">Peak sales hours by day</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-gray-800">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <SalesHeatmap />
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >

          </motion.div>
      

      {/* Revenue & Insights */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* <motion.div variants={itemVariants}>
          <motion.div whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 230, 230, 0.2)" }}> */}
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Best Selling Products</CardTitle>
                <CardDescription className="text-gray-400">Top performers by revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 h-full ">
                  {[1, 2, 3,4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-4 hover:bg-gray-800/50 rounded-lg p-3"
                    >
                      <div className="h-16 w-16 rounded-md bg-gray-800 flex items-center justify-center">
                        <ShoppingCart className="h-8 w-8 text-[#00e6e6]" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium">Premium Wireless Headphones</p>
                        <div className="flex items-center text-sm text-gray-400">
                          <span>$149.99</span>
                          <span className="mx-2">•</span>
                          <span>342 sold</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-[#00e6e6]">
                        <ArrowUpRight className="h-4 w-4" />
                        <span>24%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          {/* </motion.div>
        </motion.div> */}

        {/* <motion.div variants={itemVariants}>
          <motion.div whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 230, 230, 0.2)" }}> */}
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Top Sales Representatives</CardTitle>
                <CardDescription className="text-gray-400">Highest performing team members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 ">
                  {[1, 2, 3,4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      //className="flex items-center gap-4"
                       className="rounded-lg border border-gray-800 bg-gray-900 flex items-center gap-4 p-3"
                      whileHover={{ y: -7, boxShadow: "0 10px 30px -15px rgba(255, 0, 0, 0.2)" }}
                    >
                      <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
                        <Users className="h-5 w-5 text-[#00e6e6]" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-gray-400">$45,231 in sales</p>
                      </div>
                      <div className="flex h-2 w-24 overflow-hidden rounded-full bg-gray-800">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                          className="bg-[#00e6e6]"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          {/* </motion.div>
        </motion.div> */}

        {/* <motion.div variants={itemVariants}>
          <motion.div whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 230, 230, 0.2)" }}> */}
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Revenue by Region</CardTitle>
                <CardDescription className="text-gray-400">Geographic distribution of sales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { region: "North America", amount: "$56,432", percentage: 45 },
                    { region: "Europe", amount: "$34,768", percentage: 28 },
                    { region: "Asia Pacific", amount: "$21,345", percentage: 17 },
                    { region: "Latin America", amount: "$8,765", percentage: 7 },
                    { region: "Africa & Middle East", amount: "$3,210", percentage: 3 },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{item.region}</p>
                        <p className="font-medium">{item.amount}</p>
                      </div>
                      <div className="flex h-2 overflow-hidden rounded-full bg-gray-800">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percentage}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className="bg-[#00e6e6]"
                        ></motion.div>
                      </div>
                      <p className="text-xs text-gray-400">{item.percentage}% of total revenue</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          {/* </motion.div>
        </motion.div> */}
      </motion.div>

      {/* Sales Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.div whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 230, 230, 0.2)" }}>
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription className="text-gray-400">Detailed view of latest sales transactions</CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" size="sm" className="border-gray-800">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="border-gray-800">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button size="sm" className="bg-[#00e6e6] text-black hover:bg-[#00b3b3]">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-gray-800">
                  <TabsTrigger
                    value="all"
                    className={activeFilter === "all" ? "bg-[#00e6e6] text-black" : ""}
                    onClick={() => setActiveFilter("all")}
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="completed"
                    className={activeFilter === "completed" ? "bg-[#00e6e6] text-black" : ""}
                    onClick={() => setActiveFilter("completed")}
                  >
                    Completed
                  </TabsTrigger>
                  <TabsTrigger
                    value="pending"
                    className={activeFilter === "pending" ? "bg-[#00e6e6] text-black" : ""}
                    onClick={() => setActiveFilter("pending")}
                  >
                    Pending
                  </TabsTrigger>
                  <TabsTrigger
                    value="cancelled"
                    className={activeFilter === "cancelled" ? "bg-[#00e6e6] text-black" : ""}
                    onClick={() => setActiveFilter("cancelled")}
                  >
                    Cancelled
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-4">
                  <SalesTable />
                </TabsContent>
                <TabsContent value="completed" className="mt-4">
                  <SalesTable filter="completed" />
                </TabsContent>
                <TabsContent value="pending" className="mt-4">
                  <SalesTable filter="pending" />
                </TabsContent>
                <TabsContent value="cancelled" className="mt-4">
                  <SalesTable filter="cancelled" />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

