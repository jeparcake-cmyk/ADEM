import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADEM Plumbing & Heating | Trusted Local Plumber",
  description:
    "ADEM Plumbing and Heating – professional, reliable plumbing and heating services. Boiler installs, repairs, emergency call-outs. Checkatrade approved.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
