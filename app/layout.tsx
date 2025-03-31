"use client"; // Add this directive to mark the file as a Client Component

import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { Provider } from "react-redux"; // Import Redux Provider
import { store } from "@/store"; // Import your Redux store
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "ProfitVista - Sales Dashboard",
//   description: "A modern sales dashboard for tracking performance and insights",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider store={store}> {/* Wrap with Redux Provider */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}

