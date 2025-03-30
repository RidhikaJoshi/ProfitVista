"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  ChevronRight,
  Download,
  LineChart,
  PieChart,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { SalesChart } from "@/components/sales-chart"
import { CategoryChart } from "@/components/category-chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


// interface PerformanceInsightCardProps {
//   title: string;
//   value: string;
//   change: string;
//   icon: React.ReactNode;
//   description: string;
//   chartData?: {
//     type: "line" | "bar" | "pie";
//     points?: number[];
//   };
//   color?: string;
// }

// const PerformanceInsightCard: React.FC<PerformanceInsightCardProps> = ({ title, value, change, icon, description, chartData, color = "#00e6e6" }) => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true })
//   const controls = useAnimation()

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible")
//     }
//   }, [isInView, controls])

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0, y: 20 },
//         visible: {
//           opacity: 1,
//           y: 0,
//           transition: { duration: 0.5 },
//         },
//       }}
//       className="space-y-4"
//     >
//       <div className="flex items-center justify-between">
//         <h3 className="font-medium">{title}</h3>
//         <Badge style={{ backgroundColor: color, color: "black" }}>{change}</Badge>
//       </div>
//       <div className="h-[200px] rounded-md border border-gray-800 bg-gray-900 p-4 relative overflow-hidden">
//         <div className="absolute inset-0 flex items-center justify-center">{icon}</div>

//         {/* Chart visualization */}
//         <div className="absolute inset-0 opacity-30">
//           {chartData && chartData.type === "line" && (
//             <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
//               <motion.path
//                 d={`M 0,50 ${(chartData.points ?? []).map((p, i) => `L ${i * (100 / ((chartData.points?.length ?? 1) - 1))},${50 - p}`).join(" ")}`}
//                 fill="none"
//                 stroke={color}
//                 strokeWidth="2"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{ duration: 2, delay: 0.5 }}
//               />
//             </svg>
//           )}

//           {chartData && chartData.type === "bar" && (
//             <div className="flex h-full items-end justify-around px-2">
//               {chartData && (chartData.points ?? []).map((height, i) => (
//                 <motion.div
//                   key={i}
//                   className="w-3 rounded-t-sm"
//                   style={{ backgroundColor: color }}
//                   initial={{ height: 0 }}
//                   animate={{ height: `${height}%` }}
//                   transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
//                 />
//               ))}
//             </div>
//           )}

//           {chartData && chartData.type === "pie" && (
//             <div className="flex h-full items-center justify-center">
//               <motion.div
//                 className="w-24 h-24 rounded-full border-4"
//                 style={{ borderColor: color }}
//                 initial={{ rotate: 0 }}
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//               />
//             </div>
//           )}
//         </div>

//         {/* Value overlay */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//             className="text-3xl font-bold"
//             style={{ color }}
//           >
//             {value}
//           </motion.div>
//         </div>
//       </div>
//       <motion.p
//         className="text-sm text-gray-400"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 1 }}
//       >
//         {description}
//       </motion.p>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 1.2 }}
//         className="flex items-center justify-end text-sm"
//       >
//         <Button variant="link" className="p-0 h-auto text-[#00e6e6]">
//           View Details <ChevronRight className="h-3 w-3 ml-1" />
//         </Button>
//       </motion.div>
//     </motion.div>
//   )
// }

export default function InsightsPage() {
  const [overviewTimeframe, setOverviewTimeframe] = useState("month")
  const [productsTimeframe, setProductsTimeframe] = useState("month")
  const [customersTimeframe, setCustomersTimeframe] = useState("month")
  const [trendsTimeframe, setTrendsTimeframe] = useState("month")

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
          <h1 className="text-2xl font-bold tracking-tight">Insights</h1>
          <p className="text-gray-400">Discover actionable insights to grow your business</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" className="border-gray-800">
            <Download className="mr-2 h-4 w-4" />
            Export Insights
          </Button>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-800">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6"
          >
            <div>
              <h2 className="text-xl font-bold">Key Insights</h2>
              <p className="text-gray-400">Important metrics and trends</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={overviewTimeframe} onValueChange={setOverviewTimeframe}>
                <SelectTrigger className="w-[180px] border-gray-800 bg-transparent">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent className="border-gray-800 bg-gray-900">
                  <SelectItem value="week">Last 7 days</SelectItem>
                  <SelectItem value="month">Last 30 days</SelectItem>
                  <SelectItem value="quarter">Last 90 days</SelectItem>
                  <SelectItem value="year">Last 12 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {/* <motion.div variants={itemVariants}> */}
              <Card className="border-gray-800 bg-gray-900/50">
                <CardHeader>
                  <CardTitle>Key Insights</CardTitle>
                  <CardDescription className="text-gray-400">Important metrics and trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 230, 230, 0.2)" }}
                      className="rounded-lg border border-gray-800 bg-gray-900 p-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#00e6e6]/10 p-2">
                          <ArrowUpRight className="h-5 w-5 text-[#00e6e6]" />
                        </div>
                        <div>
                          <p className="font-medium">Sales Growth</p>
                          <p className="text-sm text-gray-400">
                            Your sales have increased by 24% compared to last month
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(255, 0, 0, 0.2)" }}
                      className="rounded-lg border border-gray-800 bg-gray-900 p-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-red-500/10 p-2">
                          <ArrowDown className="h-5 w-5 text-red-500" />
                        </div>
                        <div>
                          <p className="font-medium">Cart Abandonment</p>
                          <p className="text-sm text-gray-400">Your cart abandonment rate has increased to 28%</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 230, 230, 0.2)" }}
                      className="rounded-lg border border-gray-800 bg-gray-900 p-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#00e6e6]/10 p-2">
                          <Users className="h-5 w-5 text-[#00e6e6]" />
                        </div>
                        <div>
                          <p className="font-medium">New Customers</p>
                          <p className="text-sm text-gray-400">You've acquired 156 new customers this month</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            {/* </motion.div> */}

            {/* <motion.div variants={itemVariants}> */}
              <Card className="border-gray-800 bg-gray-900/50">
                <CardHeader>
                  <CardTitle>Best Selling Products</CardTitle>
                  <CardDescription className="text-gray-400">Top performers by revenue</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-center gap-4 hover:bg-gray-800/50 rounded-lg justify-between p-3"
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
            {/* </motion.div> */}

            {/* <motion.div variants={itemVariants}> */}
              <Card className="border-gray-800 bg-gray-900/50">
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                  <CardDescription className="text-gray-400">Actions to improve performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                      <p className="font-medium mb-2">Reduce Cart Abandonment</p>
                      <p className="text-sm text-gray-400 mb-3">
                        Implement exit-intent popups with discounts to reduce cart abandonment rate.
                      </p>
                      <Button variant="outline" size="sm" className="w-full border-gray-800">
                        View Strategy
                      </Button>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                      <p className="font-medium mb-2">Optimize Product Pages</p>
                      <p className="text-sm text-gray-400 mb-3">
                        Improve product descriptions and add more high-quality images to increase conversion rates.
                      </p>
                      <Button variant="outline" size="sm" className="w-full border-gray-800">
                        View Strategy
                      </Button>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                      <p className="font-medium mb-2">Email Marketing</p>
                      <p className="text-sm text-gray-400 mb-3">
                        Set up automated email campaigns to re-engage customers who haven't purchased in 30+ days.
                      </p>
                      <Button variant="outline" size="sm" className="w-full border-gray-800">
                        View Strategy
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            {/* </motion.div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Performance Insights</CardTitle>
                  <CardDescription className="text-gray-400">
                    Detailed analysis of your business performance
                  </CardDescription>
                </div>
                <Button variant="outline" className="border-gray-800">
                  <Download className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
              </CardHeader>
              <CardContent>
                {/* <div className="grid gap-6 md:grid-cols-3">
                  <PerformanceInsightCard
                    title="Revenue Growth"
                    value="+24%"
                    change="Excellent"
                    icon={<LineChart className="h-16 w-16 text-[#00e6e6] opacity-20" />}
                    description="Your revenue has consistently grown over the past 6 months, with the highest growth in the electronics category."
                    chartData={{
                      type: "line",
                      points: [30, 25, 35, 30, 40, 45, 50],
                    }}
                    color="#00e6e6"
                  />

                  <PerformanceInsightCard
                    title="Customer Retention"
                    value="+12%"
                    change="Good"
                    icon={<Users className="h-16 w-16 text-[#00e6e6] opacity-20" />}
                    description="Your customer retention rate has improved by 12% since implementing the loyalty program last quarter."
                    chartData={{
                      type: "bar",
                      points: [40, 45, 50, 55, 60, 65],
                    }}
                    color="#00e6e6"
                  />

                  <PerformanceInsightCard
                    title="Category Performance"
                    value="35%"
                    change="Electronics"
                    icon={<PieChart className="h-16 w-16 text-[#00e6e6] opacity-20" />}
                    description="Electronics and Home & Kitchen categories are outperforming others with 35% and 28% of total sales respectively."
                    chartData={{
                      type: "pie",
                    }}
                    color="#00e6e6"
                  />
                </div> */}

                {/* Additional metrics row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {[
                    { label: "Avg. Order Value", value: "$96.20", change: "+3.1%", color: "#00e6e6" },
                    { label: "Conversion Rate", value: "3.6%", change: "-0.8%", color: "#ff4d4f" },
                    { label: "Customer Acquisition", value: "$34.72", change: "-2.4%", color: "#00e6e6" },
                    { label: "Monthly Growth", value: "18.4%", change: "+4.1%", color: "#00e6e6" },
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="rounded-lg border border-gray-800 bg-gray-900 p-3"
                    >
                      <p className="text-xs text-gray-400">{metric.label}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-lg font-semibold">{metric.value}</p>
                        <Badge
                          variant="outline"
                          className={`bg-opacity-10 text-${metric.color}`}
                          style={{ color: metric.color, backgroundColor: `${metric.color}20` }}
                        >
                          {metric.change}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="products" className="mt-6 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6"
          >
            <div>
              <h2 className="text-xl font-bold">Product Insights</h2>
              <p className="text-gray-400">Discover opportunities to optimize your product performance</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={productsTimeframe} onValueChange={setProductsTimeframe}>
                <SelectTrigger className="w-[180px] border-gray-800 bg-transparent">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent className="border-gray-800 bg-gray-900">
                  <SelectItem value="week">Last 7 days</SelectItem>
                  <SelectItem value="month">Last 30 days</SelectItem>
                  <SelectItem value="quarter">Last 90 days</SelectItem>
                  <SelectItem value="year">Last 12 months</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-[#00e6e6] text-black hover:bg-[#00b3b3]">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                title: "Top Performer",
                value: "Wireless Headphones",
                icon: <TrendingUp className="h-5 w-5 text-[#00e6e6]" />,
                change: "+24% growth",
              },
              {
                title: "Underperforming",
                value: "Smart Home Hub",
                icon: <TrendingDown className="h-5 w-5 text-red-500" />,
                change: "-8% decline",
              },
              {
                title: "Highest Margin",
                value: "DSLR Camera",
                icon: <ArrowUpRight className="h-5 w-5 text-[#00e6e6]" />,
                change: "68% margin",
              },
              {
                title: "Most Reviewed",
                value: "Fitness Smartwatch",
                icon: <Users className="h-5 w-5 text-[#00e6e6]" />,
                change: "245 reviews",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 230, 230, 0.2)" }}>
                  <Card className="border-gray-800 bg-gray-900/50">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardDescription className="text-gray-400">{item.title}</CardDescription>
                        {item.icon}
                      </div>
                      <CardTitle className="text-xl font-bold">{item.value}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-gray-400">{item.change}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6 md:grid-cols-2"
          >
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Product Performance Analysis</CardTitle>
                <CardDescription className="text-gray-400">Key metrics by product</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      name: "Premium Wireless Headphones",
                      metrics: { sales: 342, revenue: "$51,296", growth: "+24%", conversion: "4.8%" },
                    },
                    {
                      name: 'Ultra HD Smart TV 55"',
                      metrics: { sales: 52, revenue: "$46,799", growth: "+18%", conversion: "2.3%" },
                    },
                    {
                      name: "Ergonomic Office Chair",
                      metrics: { sales: 128, revenue: "$31,998", growth: "+15%", conversion: "3.5%" },
                    },
                    {
                      name: "Professional DSLR Camera",
                      metrics: { sales: 23, revenue: "$29,899", growth: "+8%", conversion: "1.9%" },
                    },
                  ].map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 rounded-lg border border-gray-800 hover:bg-gray-800/50"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{product.name}</h3>
                        <Badge className="bg-[#00e6e6] text-black">{product.metrics.growth}</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-3">
                        <div>
                          <p className="text-xs text-gray-400">Sales</p>
                          <p className="font-medium">{product.metrics.sales} units</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Revenue</p>
                          <p className="font-medium">{product.metrics.revenue}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Conversion</p>
                          <p className="font-medium">{product.metrics.conversion}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Product Improvement Opportunities</CardTitle>
                <CardDescription className="text-gray-400">Actionable insights to boost performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Smart Home Hub</h3>
                      <Badge variant="outline" className="bg-red-500/10 text-red-500">
                        High Priority
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      Product has a high cart abandonment rate (42%). Consider reducing price or offering bundle
                      discounts.
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-400">Current conversion: 1.2%</p>
                      <p className="text-xs text-gray-400">Target: 3.0%</p>
                    </div>
                    <Progress value={40} className="h-1 mt-1" />
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Fitness Smartwatch</h3>
                      <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500">
                        Medium Priority
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      Product has high views but average conversion. Improve product descriptions and add more lifestyle
                      images.
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-400">Current conversion: 2.8%</p>
                      <p className="text-xs text-gray-400">Target: 4.0%</p>
                    </div>
                    <Progress value={70} className="h-1 mt-1" />
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Wireless Gaming Mouse</h3>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500">
                        Low Priority
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      Product performs well but has few reviews. Implement a post-purchase email campaign to gather more
                      reviews.
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-400">Current reviews: 28</p>
                      <p className="text-xs text-gray-400">Target: 100</p>
                    </div>
                    <Progress value={28} className="h-1 mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Product Category Analysis</CardTitle>
                <CardDescription className="text-gray-400">Performance by product category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <CategoryChart />
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="font-medium">Top Performing Categories</h3>
                    {[
                      { category: "Electronics", growth: "+24%", revenue: "$124,563" },
                      { category: "Clothing", growth: "+18%", revenue: "$78,921" },
                      { category: "Furniture", growth: "+15%", revenue: "$56,432" },
                    ].map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        className="flex items-center justify-between p-2 rounded-md hover:bg-gray-800/50"
                      >
                        <p className="font-medium">{category.category}</p>
                        <div className="flex items-center gap-4">
                          <Badge className="bg-[#00e6e6] text-black">{category.growth}</Badge>
                          <p className="font-medium">{category.revenue}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Underperforming Categories</h3>
                    {[
                      { category: "Smart Home", growth: "-8%", revenue: "$32,145", recommendation: "Bundle products" },
                      { category: "Audio", growth: "-3%", revenue: "$28,765", recommendation: "Improve descriptions" },
                      { category: "Accessories", growth: "+2%", revenue: "$18,432", recommendation: "Add more images" },
                    ].map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        className="p-2 rounded-md hover:bg-gray-800/50"
                      >
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{category.category}</p>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className={
                                Number.parseFloat(category.growth) > 0
                                  ? "bg-green-500/10 text-green-500"
                                  : "bg-red-500/10 text-red-500"
                              }
                            >
                              {category.growth}
                            </Badge>
                            <p className="font-medium">{category.revenue}</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Recommendation: {category.recommendation}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="customers" className="mt-6 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6"
          >
            <div>
              <h2 className="text-xl font-bold">Customer Insights</h2>
              <p className="text-gray-400">Understand your customers better to drive growth</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={customersTimeframe} onValueChange={setCustomersTimeframe}>
                <SelectTrigger className="w-[180px] border-gray-800 bg-transparent">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent className="border-gray-800 bg-gray-900">
                  <SelectItem value="week">Last 7 days</SelectItem>
                  <SelectItem value="month">Last 30 days</SelectItem>
                  <SelectItem value="quarter">Last 90 days</SelectItem>
                  <SelectItem value="year">Last 12 months</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-[#00e6e6] text-black hover:bg-[#00b3b3]">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                title: "Customer Lifetime Value",
                value: "$342",
                icon: <Users className="h-5 w-5 text-[#00e6e6]" />,
                change: "+12% vs last year",
              },
              {
                title: "Repeat Purchase Rate",
                value: "38%",
                icon: <ArrowUpRight className="h-5 w-5 text-[#00e6e6]" />,
                change: "+5% vs last year",
              },
              {
                title: "Average Order Frequency",
                value: "2.4",
                icon: <ShoppingCart className="h-5 w-5 text-[#00e6e6]" />,
                change: "Orders per customer",
              },
              {
                title: "Customer Acquisition Cost",
                value: "$28.45",
                icon: <ArrowDown className="h-5 w-5 text-[#00e6e6]" />,
                change: "-8% vs last year",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 230, 230, 0.2)" }}>
                  <Card className="border-gray-800 bg-gray-900/50">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardDescription className="text-gray-400">{item.title}</CardDescription>
                        {item.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold">{item.value}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-gray-400">{item.change}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6 md:grid-cols-2"
          >
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Customer Segmentation</CardTitle>
                <CardDescription className="text-gray-400">Breakdown of your customer base</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] flex items-center justify-center">
                  <PieChart className="h-32 w-32 text-[#00e6e6]" />
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    { segment: "Loyal Customers", percentage: 28, value: "$156,432", color: "#00e6e6" },
                    { segment: "Regular Buyers", percentage: 42, value: "$245,678", color: "#00b3b3" },
                    { segment: "Occasional Shoppers", percentage: 18, value: "$78,543", color: "#008080" },
                    { segment: "One-time Buyers", percentage: 12, value: "$34,567", color: "#006666" },
                  ].map((segment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: segment.color }}></div>
                          <p className="font-medium">{segment.segment}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{segment.percentage}%</p>
                          <p className="text-sm text-gray-400">{segment.value}</p>
                        </div>
                      </div>
                      <div className="flex h-2 overflow-hidden rounded-full bg-gray-800">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${segment.percentage}%` }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          style={{ backgroundColor: segment.color }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Customer Behavior Insights</CardTitle>
                <CardDescription className="text-gray-400">Key patterns and opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#00e6e6]/10 p-2">
                        <Users className="h-5 w-5 text-[#00e6e6]" />
                      </div>
                      <div>
                        <p className="font-medium">Loyal Customer Retention</p>
                        <p className="text-sm text-gray-400">
                          Your loyal customer segment has grown by 15% this quarter. Consider implementing a VIP program
                          to further increase retention.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#00e6e6]/10 p-2">
                        <ShoppingCart className="h-5 w-5 text-[#00e6e6]" />
                      </div>
                      <div>
                        <p className="font-medium">Cross-Selling Opportunity</p>
                        <p className="text-sm text-gray-400">
                          Customers who purchase headphones are 3x more likely to buy phone accessories within 30 days.
                          Consider creating product bundles.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-500/10 p-2">
                        <ArrowDown className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-medium">At-Risk Customers</p>
                        <p className="text-sm text-gray-400">
                          You have 124 customers who haven't made a purchase in over 90 days. Consider sending a
                          re-engagement email with a special offer.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#00e6e6]/10 p-2">
                        <LineChart className="h-5 w-5 text-[#00e6e6]" />
                      </div>
                      <div>
                        <p className="font-medium">Purchase Frequency</p>
                        <p className="text-sm text-gray-400">
                          Your average time between purchases is 45 days. Implementing a loyalty program could reduce
                          this to 30 days and increase annual revenue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Customer Journey Analysis</CardTitle>
                <CardDescription className="text-gray-400">Understand the path to purchase</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <div className="h-[300px]">
                  <SalesChart />
                </div> */}
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <h3 className="font-medium">Acquisition</h3>
                    <div className="rounded-lg border border-gray-800 bg-gray-900 p-3">
                      <div className="flex justify-between items-center">
                        <p className="text-sm">Traffic Sources</p>
                        <Badge className="bg-[#00e6e6] text-black">+18%</Badge>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        Organic search is your top acquisition channel, bringing in 42% of new customers.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Conversion</h3>
                    <div className="rounded-lg border border-gray-800 bg-gray-900 p-3">
                      <div className="flex justify-between items-center">
                        <p className="text-sm">Checkout Process</p>
                        <Badge variant="outline" className="bg-red-500/10 text-red-500">
                          -5%
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        28% of customers abandon cart at the payment step. Consider simplifying checkout.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Retention</h3>
                    <div className="rounded-lg border border-gray-800 bg-gray-900 p-3">
                      <div className="flex justify-between items-center">
                        <p className="text-sm">Post-Purchase</p>
                        <Badge className="bg-[#00e6e6] text-black">+24%</Badge>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        Email follow-ups have increased repeat purchases by 24%. Continue this strategy and expand to
                        SMS notifications.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="trends" className="mt-6 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6"
          >
            <div>
              <h2 className="text-xl font-bold">Market Trends</h2>
              <p className="text-gray-400">Stay ahead with the latest market insights</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={trendsTimeframe} onValueChange={setTrendsTimeframe}>
                <SelectTrigger className="w-[180px] border-gray-800 bg-transparent">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent className="border-gray-800 bg-gray-900">
                  <SelectItem value="week">Last 7 days</SelectItem>
                  <SelectItem value="month">Last 30 days</SelectItem>
                  <SelectItem value="quarter">Last 90 days</SelectItem>
                  <SelectItem value="year">Last 12 months</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-[#00e6e6] text-black hover:bg-[#00b3b3]">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                title: "Industry Growth",
                value: "+12.5%",
                icon: <TrendingUp className="h-5 w-5 text-[#00e6e6]" />,
                change: "vs. 8.3% last year",
              },
              {
                title: "Emerging Category",
                value: "Smart Home",
                icon: <ArrowUpRight className="h-5 w-5 text-[#00e6e6]" />,
                change: "+32% growth",
              },
              {
                title: "Declining Category",
                value: "Desktop PCs",
                icon: <TrendingDown className="h-5 w-5 text-red-500" />,
                change: "-8% decline",
              },
              {
                title: "Market Share",
                value: "4.2%",
                icon: <PieChart className="h-5 w-5 text-[#00e6e6]" />,
                change: "+0.8% vs last year",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 230, 230, 0.2)" }}>
                  <Card className="border-gray-800 bg-gray-900/50">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardDescription className="text-gray-400">{item.title}</CardDescription>
                        {item.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold">{item.value}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-gray-400">{item.change}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6 md:grid-cols-2"
          >
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Seasonal Trends</CardTitle>
                <CardDescription className="text-gray-400">Sales patterns throughout the year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <SalesChart />
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#00e6e6]/10 p-2">
                        <TrendingUp className="h-5 w-5 text-[#00e6e6]" />
                      </div>
                      <div>
                        <p className="font-medium">Q4 Holiday Season</p>
                        <p className="text-sm text-gray-400">
                          Sales typically increase by 45% during November-December. Prepare inventory and marketing
                          campaigns by October.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-red-500/10 p-2">
                        <TrendingDown className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-medium">Q1 Slowdown</p>
                        <p className="text-sm text-gray-400">
                          January-February typically sees a 20% decrease in sales. Consider running promotions to
                          maintain momentum.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#00e6e6]/10 p-2">
                        <ArrowUpRight className="h-5 w-5 text-[#00e6e6]" />
                      </div>
                      <div>
                        <p className="font-medium">Back-to-School Season</p>
                        <p className="text-sm text-gray-400">
                          August-September sees a 25% increase in electronics and accessories. Plan special bundles for
                          students.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Emerging Market Trends</CardTitle>
                <CardDescription className="text-gray-400">New opportunities to explore</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Sustainable Electronics</h3>
                      <Badge className="bg-[#00e6e6] text-black">High Potential</Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      Products with eco-friendly packaging and materials are seeing 34% higher growth than standard
                      alternatives. Consider adding sustainable options to your catalog.
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-400">Market adoption: 28%</p>
                      <p className="text-xs text-gray-400">Growth rate: +34%</p>
                    </div>
                    <Progress value={28} className="h-1 mt-1" />
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">AI-Powered Devices</h3>
                      <Badge className="bg-[#00e6e6] text-black">High Potential</Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      Smart home devices with AI capabilities are growing at 42% annually. Consider expanding your smart
                      home category with AI-focused products.
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-400">Market adoption: 18%</p>
                      <p className="text-xs text-gray-400">Growth rate: +42%</p>
                    </div>
                    <Progress value={18} className="h-1 mt-1" />
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Subscription Services</h3>
                      <Badge className="bg-[#00e6e6] text-black">Medium Potential</Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      Product-as-a-service models are gaining traction with 25% growth. Consider offering subscription
                      options for consumables or premium support.
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-400">Market adoption: 15%</p>
                      <p className="text-xs text-gray-400">Growth rate: +25%</p>
                    </div>
                    <Progress value={15} className="h-1 mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Competitive Analysis</CardTitle>
                <CardDescription className="text-gray-400">How you compare to competitors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-4">
                    <h3 className="font-medium">Market Position</h3>
                    <div className="h-[200px] rounded-md border border-gray-800 bg-gray-900 p-4 flex items-center justify-center">
                      <PieChart className="h-16 w-16 text-[#00e6e6]" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm">Your Company</p>
                        <p className="text-sm font-medium">4.2%</p>
                      </div>
                      <Progress value={4.2} className="h-1" />

                      <div className="flex items-center justify-between">
                        <p className="text-sm">Competitor A</p>
                        <p className="text-sm font-medium">12.5%</p>
                      </div>
                      <Progress value={12.5} className="h-1" />

                      <div className="flex items-center justify-between">
                        <p className="text-sm">Competitor B</p>
                        <p className="text-sm font-medium">8.7%</p>
                      </div>
                      <Progress value={8.7} className="h-1" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Price Comparison</h3>
                    <div className="h-[200px] rounded-md border border-gray-800 bg-gray-900 p-4 flex items-center justify-center">
                      <BarChart3 className="h-16 w-16 text-[#00e6e6]" />
                    </div>
                    <div className="space-y-2">
                      {[
                        { category: "Electronics", position: "5% higher", status: "Competitive" },
                        { category: "Accessories", position: "3% lower", status: "Advantage" },
                        { category: "Smart Home", position: "8% higher", status: "Concern" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-1">
                          <p className="text-sm">{item.category}</p>
                          <div className="flex items-center gap-2">
                            <p className="text-sm">{item.position}</p>
                            <Badge
                              variant="outline"
                              className={
                                item.status === "Advantage"
                                  ? "bg-green-500/10 text-green-500"
                                  : item.status === "Competitive"
                                    ? "bg-blue-500/10 text-blue-500"
                                    : "bg-red-500/10 text-red-500"
                              }
                            >
                              {item.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Customer Satisfaction</h3>
                    <div className="h-[200px] rounded-md border border-gray-800 bg-gray-900 p-4 flex items-center justify-center">
                      <LineChart className="h-16 w-16 text-[#00e6e6]" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm">Your Company</p>
                        <div className="flex items-center gap-1 text-[#00e6e6]">
                          <p className="text-sm font-medium">4.5/5</p>
                          <ArrowUp className="h-4 w-4" />
                        </div>
                      </div>
                      <Progress value={90} className="h-1" />

                      <div className="flex items-center justify-between">
                        <p className="text-sm">Industry Average</p>
                        <p className="text-sm font-medium">3.8/5</p>
                      </div>
                      <Progress value={76} className="h-1" />

                      <div className="flex items-center justify-between">
                        <p className="text-sm">Top Competitor</p>
                        <p className="text-sm font-medium">4.2/5</p>
                      </div>
                      <Progress value={84} className="h-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

