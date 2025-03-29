"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Generate dummy sales data
const generateSalesData = () => {
  const statuses = ["completed", "pending", "cancelled"]
  const products = [
    "Premium Wireless Headphones",
    "Ultra HD Smart TV",
    "Ergonomic Office Chair",
    "Professional DSLR Camera",
    "Fitness Smartwatch",
    "Portable Bluetooth Speaker",
    "Gaming Laptop",
    "Smartphone Pro Max",
    "Wireless Charging Pad",
    "Robot Vacuum Cleaner",
  ]

  return Array.from({ length: 50 }, (_, i) => {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
    const randomProduct = products[Math.floor(Math.random() * products.length)]
    const randomPrice = Math.floor(Math.random() * 900) + 100
    const randomQuantity = Math.floor(Math.random() * 5) + 1

    // Generate a random date within the last 30 days
    const date = new Date()
    date.setDate(date.getDate() - Math.floor(Math.random() * 30))

    return {
      id: `ORD-${10000 + i}`,
      date: date.toLocaleDateString(),
      customer: `Customer ${i + 1}`,
      product: randomProduct,
      quantity: randomQuantity,
      price: randomPrice,
      total: randomPrice * randomQuantity,
      status: randomStatus,
      shipping: randomStatus === "completed" ? "delivered" : randomStatus === "pending" ? "processing" : "cancelled",
    }
  })
}

const salesData = generateSalesData()

interface SalesTableProps {
  filter?: string
}

export function SalesTable({ filter = "all" }: SalesTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Filter data based on status if filter is provided
  const filteredData = filter === "all" ? salesData : salesData.filter((item) => item.status === filter)

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20"
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
      case "cancelled":
        return "bg-red-500/10 text-red-500 hover:bg-red-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20"
    }
  }

  return (
    <div>
      <div className="rounded-md border border-gray-800">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-gray-800/50">
              <TableHead className="w-[100px]">Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Shipping Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((order) => (
              <TableRow key={order.id} className="hover:bg-gray-800/50">
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell className="max-w-[200px] truncate">{order.product}</TableCell>
                <TableCell className="text-center">{order.quantity}</TableCell>
                <TableCell className="text-right">${order.price}</TableCell>
                <TableCell className="text-right">${order.total}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(order.status)}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-gray-800 hover:bg-gray-700">
                    {order.shipping.charAt(0).toUpperCase() + order.shipping.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="border-gray-800 bg-gray-900">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View order details</DropdownMenuItem>
                      <DropdownMenuItem>Update status</DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-gray-800" />
                      <DropdownMenuItem>Generate invoice</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-400">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of{" "}
          {filteredData.length} entries
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 border-gray-800"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <div className="text-sm">
            Page {currentPage} of {totalPages}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 border-gray-800"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

