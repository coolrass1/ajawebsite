'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    variant?: 'light' | 'dark';
}

export default function Navbar({ variant = 'light' }: NavbarProps) {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const isDark = variant === 'dark' && !scrolled;

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
                scrolled ? "bg-off-white/80 backdrop-blur-md border-b border-gray-200/50" : "bg-transparent"
            )}
        >
            <nav className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                <Link href="/" className={clsx(
                    "text-xl font-serif font-bold tracking-tight z-50 relative transition-colors",
                    isDark ? "text-white" : "text-deep-black"
                )}>
                    AJ Angelo Solicitors
                </Link>

                {/* Desktop Menu */}
                <div className={clsx(
                    "hidden md:flex items-center space-x-8 text-sm font-medium transition-colors",
                    isDark ? "text-white/80" : "text-deep-black/80"
                )}>
                    <Link href="/about" className="hover:text-link-blue transition-colors">About Us</Link>
                    <Link href="/services" className="hover:text-link-blue transition-colors">Our Services</Link>
                    <Link href="/#team" className="hover:text-link-blue transition-colors">Our Team</Link>
                    <Link href="/contact" className="hover:text-link-blue transition-colors">Contact Us</Link>
                    <Link href="/contact" className="px-5 py-2 bg-link-blue text-white rounded-full hover:bg-link-blue/90 transition-colors">
                        Free Consultation
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={clsx(
                        "md:hidden z-50 relative transition-colors",
                        isDark ? "text-white" : "text-deep-black"
                    )}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-off-white z-40 flex flex-col items-center justify-center space-y-8 text-xl font-medium text-deep-black"
                    >
                        <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                        <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Our Services</Link>
                        <Link href="/#team" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 bg-link-blue text-white rounded-full">
                            Free Consultation
                        </Link>
                    </motion.div>
                )}
            </nav>
        </motion.header>
    );
}
