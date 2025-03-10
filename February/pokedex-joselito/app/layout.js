import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pokedex - Joselito",
  description: "Pokedex del master de Joselito",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
        {children}
      </>
    </html>
  );
}
