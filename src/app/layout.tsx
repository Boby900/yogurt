import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import {
  ClerkProvider,
  
} from '@clerk/nextjs'


const inter = Inter({ subsets: ["greek"] });

export const metadata: Metadata = {
  title: "Yogurt",
  description: "Made by Boby",
};


//this is the new code my freind
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
