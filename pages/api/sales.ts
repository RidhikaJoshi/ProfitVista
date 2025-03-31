import { NextApiRequest, NextApiResponse } from "next";

// Function to generate random sales data
const generateSalesData = () => ({
    Total_Revenue: Math.floor(Math.random() * 500000),
    Total_Sales: Math.floor(Math.random() * 10000),
    Monthly_Growth: parseFloat((Math.random() * 10).toFixed(2)),
    Conversion_Rate: parseFloat((Math.random() * 5 + 5).toFixed(2)),
    Acquiring_Clients: Math.floor(Math.random() * 2000),
    Avg_Order_Value: parseFloat((Math.random() * 50 + 50).toFixed(2)),
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(generateSalesData());
}
