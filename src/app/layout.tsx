import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/custom/organisms/Header";
import Footer from "@/components/custom/organisms/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Neighbourly",
  description:
    "Neighbourly is a B2C rental platform that helps you find verified homes, apartments, and rooms for rent with ease. Explore listings, connect directly with property owners or agents, and rent your next home confidently — all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          {children}
          <Toaster richColors position="top-right" />
          <Footer />
        </main>
      </body>
    </html>
  );
}
