import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Home from "../app/(root)/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SOS Digital Library",
  description:
    "This is a modern Digital website where you can access numerous educational books, including SAT's coding Books, Exam and work sheets, Art Books, And different fiction books for free online in one platform.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${poppins.className} w-full`}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
