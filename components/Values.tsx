'use client';

import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Clock, PoundSterling, Award } from 'lucide-react';

const advantages = [
    {
        icon: Clock,
        stat: "Free",
        label: "Initial Consultation",
        description: "Get free initial basic advice without any obligations. We listen first, then advise on your best course of action."
    },
    {
        icon: PoundSterling,
        stat: "Clear",
        label: "Cost Estimates",
        description: "We provide transparent cost estimates upfront with affordable payment plans tailored to your circumstances."
    },
    {
        icon: Award,
        stat: "50+",
        label: "Years Combined Experience",
        description: "Our specialist consultants bring over 50 years combined experience in the law across all our practice areas."
    },
];

export default function Values() {
    return (
        <section id="about" className="relative bg-deep-black text-white overflow-hidden">
            {/* Grain texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="py-24 md:py-40 px-6 md:px-12 max-w-[1360px] mx-auto relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold leading-tight tracking-[-0.03em] mb-20"
                    >
                        Old values. <span className="text-accent">New ideas.</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.12 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
                    >
                        {advantages.map((adv) => (
                            <div key={adv.label} className="p-8 rounded-xl bg-white/[0.04]">
                                <adv.icon size={32} className="text-accent mb-4 mx-auto" strokeWidth={1.5} />
                                <p className="text-4xl font-bold text-white mb-1">{adv.stat}</p>
                                <p className="text-accent font-medium text-sm uppercase tracking-wider mb-3">{adv.label}</p>
                                <p className="text-white/50 text-sm leading-relaxed">{adv.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
