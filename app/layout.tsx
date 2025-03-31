import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elia Mkumbo Portfolio",
  description: "Full Stack Developer Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Elia Mkumbo Portfolio",
    description: "Full Stack Developer Portfolio",
    url: "https://mkumboelia.com",
    siteName: "Elia Mkumbo Portfolio",
    images: [
      {
        url: "/profile-2.jpeg",
        width: 1200,
        height: 630,
        alt: "Elia Mkumbo Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark text-white`}>
        {children}
      </body>
    </html>
  );
}
