import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import "./globals.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import NavbarComponent from "@/components/components/NavbarComponent/NavbarComponent";
import AppConstants from "@/constant/AppConstants";

const customFonts = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = AppConstants.APP_METADATA;

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
