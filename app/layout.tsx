import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import "./globals.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import NavbarComponent from "@/components/components/NavbarComponent/NavbarComponent";
import AppConstants from "@/constant/AppConstants";

const bodyFont = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const displayFont = Space_Grotesk({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const monoFont = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

// export const metadata: Metadata = AppConstants.APP_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="86e7790571139462" />
      </head>
      <body className={`${bodyFont.className} ${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} antialiased layoutStyles`}>
        <PrimeReactProvider>
          <NavbarComponent />
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
