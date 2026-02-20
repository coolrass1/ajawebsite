'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Users, Home, Building2, Shield, Landmark, AlertTriangle,
    Gavel, Briefcase, Scale, BadgePoundSterling, FileText,
    ArrowRight, Phone,
} from 'lucide-react';

const services = [
    {
        id: 'divorce-family-law',
        icon: Users,
        title: 'Divorce & Family Law',
        tagline: 'Separation isn\'t easy. We can help.',
        description: 'Family breakdowns can be one of the hardest experiences you will ever have to go through. We are approachable, down-to-earth and meticulous, handling divorces from complex cases involving private companies and international assets to basic divorces.',
        details: [
            'Amicable Separations & Divorces',
            'Collaborative Law & Mediation',
            'Contested Hearings & Court Representation',
            'Children Act Matters & Custody Arrangements',
            'Financial Settlements & Remedy Claims',
            'Domestic Violence & Emergency Injunctions',
            'Family Law for Non-Married Couples (TOLATA)',
            'Cohabitation Agreements',
            'Child Care Proceedings',
            'Pre-Nuptial & Post-Nuptial Agreements',
        ],
    },
    {
        id: 'residential-property',
        icon: Home,
        title: 'Residential Property Purchases & Sales',
        tagline: 'Smooth transactions from start to completion.',
        description: 'We provide comprehensive support for residential property purchases and sales, guiding you through every stage of conveyancing. Our team ensures your property transactions proceed smoothly, handling searches, contracts, and completion with precision.',
        details: [
            'Freehold & Leasehold Purchases',
            'Property Sales & Chain Management',
            'Remortgages & Transfers of Equity',
            'New Build Purchases',
            'Shared Ownership & Right to Buy',
            'Auction Property Transactions',
        ],
    },
    {
        id: 'commercial-property',
        icon: Building2,
        title: 'Commercial Property Purchases & Sales',
        tagline: 'Expert commercial conveyancing for businesses.',
        description: 'Our commercial property team handles acquisitions, disposals, and lease negotiations for businesses of all sizes. We provide clear, practical advice to protect your commercial interests and ensure transactions are completed efficiently.',
        details: [
            'Commercial Acquisitions & Disposals',
            'Lease Negotiations & Renewals',
            'Commercial Refinancing',
            'Development Site Purchases',
            'Portfolio Management',
            'Licence Agreements',
        ],
    },
    {
        id: 'employment-claims',
        icon: Shield,
        title: 'Employment Claims',
        tagline: 'Protecting your rights in the workplace.',
        description: 'We provide strategic legal representation for employees and employers across all aspects of employment law. Whether you are facing unfair dismissal, discrimination, or a contractual dispute, we fight to protect your interests.',
        details: [
            'Unfair & Wrongful Dismissal',
            'Discrimination Claims',
            'Redundancy Disputes',
            'Settlement Agreements',
            'Employment Tribunal Representation',
            'Restrictive Covenants & Non-Compete Clauses',
        ],
    },
    {
        id: 'inheritance-claims',
        icon: Landmark,
        title: 'Inheritance Act Claims',
        tagline: 'Ensuring fair provision for dependants.',
        description: 'When a loved one passes away and reasonable financial provision has not been made, we provide specialist advice on contested estates and claims under the Inheritance (Provision for Family and Dependants) Act 1975.',
        details: [
            'Claims by Spouses & Civil Partners',
            'Claims by Children & Dependants',
            'Cohabitant Claims',
            'Claims Against Estates',
            'Will Disputes & Contested Probate',
            'Variation of Trusts',
        ],
    },
    {
        id: 'bankruptcy-insolvency',
        icon: AlertTriangle,
        title: 'Bankruptcy & Insolvency',
        tagline: 'Navigating financial distress with practical solutions.',
        description: 'We help individuals and businesses navigate the complexities of financial distress, providing clear and practical advice on the options available. Our aim is to achieve the best possible outcome in difficult financial circumstances.',
        details: [
            'Individual Voluntary Arrangements (IVAs)',
            'Bankruptcy Petitions & Defence',
            'Company Voluntary Arrangements',
            'Administration & Liquidation',
            'Director Disqualification Proceedings',
            'Debt Restructuring Advice',
        ],
    },
    {
        id: 'professional-negligence',
        icon: Gavel,
        title: 'Professional Negligence',
        tagline: 'Holding professionals to account.',
        description: 'When a professional\'s negligence causes you financial loss or other harm, we hold them to account. We handle claims against solicitors, accountants, surveyors, financial advisers, and other professionals who have fallen below expected standards.',
        details: [
            'Solicitor Negligence Claims',
            'Accountant & Financial Adviser Claims',
            'Surveyor & Valuer Negligence',
            'Medical Professional Claims',
            'Insurance Broker Negligence',
            'Architect & Construction Professional Claims',
        ],
    },
    {
        id: 'business-disputes',
        icon: Briefcase,
        title: 'Business Disputes',
        tagline: 'Commercial dispute resolution for all businesses.',
        description: 'We provide robust legal representation for commercial and contractual disputes, from partnership disagreements and shareholder disputes to breach of contract claims. Our approach combines meticulous preparation with strategic advocacy.',
        details: [
            'Partnership & Shareholder Disputes',
            'Breach of Contract Claims',
            'Director Disputes & Removal',
            'Commercial Debt Claims',
            'Franchise Disputes',
            'Intellectual Property Disputes',
        ],
    },
    {
        id: 'wills-estate-planning',
        icon: Scale,
        title: 'Wills & Estate Planning',
        tagline: 'Experts in Wills, Trusts and Probate services.',
        description: 'We are experts in Wills, Trusts, and Probate services. Planning your legacy and navigating estate administration requires precision and care. Our specialists ensure your wishes are documented and your estate is managed according to your instructions.',
        details: [
            'Will Drafting & Review',
            'Trusts & Tax Planning',
            'Lasting Powers of Attorney',
            'Probate & Estate Administration',
            'Inheritance Tax Planning',
            'Court of Protection Applications',
        ],
    },
    {
        id: 'debt-recovery',
        icon: BadgePoundSterling,
        title: 'Debt Recovery',
        tagline: 'Effective strategies for recovering what you\'re owed.',
        description: 'We provide effective strategies for recovering outstanding debts for individuals and businesses. From initial demand through to enforcement proceedings, we take a firm but measured approach to maximise recovery.',
        details: [
            'Letters Before Action',
            'County Court & High Court Claims',
            'Statutory Demands',
            'Charging Orders & Attachment of Earnings',
            'Third Party Debt Orders',
            'Enforcement & Bailiff Action',
        ],
    },
    {
        id: 'landlord-tenant',
        icon: FileText,
        title: 'Residential & Commercial Landlord & Tenant Disputes',
        tagline: 'Resolving disputes between landlords and tenants.',
        description: 'We handle both residential and commercial landlord-tenant disputes, providing practical advice and strong representation. Whether you are a landlord seeking possession or a tenant defending your rights, we protect your position.',
        details: [
            'Possession Proceedings & Evictions',
            'Rent Arrears & Non-Payment Claims',
            'Disrepair Claims & Counterclaims',
            'Lease Forfeiture & Relief',
            'Service Charge Disputes',
            'Deposit Protection Disputes',
        ],
    },
];

export default function ServicesContent() {
    return (
        <>
            {/* Services List */}
            <section className="py-24 md:py-40 px-6 md:px-12">
                <div className="max-w-[1360px] mx-auto">
                    <div className="space-y-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: 0.04 }}
                                className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="p-8 md:p-12">
                                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                                        {/* Left: Icon, Title, Description */}
                                        <div className="lg:w-1/2">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="flex-shrink-0 p-3 bg-accent/10 rounded-xl text-accent">
                                                    <service.icon size={28} strokeWidth={1.5} />
                                                </div>
                                                <div>
                                                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                                                        {String(index + 1).padStart(2, '0')}
                                                    </span>
                                                    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-deep-black tracking-[-0.02em]">
                                                        {service.title}
                                                    </h2>
                                                </div>
                                            </div>
                                            <p className="text-muted italic mb-4">{service.tagline}</p>
                                            <p className="text-muted leading-relaxed">{service.description}</p>
                                        </div>

                                        {/* Right: Details List */}
                                        <div className="lg:w-1/2">
                                            <h3 className="text-sm font-semibold text-deep-black uppercase tracking-wider mb-4">
                                                What we cover
                                            </h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {service.details.map((detail) => (
                                                    <li key={detail} className="flex items-start gap-2 text-sm text-muted">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-40 px-6 md:px-12 bg-deep-black text-white">
                <div className="max-w-[1360px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <p className="text-accent font-medium tracking-[0.2em] uppercase text-[13px] mb-4">Free Advice</p>
                        <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-[-0.03em] mb-6">
                            Need legal advice?
                        </h2>
                        <p className="text-xl text-white/50 max-w-2xl mx-auto mb-10">
                            Please call to discuss your matter in general. We offer free initial basic advice without any obligation. Clear cost estimates with affordable payment plans.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group px-8 py-4 bg-accent text-white rounded-lg text-lg font-medium flex items-center gap-2 hover:-translate-y-px transition-transform"
                            >
                                Request a Free Consultation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="tel:+442083455678"
                                className="group px-8 py-4 border border-white/15 rounded-lg text-lg font-medium flex items-center gap-2 text-white/70 hover:text-white hover:border-white/30 transition-all"
                            >
                                <Phone className="w-4 h-4" />
                                +44 20 8345 5678
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
