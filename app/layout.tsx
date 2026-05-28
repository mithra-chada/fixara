import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fixara — Industrial expertise, dispatched.",
  description: "Fixara connects MSME manufacturers with verified skilled technicians for machine repair and industrial servicing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-canvas text-ink font-body min-h-screen flex flex-col pt-[44px]">
        <NavBar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
