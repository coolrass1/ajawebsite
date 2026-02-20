'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Scale, Users, Briefcase, Shield, Clock, PoundSterling, Award, ArrowRight, ExternalLink } from 'lucide-react';

const stats = [
    { value: '50+', label: 'Years Combined Experience' },
    { value: '11', label: 'Practice Areas' },
    { value: '1000+', label: 'Clients Served' },
    { value: 'Free', label: 'Initial Consultation' },
];

const advantages = [
    {
        icon: Clock,
        title: 'Free Initial Advice',
        description: 'We offer free initial basic advice without any obligations. We listen first, then advise on your best course of action.',
    },
    {
        icon: PoundSterling,
        title: 'Clear Cost Estimates',
        description: 'We provide transparent cost estimates upfront with affordable payment plans tailored to your individual circumstances.',
    },
    {
        icon: Award,
        title: 'Specialist Consultants',
        description: 'Over 50 years combined experience with strong consultant specialists in niche areas of law, tax, and trusts.',
    },
    {
        icon: Shield,
        title: 'Meticulous Preparation',
        description: 'Every case is prepared with the utmost care and attention to detail, ensuring the best possible outcomes for our clients.',
    },
];

const values = [
    {
        icon: Users,
        title: 'Client-Centred Approach',
        description: 'We serve small to large corporate companies, professionals, and vulnerable individuals requiring legal representation. Every client receives personal attention.',
    },
    {
        icon: Scale,
        title: 'Amicable Resolution',
        description: 'We encourage amicable resolution of matters, viewing litigation as a last resort. Most clients want to resolve issues peacefully and we help them do so.',
    },
    {
        icon: Briefcase,
        title: 'Practical & Pro-Active',
        description: 'We work to achieve desired results in a positive, practical, pro-active and friendly way, offering meaningful, cost-effective and commercial advice.',
    },
];

export default function AboutContent() {
    return (
        <>
            {/* Introduction */}
            <section className="py-24 md:py-40 px-6 md:px-12">
                <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-deep-black tracking-[-0.03em] mb-6">
                            Comprehensive Legal Services with a Personal Touch
                        </h2>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>
                                AJ Angelo Solicitors offers a comprehensive range of legal services, combining old values with new ideas. We are specialists in property and litigation matters, with deep expertise across family law, employment, wills, and commercial disputes.
                            </p>
                            <p>
                                Our firm serves small to large corporate companies, professionals, and vulnerable individuals requiring legal representation. We believe every client deserves the highest quality of service, regardless of the size or complexity of their matter.
                            </p>
                            <p>
                                We are meticulous in our preparation and work to achieve desired results in a positive, practical, pro-active and friendly way. Our aim is to offer meaningful, cost-effective and commercial advice designed to minimise stress and anxiety for our clients.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.12 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.06 * index }}
                                className="bg-white p-8 rounded-xl shadow-sm text-center"
                            >
                                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</p>
                                <p className="text-muted text-sm font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-24 md:py-40 px-6 md:px-12 bg-white">
                <div className="max-w-[1360px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="mb-16"
                    >
                        <p className="text-muted font-medium tracking-[0.2em] uppercase text-[13px] mb-4">How We Work</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-deep-black tracking-[-0.03em] mb-6">Our Approach</h2>
                        <p className="text-xl text-muted max-w-2xl">
                            We encourage amicable resolution, viewing litigation as a last resort. When clients come to us, they have often reached an impasse &mdash; and we help them find the way forward.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                                className="p-8 rounded-xl bg-white shadow-sm"
                            >
                                <div className="mb-6 text-accent">
                                    <value.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-deep-black mb-3">{value.title}</h3>
                                <p className="text-muted leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Advantages */}
            <section className="py-24 md:py-40 px-6 md:px-12 bg-deep-black text-white">
                <div className="max-w-[1360px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="mb-16 text-center"
                    >
                        <p className="text-accent font-medium tracking-[0.2em] uppercase text-[13px] mb-4">Why Choose Us</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-[-0.03em] mb-6">Our Advantages</h2>
                        <p className="text-xl text-white/50 max-w-2xl mx-auto">
                            We combine decades of experience with a client-first approach to deliver results that matter.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {advantages.map((adv, index) => (
                            <motion.div
                                key={adv.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                                className="p-8 rounded-xl bg-white/[0.04] text-center"
                            >
                                <div className="mb-4 inline-block">
                                    <adv.icon size={28} className="text-accent" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3">{adv.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{adv.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Complaints Procedure */}
            <section className="py-24 md:py-40 px-6 md:px-12 bg-surface">
                <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-muted font-medium tracking-[0.2em] uppercase text-[13px] mb-4">Transparency</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-deep-black tracking-[-0.03em] mb-6">Complaints Procedure</h2>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>
                                We are committed to providing a high-quality legal service. If something goes wrong, we want to know about it so we can resolve it promptly and learn from any mistakes.
                            </p>
                            <p>
                                If you have a concern, please raise it in the first instance with the partner or department head responsible for your matter. If you wish to make a formal complaint, this should be directed to the firm principal.
                            </p>
                            <p>
                                If we are unable to resolve your complaint to your satisfaction, you may refer it to the Legal Ombudsman. The Legal Ombudsman investigates problems that clients have experienced with lawyers.
                            </p>
                        </div>
                        <div className="mt-6 p-6 bg-white rounded-xl">
                            <p className="text-sm font-semibold text-deep-black mb-2">Legal Ombudsman</p>
                            <p className="text-sm text-muted">Phone: 0300 555 0333</p>
                            <p className="text-sm text-muted">
                                Website:{' '}
                                <a
                                    href="https://www.legalombudsman.org.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent hover:underline inline-flex items-center gap-1"
                                >
                                    www.legalombudsman.org.uk
                                    <ExternalLink size={12} />
                                </a>
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.12 }}
                        className="flex items-center"
                    >
                        <div className="bg-surface rounded-xl p-10 md:p-14 w-full border border-border">
                            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-deep-black tracking-[-0.02em] mb-4">
                                Ready to discuss your legal matter?
                            </h3>
                            <p className="text-muted mb-8 leading-relaxed">
                                Get in touch today for a free initial consultation. Our experienced team will listen to your situation and advise on the best course of action.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="group px-8 py-4 bg-accent text-white rounded-lg text-lg font-medium flex items-center justify-center gap-2 hover:-translate-y-px transition-transform"
                                >
                                    Contact Us
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href="tel:+442083455678"
                                    className="px-8 py-4 border border-deep-black/15 rounded-lg text-lg font-medium text-deep-black/80 hover:-translate-y-px transition-all text-center"
                                >
                                    +44 20 8345 5678
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
