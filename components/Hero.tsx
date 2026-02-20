'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-[#0a0a14] overflow-hidden pt-32 pb-24 md:py-40">
            <div className="max-w-[1360px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif font-bold text-white tracking-tight leading-[1.1] mb-8"
                    >
                        OLD VALUES. NEW IDEAS. ONE MISSION: <span className="text-accent">DELIVERING THE HIGHEST STANDARDS IN PROPERTY AND LITIGATION.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed font-medium"
                    >
                        AJA Solicitors provides meaningful, cost-effective, and commercial advice tailored to achieve your desired results as soon as possible with minimum stress.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-accent text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-accent-light transition-all shadow-lg"
                        >
                            Free Consultation
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative h-[600px] w-full"
                >
                    <Image
                        src="/lady-justice.png"
                        alt="Lady Justice"
                        fill
                        className="object-contain object-right"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
