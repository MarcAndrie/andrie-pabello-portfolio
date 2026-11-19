import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Andrie Pabello | Data Analyst",
    template: "%s | Andrie Pabello",
  },
  description:
    "Explore the portfolio of Andrie Pabello, a Data Analyst and BI Enthusiast specializing in SQL, Python, Power BI, Excel, and data analytics projects.",

  openGraph: {
    title: "Andrie Pabello | Data Analyst",
    description:
      "Turning data into meaningful insights. Explore my analytics projects, technical skills, and experience.",
    siteName: "Andrie Pabello Portfolio",
    locale: "en_PH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Andrie Pabello | Data Analyst",
    description:
      "Explore my data analytics projects, skills, and experience.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
