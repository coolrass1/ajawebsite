'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Section } from './ui/Section';
import { Scale, Shield, Briefcase, Users, Gavel, FileText, Home, Building2, Landmark, BadgePoundSterling, AlertTriangle, ArrowRight } from 'lucide-react';

const practices = [
    {
        icon: Users,
        title: "Divorce & Family Law",
        href: "/services#divorce-family-law",
        description: "Compassionate guidance through matrimonial matters and family transitions."
    },
    {
        icon: Home,
        title: "Residential Property",
        href: "/services#residential-property",
        description: "Expert support for residential purchases, sales, and landlord-tenant disputes."
    },
    {
        icon: Building2,
        title: "Commercial Property",
        href: "/services#commercial-property",
        description: "Legal assistance for commercial purchases, sales, and lease negotiations."
    },
    {
        icon: Shield,
        title: "Employment Claims",
        href: "/services#employment-claims",
        description: "Protecting employee rights in disputes, discrimination, and contract issues."
    },
    {
        icon: Landmark,
        title: "Inheritance Act Claims",
        href: "/services#inheritance-claims",
        description: "Specialist advice on contested estates and fair provision for dependants."
    },
    {
        icon: AlertTriangle,
        title: "Insolvency",
        href: "/services#bankruptcy-insolvency",
        description: "Practical solutions for individuals and businesses facing financial distress."
    },
    {
        icon: Gavel,
        title: "Professional Negligence",
        href: "/services#professional-negligence",
        description: "Holding professionals accountable for negligence causing financial loss."
    },
    {
        icon: Briefcase,
        title: "Business Disputes",
        href: "/services#business-disputes",
        description: "Contractual and commercial dispute resolution for businesses of all sizes."
    },
    {
        icon: Scale,
        title: "Wills & Estate Planning",
        href: "/services#wills-estate-planning",
        description: "Expertise in Wills, Trusts, and precise estate administration."
    },
    {
        icon: BadgePoundSterling,
        title: "Debt Recovery",
        href: "/services#debt-recovery",
        description: "Effective strategies for recovering outstanding commercial and personal debts."
    },
    {
        icon: FileText,
        title: "Litigation Specialists",
        href: "/services#litigation",
        description: "Meticulous case preparation for complex litigation across all sectors."
    },
];

export default function PracticeAreas() {
    return (
        <section id="practice-areas" className="bg-white">
            <div className="py-20 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="text-[11px] font-bold uppercase tracking-[0.2em] text-deep-black/60 mb-4"
                >
                    Our Practice Areas
                </motion.p>
                <div className="flex justify-center mb-6">
                    <div className="h-px w-24 bg-accent" />
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-4xl md:text-5xl font-serif font-bold text-deep-black mb-4"
                >
                    Specialized Expertise. Meticulous Execution.
                </motion.h2>
            </div>

            <div className="flex flex-col md:flex-row min-h-[500px]">
                {/* Property Law */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 bg-[#c5a367]/30 p-12 md:p-20 flex flex-col items-center justify-center text-center"
                >
                    <div className="w-24 h-24 mb-8 flex items-center justify-center">
                        <Home className="w-16 h-16 text-deep-black" strokeWidth={1} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-deep-black mb-6 uppercase tracking-wider">Property Law</h3>
                    <p className="text-lg text-deep-black/70 max-w-sm mb-10 leading-relaxed">
                        Precision in residential and commercial property matters. Delivering results with old values and new ideas.
                    </p>
                    <Link
                        href="/services#property"
                        className="group inline-flex items-center gap-3 px-10 py-4 bg-deep-black text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-deep-black/90 transition-all shadow-xl"
                    >
                        Explore Property <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Litigation */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 bg-[#0a0a14] p-12 md:p-20 flex flex-col items-center justify-center text-center"
                >
                    <div className="w-24 h-24 mb-8 flex items-center justify-center">
                        <Scale className="w-16 h-16 text-accent" strokeWidth={1} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-wider">Litigation & Disputes</h3>
                    <p className="text-lg text-white/70 max-w-sm mb-10 leading-relaxed">
                        Meticulous preparation for every case. Committed to excellence in litigating our client's interests.
                    </p>
                    <Link
                        href="/services#litigation"
                        className="group inline-flex items-center gap-3 px-10 py-4 bg-accent text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-accent-light transition-all shadow-xl"
                    >
                        Explore Litigation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            <div className="py-24 max-w-[1360px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {practices.map((practice, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-8 border border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all group"
                        >
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                                <practice.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                            </div>
                            <h4 className="text-xl font-serif font-bold text-deep-black mb-4">{practice.title}</h4>
                            <p className="text-sm text-deep-black/60 leading-relaxed mb-6">
                                {practice.description}
                            </p>
                            <Link
                                href={practice.href}
                                className="text-[10px] font-bold uppercase tracking-widest text-accent flex items-center gap-2 hover:gap-3 transition-all"
                            >
                                Learn More <ArrowRight className="w-3 h-3" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
