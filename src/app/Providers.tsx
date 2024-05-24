"use client"

import React from 'react'

import {ThemeProvider} from "next-themes"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ThemeProvider defaultTheme="system" attribute="class">
        <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen">
          {children}
        </div>
      </ThemeProvider>
    </div>
  );
}
