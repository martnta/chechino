// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container mx-auto px-6">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-t border-white/10">
          <div>
            <p className="font-bold text-lg mb-1">Chechino</p>
            <p className="text-neutral-500 text-sm">Kyokushin Karate & Fitness Academy</p>
            <p className="text-neutral-600 text-xs mt-4 text-serif italic">&ldquo;Discipline is a Must — Let love lead.&rdquo;</p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-medium mb-4">Navigate</p>
              <div className="flex flex-col gap-2">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/classes', label: 'Programs' },
                  { href: '/grading', label: 'Belt Journey' },
                  { href: '/about', label: 'About' },
                  { href: '/contact', label: 'Contact' },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-medium mb-4">Contact</p>
            <div className="space-y-2 text-sm text-neutral-400">
              <p>Bingu National Stadium, North Wing</p>
              <p>Lilongwe, Malawi</p>
              <p className="pt-2">+265 990 077 426</p>
              <a href="mailto:chechinoadojo@gmail.com" className="hover:text-white transition-colors block">chechinoadojo@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 text-center">
          <p className="text-neutral-600 text-xs">&copy; {new Date().getFullYear()} Chechino Kyokushin Karate & Fitness Academy</p>
        </div>
      </div>
    </footer>
  );
}
