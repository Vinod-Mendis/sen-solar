/** @format */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import FooterComponent from "./components/FooterComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sen Solar",
  description: "Sen Solar Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="max-w-7xl mx-auto">
          <NavBar />
        </header>
        {children}
        <footer>
          <FooterComponent />
        </footer>
      </body>
    </html>
  );
}
