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
        description: "Separation isn't easy. Family breakdowns can be one of the hardest experiences. We provide compassionate, expert guidance through complex family transitions and matrimonial matters."
    },
    {
        icon: Home,
        title: "Residential Property",
        href: "/services#residential-property",
        description: "Comprehensive support for residential purchases and sales, ensuring your property transactions proceed smoothly from start to completion."
    },
    {
        icon: Building2,
        title: "Commercial Property",
        href: "/services#commercial-property",
        description: "Expert legal assistance for commercial property purchases, sales, and lease negotiations for businesses of all sizes."
    },
    {
        icon: Shield,
        title: "Employment Claims",
        href: "/services#employment-claims",
        description: "Protecting your rights in the workplace with strategic legal representation for unfair dismissal, discrimination, and contractual disputes."
    },
    {
        icon: Landmark,
        title: "Inheritance Act Claims",
        href: "/services#inheritance-claims",
        description: "Specialist advice on contested estates and claims under the Inheritance Act, ensuring fair provision for dependants."
    },
    {
        icon: AlertTriangle,
        title: "Bankruptcy & Insolvency",
        href: "/services#bankruptcy-insolvency",
        description: "Navigating financial distress with practical solutions for individuals and businesses facing insolvency proceedings."
    },
    {
        icon: Gavel,
        title: "Professional Negligence",
        href: "/services#professional-negligence",
        description: "Holding professionals to account when their negligence causes you financial loss or other harm."
    },
    {
        icon: Briefcase,
        title: "Business Disputes",
        href: "/services#business-disputes",
        description: "Commercial and contractual dispute resolution for partnership disagreements, shareholder disputes, and breach of contract."
    },
    {
        icon: Scale,
        title: "Wills & Estate Planning",
        href: "/services#wills-estate-planning",
        description: "We are experts in Wills, Trusts, and Probate services. Planning your legacy and navigating estate administration with precision and care."
    },
    {
        icon: BadgePoundSterling,
        title: "Debt Recovery",
        href: "/services#debt-recovery",
        description: "Effective strategies for recovering outstanding debts, from initial demand through to enforcement proceedings."
    },
    {
        icon: FileText,
        title: "Landlord & Tenant Disputes",
        href: "/services#landlord-tenant",
        description: "Resolving residential and commercial landlord-tenant disputes including evictions, rent arrears, and disrepair claims."
    },
];

export default function PracticeAreas() {
    return (
        <Section id="practice-areas" className="bg-white">
            <div className="mb-16 md:mb-24">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-link-blue font-medium tracking-widest uppercase text-sm mb-4"
                >
                    Our Services
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-serif font-bold text-deep-black mb-6"
                >
                    Areas of Practice
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl text-gray-500 max-w-2xl"
                >
                    We provide expert legal assistance across eleven specialist practice areas, delivering clear and practical advice.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: 64 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-1 bg-link-blue mt-6"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {practices.map((practice, index) => (
                    <Link key={practice.title} href={practice.href}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 bg-off-white/30 rounded-xl cursor-pointer h-full"
                        >
                            <div className="mb-6 inline-block p-4 bg-white rounded-full text-deep-black group-hover:bg-link-blue group-hover:text-white transition-colors duration-300">
                                <practice.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif font-semibold text-deep-black mb-3">{practice.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">{practice.description}</p>
                            <span className="text-link-blue text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                Learn more <ArrowRight size={14} />
                            </span>
                        </motion.div>
                    </Link>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 text-center"
            >
                <Link
                    href="/services"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-deep-black text-white rounded-full text-lg font-medium hover:bg-deep-black/90 transition-all"
                >
                    View All Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>
        </Section>
    );
}
