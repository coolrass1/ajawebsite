'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1360px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        {/* Overlapping Images */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10 w-4/5 aspect-[4/5] rounded-lg overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/lady-justice.png"
                                alt="Lady Justice"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="absolute -bottom-10 -right-4 z-20 w-3/5 aspect-square rounded-lg overflow-hidden shadow-2xl border-8 border-white"
                        >
                            <Image
                                src="/office.png"
                                alt="Law Office"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-deep-black/60">About the Firm</span>
                            <div className="h-px w-24 bg-accent" />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-serif font-bold text-deep-black mb-10 leading-[1.1]"
                        >
                            ONE FIRM. <span className="text-accent">TWO DISTINCT YET</span> COMPLEMENTARY MINDS
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg text-deep-black/70 mb-10 leading-relaxed"
                        >
                            AJA Solicitors was founded by two professionals with different backgrounds but a united vision. We believe that the best results come from the synergy of diverse perspectives and shared values.
                        </motion.p>

                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <li className="flex items-start gap-4 text-deep-black/80 font-medium italic">
                                <span className="text-accent">•</span>
                                What sets us apart strengthens us.
                            </li>
                            <li className="flex items-start gap-4 text-deep-black/80 font-medium italic">
                                <span className="text-accent">•</span>
                                What connects us defines us.
                            </li>
                        </motion.ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
