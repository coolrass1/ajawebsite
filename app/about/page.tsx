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
            <section className="pt-36 pb-16 md:pt-44 md:pb-20 px-6 md:px-12 bg-gradient-to-b from-deep-black to-deep-black/95 text-white">
                <div className="max-w-[1360px] mx-auto">
                    <p className="text-accent font-medium tracking-[0.2em] uppercase text-[13px] mb-4">Who We Are</p>
                    <h1 className="text-4xl md:text-6xl font-serif font-semibold tracking-[-0.03em] mb-6">About Us</h1>
                    <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed">
                        Old values with new ideas. A trusted legal practice offering comprehensive services with meticulous preparation and a commitment to excellence.
                    </p>
                </div>
            </section>

            <AboutContent />
            <Footer />
        </main>
    );
}
