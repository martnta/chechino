// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/classes', label: 'Classes' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gray-300">
                    {item.label}
                  </Link>
                </li>
              ))}
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
  );
}
