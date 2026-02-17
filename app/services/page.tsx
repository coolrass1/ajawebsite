import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesContent from '@/components/ServicesContent';

export const metadata: Metadata = {
    title: 'Our Services – AJ Angelo Solicitors',
    description: 'Explore the full range of professional legal services offered by AJ Angelo Solicitors, from divorce and family law to property, litigation, and commercial disputes.',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-off-white">
            <Navbar variant="dark" />

            {/* Hero Banner */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12 bg-deep-black text-white">
                <div className="max-w-[1440px] mx-auto">
                    <p className="text-link-blue font-medium tracking-widest uppercase text-sm mb-4">What We Do</p>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">Our Services</h1>
                    <p className="text-xl text-white/70 max-w-3xl font-light leading-relaxed">
                        The range of professional services we offer. Please call to discuss in general, if you have any queries or wish to seek basic free advice &mdash; without obligation.
                    </p>
                </div>
            </section>

            <ServicesContent />
            <Footer />
        </main>
    );
}
