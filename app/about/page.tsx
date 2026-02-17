import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
    title: 'About Us – AJ Angelo Solicitors',
    description: 'Learn about AJ Angelo Solicitors. Over 50 years combined experience offering comprehensive legal services with old values and new ideas.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-off-white">
            <Navbar variant="dark" />

            {/* Hero Banner */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12 bg-deep-black text-white">
                <div className="max-w-[1440px] mx-auto">
                    <p className="text-link-blue font-medium tracking-widest uppercase text-sm mb-4">Who We Are</p>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">About Us</h1>
                    <p className="text-xl text-white/70 max-w-2xl font-light leading-relaxed">
                        Old values with new ideas. A trusted legal practice offering comprehensive services with meticulous preparation and a commitment to excellence.
                    </p>
                </div>
            </section>

            <AboutContent />
            <Footer />
        </main>
    );
}
