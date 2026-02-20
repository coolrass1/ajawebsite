'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import clsx from 'clsx';
import { Menu, X, Scale } from 'lucide-react';

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
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
                scrolled ? "bg-white border-b border-border" : "bg-transparent"
            )}
        >
            <nav className="max-w-[1360px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 z-50 relative">
                    <div className={clsx(
                        "w-10 h-10 border-2 rounded-full flex items-center justify-center transition-colors",
                        isDark ? "border-white" : "border-deep-black"
                    )}>
                        <Scale className={clsx("w-6 h-6 transition-colors", isDark ? "text-white" : "text-deep-black")} />
                    </div>
                    <span className={clsx(
                        "text-sm font-serif font-bold uppercase tracking-[0.2em] transition-colors",
                        isDark ? "text-white" : "text-deep-black"
                    )}>
                        AJA Solicitors
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className={clsx(
                    "hidden xl:flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors",
                    isDark ? "text-white/80" : "text-deep-black/80"
                )}>
                    <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-accent transition-colors">About</Link>
                    <Link href="#practice-areas" className="hover:text-accent transition-colors">Practice Area</Link>
                    <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
                    <Link href="/results" className="hover:text-accent transition-colors">Case Result</Link>
                    <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
                </div>

                <div className="hidden md:flex xl:hidden items-center">
                    {/* Placeholder or reduced content if needed for middle screens */}
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <Link href="/contact" className="px-8 py-2.5 bg-accent text-white text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-accent-light transition-colors">
                        Free Consultation
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={clsx(
                        "xl:hidden z-50 relative transition-colors",
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
                        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10 text-2xl font-serif font-medium text-deep-black"
                    >
                        <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                        <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Our Services</Link>
                        <Link href="/#team" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-8 py-3.5 bg-accent text-white rounded-lg text-lg font-sans font-medium">
                            Free Consultation
                        </Link>
                    </motion.div>
                )}
            </nav>
        </motion.header>
    );
}
