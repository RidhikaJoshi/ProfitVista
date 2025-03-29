# ProfitVista - Sales Dashboard

## Overview
ProfitVista is a modern and interactive sales dashboard designed to provide insightful data visualization and analytics. Built with a **dark-themed UI** (black with turquoise blue highlights), it offers real-time sales metrics, customizable filters, detailed reports, and exportable data—all powered by **dummy data** for demonstration purposes.

## Features
### **1. Authentication & Homepage**
- Login/Signup modal with fields (name, password) and a **Test User** option.
- Homepage (for non-logged-in users) showcasing features, user feedback, and FAQs.
- Logout functionality (all authentication is hardcoded for demo purposes).

### **2. Header & Navigation**
- **Company Name:** ProfitVista
- User profile section with avatar, name, and settings dropdown.
- Navigation menu with sections: **Dashboard, Reports, Insights, Settings.**
- Date Range Selector for filtering data.

### **3. Key Metrics Overview (KPI Cards)**
- **Total Revenue**
- **Total Sales (Orders Processed)**
- **Monthly Growth (%)**
- **Conversion Rate (%)**
- **Customer Acquisition Rate**
- **Average Order Value**

### **4. Data Visualization**
- **Line Chart**: Revenue trends over time.
- **Bar Chart**: Sales performance across months.
- **Pie Chart**: Sales distribution by category.
- **Heatmap**: Peak sales hours.
- **Funnel Chart**: Customer conversion journey.

### **5. Filters & Customization**
- **Date range filter** (Today, Last 7 Days, Last Month, Custom).
- **Product category, Region/Country, Sales Representative filters.**

### **6. Revenue & Insights**
- Best-selling products with images.
- Top-performing sales representatives.
- High-value customers.
- Revenue breakdown by region.
- Low-performing products with improvement suggestions.

### **7. Detailed Sales Data Table**
- **Order ID, Date, Customer Name, Product, Quantity, Price.**
- **Payment Status** (Paid, Pending, Refunded).
- **Shipping Status** (Shipped, In-Transit, Delivered).

### **8. Alerts & Notifications**
- Real-time sales updates.
- Low stock alerts.
- High-demand product notifications.

## Tech Stack
- **Frontend:** React, Next.js, Tailwind CSS
- **Charts:** Recharts
- **Authentication:** Hardcoded (Test User functionality)
- **Hosting:** Vercel

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ProfitVista.git
   cd ProfitVista
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open in the browser:
   ```
   http://localhost:3000
   ```

## Deployment
ProfitVista is deployed on **Vercel**. Visit the live demo:
[Live Demo](https://profitvista.vercel.app)

## Contribution
Contributions are welcome! Feel free to fork the repository and create a pull request.

## License
This project is licensed under the MIT License.

