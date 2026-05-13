// components/Nav.js
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/classes', label: 'Programs' },
    { href: '/grading', label: 'Belt Journey' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <motion.nav
          className={`transition-all duration-500 ${scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-black/5 border border-neutral-200/60'
            : 'bg-white/10 backdrop-blur-sm border border-white/10'
            } rounded-lg px-3 py-2`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 28, delay: 0.1 }}
        >
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-3 pl-4 pr-6">
              <Image src="/Kyokushinkai.svg" alt="logo" width={20} height={20} />
              <span className={`text-base font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-neutral-900' : 'text-white'}`}>
                Chechino
              </span>
            </Link>

            <div className={`hidden md:flex items-center h-10 border-l ${scrolled ? 'border-neutral-200' : 'border-white/15'} pl-4 gap-2`}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${scrolled
                    ? 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              className="md:hidden focus:outline-none px-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className={`w-5 h-5 transition-colors ${scrolled ? 'text-neutral-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed right-0 top-0 h-full w-72 bg-neutral-950"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="p-8">
                <button
                  className="mb-10 text-neutral-400 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-white/70 hover:text-white text-lg font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
