import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us – AJ Angelo Solicitors',
    description: 'Get in touch with AJ Angelo Solicitors. Free initial consultation. Call +44 20 8345 5678 or visit our Enfield office.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-off-white">
            <Navbar variant="dark" />

            {/* Hero Banner */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12 bg-deep-black text-white">
                <div className="max-w-[1440px] mx-auto">
                    <p className="text-link-blue font-medium tracking-widest uppercase text-sm mb-4">Get In Touch</p>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">Contact Us</h1>
                    <p className="text-xl text-white/70 max-w-2xl font-light leading-relaxed">
                        We offer free initial basic advice without any obligations. Get in touch today to discuss how we can help you.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 md:py-32 px-6 md:px-12">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left: Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-black mb-8">
                            How can we help?
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-12">
                            Whether you need advice on a family matter, property transaction, employment dispute, or any other legal issue, our experienced team is here to help. Contact us today for a free initial consultation.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-link-blue/10 rounded-full flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-link-blue" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-deep-black mb-1">Our Office</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Libra Business Centre, Gor-Ray House<br />
                                        758-760 Great Cambridge Road<br />
                                        Enfield, Middlesex, EN1 3GN
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-link-blue/10 rounded-full flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-link-blue" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-deep-black mb-1">Phone</h3>
                                    <a href="tel:+442083455678" className="text-link-blue hover:underline text-lg font-medium">
                                        +44 20 8345 5678
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-link-blue/10 rounded-full flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-link-blue" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-deep-black mb-1">Email</h3>
                                    <a href="mailto:info@ajasolicitors.com" className="text-link-blue hover:underline">
                                        info@ajasolicitors.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-link-blue/10 rounded-full flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-link-blue" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-deep-black mb-1">Opening Hours</h3>
                                    <p className="text-gray-500 text-sm">Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM</p>
                                    <p className="text-gray-500 text-sm">Saturday: By appointment</p>
                                    <p className="text-gray-500 text-sm">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="mt-12 rounded-xl overflow-hidden border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.123456!2d-0.0564!3d51.6523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLibra+Business+Centre+Enfield!5e0!3m2!1sen!2suk!4v1"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="AJ Angelo Solicitors Office Location"
                            />
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div>
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-serif font-bold text-deep-black mb-2">Send us an enquiry</h2>
                            <p className="text-gray-500 text-sm mb-8">Fill out the form below and we will get back to you as soon as possible.</p>
                            <ContactForm />
                            <p className="text-gray-400 text-xs mt-6 leading-relaxed">
                                The information you provide will only be used by us to administer your enquiry and any response. Use of this form does not create a solicitor-client relationship and information transmitted will not necessarily be treated as privileged or confidential. If you are a client, please get in touch with your usual firm contact directly for the most timely response.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
