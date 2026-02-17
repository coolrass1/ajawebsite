'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-off-white pt-20">
            <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-link-blue font-medium tracking-widest uppercase text-sm mb-6"
                >
                    Civil & Divorce Law Specialists
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-deep-black tracking-tight mb-6"
                >
                    Justice with Integrity.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-deep-black/70 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
                >
                    Protecting your interests with old values and new ideas. Over 50 years combined experience delivering expert legal advice across divorce, property, litigation, and commercial law.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/contact"
                        className="group px-8 py-4 bg-link-blue text-white rounded-full text-lg font-medium flex items-center gap-2 hover:bg-link-blue/90 transition-all hover:scale-105"
                    >
                        Request a Free Consultation
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="tel:+442083455678"
                        className="group px-8 py-4 border border-deep-black/20 rounded-full text-lg font-medium flex items-center gap-2 text-deep-black/80 hover:border-link-blue hover:text-link-blue transition-all"
                    >
                        <Phone className="w-4 h-4" />
                        +44 20 8345 5678
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-sm text-deep-black/50"
                >
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        Free initial advice &mdash; no obligations
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        Clear cost estimates upfront
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        Affordable payment plans
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
