/** @format */

import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
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

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans", // Use a specific variable name
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Sen Solar",
  description: "Sen Solar Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased bg-[#F9F9F9]`}>
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
