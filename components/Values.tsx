'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Section } from './ui/Section';
import { Clock, PoundSterling, Award, ArrowRight } from 'lucide-react';

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
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.5"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <Section id="about" className="bg-deep-black text-white min-h-[80vh] flex items-center justify-center overflow-hidden">
            <div ref={containerRef} className="max-w-5xl mx-auto text-center relative z-10">
                <motion.h2
                    style={{ opacity, y }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-20"
                >
                    Old values with <span className="text-link-blue">new ideas</span>.
                    <br /><br />
                    Meticulous in <span className="text-off-white">preparation</span>.
                    <br /><br />
                    Committed to <span className="text-link-blue">excellence</span>.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
                >
                    {advantages.map((adv) => (
                        <div key={adv.label} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <adv.icon size={32} className="text-link-blue mb-4 mx-auto" strokeWidth={1.5} />
                            <p className="text-4xl font-bold text-white mb-1">{adv.stat}</p>
                            <p className="text-link-blue font-medium text-sm uppercase tracking-wider mb-3">{adv.label}</p>
                            <p className="text-white/60 text-sm leading-relaxed">{adv.description}</p>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12"
                >
                    <Link
                        href="/about"
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-link-blue text-white rounded-full text-lg font-medium hover:bg-link-blue/90 transition-all"
                    >
                        Learn More About Us
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* Background gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[128px] pointer-events-none" />
        </Section>
    );
}
