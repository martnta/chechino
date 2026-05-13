// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Chechino Kyokushin Karate & Fitness Academy | Lilongwe, Malawi',
  description: 'Professional Kyokushin Karate training, fitness, self-defense, combat skills and teambuilding services in Lilongwe, Malawi. Affiliated with IKO Matsushima.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white min-h-screen flex flex-col`}>
        <Nav />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
