import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ClerkProvider,
  
} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster";

import { StrictMode } from 'react';
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
    <StrictMode>
    <ClerkProvider>
      <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > 
            <Header />
            {children}
            <Toaster />
            <Footer />
          </ThemeProvider>
          
        </body>
      </html>
    </ClerkProvider>
    </StrictMode>
  )
}
