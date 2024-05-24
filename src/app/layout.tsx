import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoviBuzz",
  description: "Movie App with TMDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     
       <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header/>
          <NavBar/>
          <Suspense>
            <SearchBox/>
          </Suspense>
          {children}
        </Providers>
        
      </body>
      </html>
     
  );
}
