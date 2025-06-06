import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/custom/organisms/Header";
import Footer from "@/components/custom/organisms/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Neighbourly",
  description:
    "Neighbourly is your trusted real estate platform to discover, list, and manage residential properties with ease. Explore verified listings, connect with homeowners and agents, and find your perfect home in just a few clicks.",
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
