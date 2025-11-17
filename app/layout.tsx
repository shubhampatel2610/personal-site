import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import "./globals.css";
import 'primeicons/primeicons.css';
import NavbarComponent from "@/components/commonComponents/NavbarComponent/NavbarComponent";

const customFonts = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham's Space",
  description:
    "This is Shubham's personal website built with Next.js, Tailwind CSS, and PrimeReact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${customFonts.className} antialiased layoutStyles`}>
        <PrimeReactProvider>
          <NavbarComponent />
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
