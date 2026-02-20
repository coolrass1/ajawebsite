'use client';

import Image from 'next/image';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

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
                    transition={{ duration: 0.3 }}
                    className="text-muted font-medium tracking-[0.2em] uppercase text-[13px] mb-4"
                >
                    Meet Our Team
                </motion.p>
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-deep-black tracking-[-0.03em] mb-6">Our Partners</h2>
                <p className="text-xl text-muted max-w-2xl mx-auto">
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
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/5]">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition-all duration-700 group-hover:brightness-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white text-sm opacity-90">{member.bio}</p>
                            </div>
                        </div>
                        <h3 className="text-2xl font-serif font-normal text-deep-black">{member.name}</h3>
                        <p className="text-accent font-medium mt-1">{member.role}</p>
                        <p className="text-muted text-sm mt-1">{member.specialty}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
