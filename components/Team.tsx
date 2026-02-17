'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const team = [
    {
        name: "Victoria Sterling",
        role: "Managing Partner",
        specialty: "Divorce & Family Law",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bio: "With over 20 years of experience, Victoria specializes in Divorce and complex Family Law matters, guiding clients through separation with empathy and resolve."
    },
    {
        name: "James Bennett",
        role: "Senior Partner",
        specialty: "Property & Commercial Law",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
        bio: "A property specialist assisting clients with residential and commercial purchases, sales, and landlord-tenant disputes across London and the Home Counties."
    },
    {
        name: "Elena Rodriguez",
        role: "Partner",
        specialty: "Litigation & Business Disputes",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
        bio: "Specializing in litigation and business disputes, Elena protects the interests of individuals and corporate clients with meticulous preparation."
    },
];

export default function Team() {
    return (
        <Section id="team" className="bg-off-white">
            <div className="mb-16 md:mb-24 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-link-blue font-medium tracking-widest uppercase text-sm mb-4"
                >
                    Meet Our Team
                </motion.p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-black mb-6">Our Partners</h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    Distinguished legal minds with decades of combined experience, committed to protecting your interests and achieving the best possible outcomes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {team.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="group"
                    >
                        <div className="relative overflow-hidden rounded-lg mb-6 aspect-[3/4]">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white text-sm opacity-90">{member.bio}</p>
                            </div>
                        </div>
                        <h3 className="text-2xl font-serif font-medium text-deep-black">{member.name}</h3>
                        <p className="text-link-blue font-medium mt-1">{member.role}</p>
                        <p className="text-gray-500 text-sm mt-1">{member.specialty}</p>
                    </motion.div>
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
                    href="/about"
                    className="group inline-flex items-center gap-2 px-8 py-4 border border-deep-black/20 rounded-full text-lg font-medium text-deep-black/80 hover:border-link-blue hover:text-link-blue transition-all"
                >
                    More About Our Firm
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>
        </Section>
    );
}
