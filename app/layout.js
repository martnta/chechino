import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: 'Chechino Dojo',
  description: 'Learn karate and self-defense at Chechino Dojo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <nav className="bg-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">Chechino Dojo</Link>
            <div className="space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/classes" className="text-gray-600 hover:text-gray-900">Classes</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-800 text-white py-10">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul>
                  <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                  <li><Link href="/classes" className="hover:text-gray-300">Classes</Link></li>
                  <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
                  <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p>Email: info@chechinodojo.com</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>&copy; 2024 Chechino Dojo. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}