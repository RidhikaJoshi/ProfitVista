"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SalesChart } from "@/components/sales-chart"
import { CategoryChart } from "@/components/category-chart"
import { ConversionChart } from "@/components/conversion-chart"
import { SalesHeatmap } from "@/components/sales-heatmap"
import { SalesTable } from "@/components/sales-table"
import {
  ArrowUpRight,
  Box,
  Download,
  FileText,
  Mail,
  Package,
  Share2,
  ShoppingBag,
  ShoppingCart,
  Tag,
  Truck,
  Users,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReportsPage() {
  const [productTimeframe, setProductTimeframe] = useState("month")
  const [customerTimeframe, setCustomerTimeframe] = useState("month")
  const [inventoryTimeframe, setInventoryTimeframe] = useState("month")

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
          <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
          <p className="text-gray-400">Generate and analyze detailed sales reports</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" className="border-gray-800">
            <Download className="mr-2 h-4 w-4" />
            Export All
          </Button>
          <Button className="bg-[#00e6e6] text-black hover:bg-[#00b3b3]">
            <FileText className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </motion.div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-800">
          
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
        </TabsList>
        <TabsContent value="products" className="mt-6 space-y-6">
          <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5 }}
           className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6"
          >
            <div>
              <h2 className="text-xl font-bold">Product Performance</h2>
              <p className="text-gray-400">Analyze your product metrics and performance</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={productTimeframe} onValueChange={setProductTimeframe}>
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
                title: "Total Products",
                value: "1,243",
                icon: <Package className="h-5 w-5 text-[#00e6e6]" />,
                change: "+12%",
              },
              {
                title: "Top Seller",
                value: "Wireless Headphones",
                icon: <ShoppingBag className="h-5 w-5 text-[#00e6e6]" />,
                change: "$24,500",
              },
              {
                title: "Avg. Profit Margin",
                value: "42.8%",
                icon: <Tag className="h-5 w-5 text-[#00e6e6]" />,
                change: "+3.2%",
              },
              {
                title: "Low Stock Items",
                value: "18",
                icon: <Box className="h-5 w-5 text-red-500" />,
                change: "Action needed",
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
                <CardTitle>Top Selling Products</CardTitle>
                <CardDescription className="text-gray-400">Products with highest revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      name: "Premium Wireless Headphones",
                      category: "Electronics",
                      price: "$149.99",
                      sold: 342,
                      revenue: "$51,296.58",
                      growth: "+24%",
                    },
                    {
                      name: 'Ultra HD Smart TV 55"',
                      category: "Electronics",
                      price: "$899.99",
                      sold: 52,
                      revenue: "$46,799.48",
                      growth: "+18%",
                    },
                    {
                      name: "Ergonomic Office Chair",
                      category: "Furniture",
                      price: "$249.99",
                      sold: 128,
                      revenue: "$31,998.72",
                      growth: "+15%",
                    },
                    {
                      name: "Professional DSLR Camera",
                      category: "Electronics",
                      price: "$1,299.99",
                      sold: 23,
                      revenue: "$29,899.77",
                      growth: "+8%",
                    },
                    {
                      name: "Fitness Smartwatch",
                      category: "Wearables",
                      price: "$199.99",
                      sold: 145,
                      revenue: "$28,998.55",
                      growth: "+32%",
                    },
                  ].map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="h-12 w-12 rounded-md bg-gray-800 flex items-center justify-center">
                        <ShoppingCart className="h-6 w-6 text-[#00e6e6]" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between">
                          <p className="font-medium">{product.name}</p>
                          <Badge className="bg-[#00e6e6] text-black">{product.growth}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div>
                            <span>{product.category}</span>
                            <span className="mx-2">•</span>
                            <span>{product.price}</span>
                            <span className="mx-2">•</span>
                            <span>{product.sold} sold</span>
                          </div>
                          <div className="font-medium text-white">{product.revenue}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Product Categories Performance</CardTitle>
                <CardDescription className="text-gray-400">Revenue by product category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <CategoryChart />
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    { category: "Electronics", revenue: "$124,563", percentage: 45, color: "#00e6e6" },
                    { category: "Clothing", revenue: "$78,921", percentage: 28, color: "#00b3b3" },
                    { category: "Furniture", revenue: "$56,432", percentage: 17, color: "#008080" },
                    { category: "Accessories", revenue: "$32,145", percentage: 10, color: "#006666" },
                  ].map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                          <p className="font-medium">{category.category}</p>
                        </div>
                        <p className="font-medium">{category.revenue}</p>
                      </div>
                      <div className="flex h-2 overflow-hidden rounded-full bg-gray-800">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${category.percentage}%` }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          className="bg-[#00e6e6]"
                          style={{ backgroundColor: category.color }}
                        ></motion.div>
                      </div>
                      <p className="text-xs text-gray-400">{category.percentage}% of total revenue</p>
                    </motion.div>
                  ))}
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
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Product Inventory Status</CardTitle>
                  <CardDescription className="text-gray-400">
                    Current stock levels and inventory metrics
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="border-gray-800">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border border-gray-800">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-gray-800/50">
                        <TableHead>Product Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>SKU</TableHead>
                        <TableHead className="text-center">In Stock</TableHead>
                        <TableHead className="text-center">Reorder Point</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          name: "Premium Wireless Headphones",
                          category: "Electronics",
                          sku: "EL-WH-001",
                          stock: 145,
                          reorderPoint: 50,
                          price: "$149.99",
                          status: "In Stock",
                        },
                        {
                          name: 'Ultra HD Smart TV 55"',
                          category: "Electronics",
                          sku: "EL-TV-055",
                          stock: 32,
                          reorderPoint: 20,
                          price: "$899.99",
                          status: "In Stock",
                        },
                        {
                          name: "Ergonomic Office Chair",
                          category: "Furniture",
                          sku: "FU-CH-001",
                          stock: 78,
                          reorderPoint: 30,
                          price: "$249.99",
                          status: "In Stock",
                        },
                        {
                          name: "Professional DSLR Camera",
                          category: "Electronics",
                          sku: "EL-CM-001",
                          stock: 12,
                          reorderPoint: 15,
                          price: "$1,299.99",
                          status: "Low Stock",
                        },
                        {
                          name: "Fitness Smartwatch",
                          category: "Wearables",
                          sku: "WE-SW-001",
                          stock: 5,
                          reorderPoint: 25,
                          price: "$199.99",
                          status: "Critical",
                        },
                        {
                          name: "Portable Bluetooth Speaker",
                          category: "Electronics",
                          sku: "EL-SP-001",
                          stock: 0,
                          reorderPoint: 30,
                          price: "$79.99",
                          status: "Out of Stock",
                        },
                      ].map((product, index) => (
                        <TableRow key={index} className="hover:bg-gray-800/50">
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>{product.sku}</TableCell>
                          <TableCell className="text-center">{product.stock}</TableCell>
                          <TableCell className="text-center">{product.reorderPoint}</TableCell>
                          <TableCell className="text-right">{product.price}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                product.status === "In Stock"
                                  ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                                  : product.status === "Low Stock"
                                    ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                                    : product.status === "Critical"
                                      ? "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20"
                                      : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                              }
                            >
                              {product.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        <TabsContent value="sales" className="mt-6 space-y-6">
          <motion.div
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6"
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
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Detailed Sales Report</CardTitle>
                  <CardDescription className="text-gray-400">
                    Comprehensive view of all sales transactions
                  </CardDescription>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="outline" size="sm" className="border-gray-800">
                    <Download className="mr-2 h-4 w-4" />
                    Export CSV
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-800">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Report
                  </Button>
                  <Button size="sm" className="bg-[#00e6e6] text-black hover:bg-[#00b3b3]">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <SalesTable />
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
              <h2 className="text-xl font-bold">Customer Analytics</h2>
              <p className="text-gray-400">Understand your customer behavior and demographics</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={customerTimeframe} onValueChange={setCustomerTimeframe}>
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
                title: "Total Customers",
                value: "8,642",
                icon: <Users className="h-5 w-5 text-[#00e6e6]" />,
                change: "+18%",
              },
              {
                title: "New Customers",
                value: "342",
                icon: <Users className="h-5 w-5 text-[#00e6e6]" />,
                change: "This month",
              },
              {
                title: "Avg. Order Value",
                value: "$96.20",
                icon: <ShoppingCart className="h-5 w-5 text-[#00e6e6]" />,
                change: "+3.1%",
              },
              {
                title: "Customer Retention",
                value: "68.5%",
                icon: <ArrowUpRight className="h-5 w-5 text-[#00e6e6]" />,
                change: "+5.2%",
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
                <CardTitle>Customer Demographics</CardTitle>
                <CardDescription className="text-gray-400">Age and gender distribution</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <div className="h-[300px] flex items-center justify-center">
                  <PieChart className="h-32 w-32 text-[#00e6e6]" />
                </div> */}
                <div className="mt-6 space-y-4">
                  {[
                    { group: "18-24", percentage: 15, color: "#00e6e6" },
                    { group: "25-34", percentage: 32, color: "#00b3b3" },
                    { group: "35-44", percentage: 28, color: "#008080" },
                    { group: "45-54", percentage: 18, color: "#006666" },
                    { group: "55+", percentage: 7, color: "#004d4d" },
                  ].map((group, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: group.color }}></div>
                          <p className="font-medium">Age {group.group}</p>
                        </div>
                        <p className="font-medium">{group.percentage}%</p>
                      </div>
                      <div className="flex h-2 overflow-hidden rounded-full bg-gray-800">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${group.percentage}%` }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          style={{ backgroundColor: group.color }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Customer Acquisition Channels</CardTitle>
                <CardDescription className="text-gray-400">Where your customers come from</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <div className="h-[300px] flex items-center justify-center">
                  <BarChart3 className="h-32 w-32 text-[#00e6e6]" />
                </div> */}
                <div className="mt-6 space-y-4">
                  {[
                    { channel: "Organic Search", percentage: 35, color: "#00e6e6" },
                    { channel: "Social Media", percentage: 25, color: "#00b3b3" },
                    { channel: "Direct Traffic", percentage: 20, color: "#008080" },
                    { channel: "Email Marketing", percentage: 12, color: "#006666" },
                    { channel: "Referrals", percentage: 8, color: "#004d4d" },
                  ].map((channel, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: channel.color }}></div>
                          <p className="font-medium">{channel.channel}</p>
                        </div>
                        <p className="font-medium">{channel.percentage}%</p>
                      </div>
                      <div className="flex h-2 overflow-hidden rounded-full bg-gray-800">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${channel.percentage}%` }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          style={{ backgroundColor: channel.color }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
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
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Top Customers</CardTitle>
                  <CardDescription className="text-gray-400">Customers with highest lifetime value</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="border-gray-800">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border border-gray-800">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-gray-800/50">
                        <TableHead>Customer</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-center">Orders</TableHead>
                        <TableHead className="text-right">Lifetime Value</TableHead>
                        <TableHead className="text-center">Last Purchase</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          name: "Sarah Johnson",
                          email: "sarah.j@example.com",
                          orders: 24,
                          value: "$4,562.45",
                          lastPurchase: "2 days ago",
                          status: "Active",
                        },
                        {
                          name: "Michael Chen",
                          email: "m.chen@example.com",
                          orders: 18,
                          value: "$3,845.20",
                          lastPurchase: "1 week ago",
                          status: "Active",
                        },
                        {
                          name: "Emma Thompson",
                          email: "emma.t@example.com",
                          orders: 15,
                          value: "$3,256.78",
                          lastPurchase: "3 days ago",
                          status: "Active",
                        },
                        {
                          name: "David Rodriguez",
                          email: "david.r@example.com",
                          orders: 12,
                          value: "$2,987.35",
                          lastPurchase: "1 month ago",
                          status: "At Risk",
                        },
                        {
                          name: "Jessica Williams",
                          email: "j.williams@example.com",
                          orders: 10,
                          value: "$2,654.90",
                          lastPurchase: "2 weeks ago",
                          status: "Active",
                        },
                        {
                          name: "Robert Brown",
                          email: "r.brown@example.com",
                          orders: 8,
                          value: "$2,345.65",
                          lastPurchase: "2 months ago",
                          status: "Inactive",
                        },
                      ].map((customer, index) => (
                        <TableRow key={index} className="hover:bg-gray-800/50">
                          <TableCell className="font-medium">{customer.name}</TableCell>
                          <TableCell>{customer.email}</TableCell>
                          <TableCell className="text-center">{customer.orders}</TableCell>
                          <TableCell className="text-right">{customer.value}</TableCell>
                          <TableCell className="text-center">{customer.lastPurchase}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                customer.status === "Active"
                                  ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                                  : customer.status === "At Risk"
                                    ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                                    : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                              }
                            >
                              {customer.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="inventory" className="mt-6 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6"
          >
            <div>
              <h2 className="text-xl font-bold">Inventory Status</h2>
              <p className="text-gray-400">Monitor your inventory levels and stock management</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={inventoryTimeframe} onValueChange={setInventoryTimeframe}>
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
                title: "Total SKUs",
                value: "2,456",
                icon: <Box className="h-5 w-5 text-[#00e6e6]" />,
                change: "+124 new",
              },
              {
                title: "Low Stock Items",
                value: "18",
                icon: <Box className="h-5 w-5 text-yellow-500" />,
                change: "Below threshold",
              },
              {
                title: "Out of Stock",
                value: "7",
                icon: <Box className="h-5 w-5 text-red-500" />,
                change: "Needs reorder",
              },
              {
                title: "Inventory Value",
                value: "$345,678",
                icon: <Tag className="h-5 w-5 text-[#00e6e6]" />,
                change: "+12.5%",
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
                <CardTitle>Inventory Turnover</CardTitle>
                <CardDescription className="text-gray-400">Stock movement over time</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <div className="h-[300px] flex items-center justify-center">
                  <LineChart className="h-32 w-48 text-[#00e6e6]" />
                </div> */}
                <div className="mt-6 space-y-4">
                  {[
                    { category: "Electronics", turnover: 8.4, status: "Excellent" },
                    { category: "Clothing", turnover: 6.2, status: "Good" },
                    { category: "Furniture", turnover: 3.5, status: "Average" },
                    { category: "Accessories", turnover: 7.8, status: "Good" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between p-2 rounded-md hover:bg-gray-800/50"
                    >
                      <p className="font-medium">{item.category}</p>
                      <div className="flex items-center gap-2">
                        <p>{item.turnover}x</p>
                        <Badge
                          variant="outline"
                          className={
                            item.status === "Excellent"
                              ? "bg-green-500/10 text-green-500"
                              : item.status === "Good"
                                ? "bg-blue-500/10 text-blue-500"
                                : "bg-yellow-500/10 text-yellow-500"
                          }
                        >
                          {item.status}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Warehouse Capacity</CardTitle>
                <CardDescription className="text-gray-400">Storage utilization by location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { location: "Main Warehouse", capacity: 75, items: 1245 },
                    { location: "East Coast Facility", capacity: 62, items: 856 },
                    { location: "West Coast Facility", capacity: 48, items: 642 },
                    { location: "Central Distribution", capacity: 89, items: 1532 },
                  ].map((warehouse, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{warehouse.location}</p>
                          <p className="text-sm text-gray-400">{warehouse.items} items</p>
                        </div>
                        <p className="font-medium">{warehouse.capacity}%</p>
                      </div>
                      <div className="relative pt-1">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.5 }}
                          className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-800"
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${warehouse.capacity}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                              warehouse.capacity > 80
                                ? "bg-red-500"
                                : warehouse.capacity > 60
                                  ? "bg-yellow-500"
                                  : "bg-[#00e6e6]"
                            }`}
                          ></motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
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
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Inventory Alerts</CardTitle>
                  <CardDescription className="text-gray-400">Items requiring attention</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="border-gray-800">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border border-gray-800">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-gray-800/50">
                        <TableHead>Product</TableHead>
                        <TableHead>SKU</TableHead>
                        <TableHead className="text-center">Current Stock</TableHead>
                        <TableHead className="text-center">Reorder Point</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          name: "Fitness Smartwatch",
                          sku: "WE-SW-001",
                          stock: 5,
                          reorderPoint: 25,
                          price: "$199.99",
                          status: "Critical",
                          action: "Reorder Now",
                        },
                        {
                          name: "Professional DSLR Camera",
                          sku: "EL-CM-001",
                          stock: 12,
                          reorderPoint: 15,
                          price: "$1,299.99",
                          status: "Low Stock",
                          action: "Reorder",
                        },
                        {
                          name: "Wireless Gaming Mouse",
                          sku: "EL-MS-001",
                          stock: 8,
                          reorderPoint: 20,
                          price: "$89.99",
                          status: "Low Stock",
                          action: "Reorder",
                        },
                        {
                          name: "Portable Bluetooth Speaker",
                          sku: "EL-SP-001",
                          stock: 0,
                          reorderPoint: 30,
                          price: "$79.99",
                          status: "Out of Stock",
                          action: "Urgent Reorder",
                        },
                        {
                          name: "Smart Home Hub",
                          sku: "EL-HB-001",
                          stock: 3,
                          reorderPoint: 10,
                          price: "$149.99",
                          status: "Low Stock",
                          action: "Reorder",
                        },
                        {
                          name: "Mechanical Keyboard",
                          sku: "EL-KB-001",
                          stock: 0,
                          reorderPoint: 15,
                          price: "$129.99",
                          status: "Out of Stock",
                          action: "Urgent Reorder",
                        },
                      ].map((product, index) => (
                        <TableRow key={index} className="hover:bg-gray-800/50">
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell>{product.sku}</TableCell>
                          <TableCell className="text-center">{product.stock}</TableCell>
                          <TableCell className="text-center">{product.reorderPoint}</TableCell>
                          <TableCell className="text-right">{product.price}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                product.status === "Low Stock"
                                  ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                                  : product.status === "Critical"
                                    ? "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20"
                                    : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                              }
                            >
                              {product.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button
                              size="sm"
                              className={
                                product.action.includes("Urgent")
                                  ? "bg-red-500 hover:bg-red-600 text-white"
                                  : "bg-[#00e6e6] text-black hover:bg-[#00b3b3]"
                              }
                            >
                              {product.action}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Upcoming Shipments</CardTitle>
                <CardDescription className="text-gray-400">Expected inventory arrivals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "SHP-1234",
                      supplier: "TechSuppliers Inc.",
                      items: 12,
                      status: "In Transit",
                      eta: "2 days",
                      tracking: "TRK928374651",
                    },
                    {
                      id: "SHP-1235",
                      supplier: "ElectroGoods Ltd.",
                      items: 8,
                      status: "Processing",
                      eta: "5 days",
                      tracking: "TRK837465102",
                    },
                    {
                      id: "SHP-1236",
                      supplier: "FurniturePlus Co.",
                      items: 5,
                      status: "Shipped",
                      eta: "3 days",
                      tracking: "TRK746510293",
                    },
                  ].map((shipment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 hover:bg-gray-800/50"
                    >
                      <div className="h-12 w-12 rounded-md bg-gray-800 flex items-center justify-center">
                        <Truck className="h-6 w-6 text-[#00e6e6]" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between">
                          <p className="font-medium">Shipment #{shipment.id}</p>
                          <Badge
                            className={
                              shipment.status === "In Transit"
                                ? "bg-blue-500/10 text-blue-500"
                                : shipment.status === "Processing"
                                  ? "bg-yellow-500/10 text-yellow-500"
                                  : "bg-green-500/10 text-green-500"
                            }
                          >
                            {shipment.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div>
                            <span>{shipment.supplier}</span>
                            <span className="mx-2">•</span>
                            <span>{shipment.items} items</span>
                            <span className="mx-2">•</span>
                            <span>ETA: {shipment.eta}</span>
                          </div>
                          <div className="font-medium text-[#00e6e6]">{shipment.tracking}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

