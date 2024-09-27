import type { Metadata } from "next";
import { Londrina_Solid, Manjari } from "next/font/google";
import "./globals.css";

const londrina_init = Londrina_Solid({
  subsets: ["latin"],
  weight: ["100", "300", "400", "900"],
  variable: "--font-londrina",
});

const manjari_init = Manjari({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-manjari",
});

export const metadata: Metadata = {
  title: {
    default: "Rovaniemi",
    template: "%s - Rovaniemi",
  },
  description: "Découvrez la magnifique ville de Rovaniemi en Laponie !",
  openGraph: {
    type: "website",
    url: "https://city-hazel-three.vercel.app/",
    locale: "en_US",
    title: "Rovaniemi",
    images: "https://res.cloudinary.com/e-tech-test/image/upload/v1727460716/Capture_sorwlo.png",
    description: "Découvrez la magnifique ville de Rovaniemi en Laponie !",
    siteName: "Rovaniemi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${londrina_init.variable} ${manjari_init.variable}`}>{children}</body>
    </html>
  );
}
