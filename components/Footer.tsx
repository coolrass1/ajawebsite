import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="contact" className="bg-deep-black text-white py-24 px-6 md:px-12">
            <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
                <div className="md:col-span-1">
                    <Link href="/" className="text-3xl font-serif font-normal text-white block mb-6">
                        AJA Solicitors
                    </Link>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                        Old values with new ideas. Specialists in Civil and Divorce Law with over 50 years combined experience.
                    </p>
                    <p className="text-white/30 text-xs leading-relaxed">
                        We offer free initial basic advice without any obligations, clear cost estimates, and affordable payment plans.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Our Services</h4>
                    <ul className="space-y-3 text-white/50 text-sm">
                        <li><Link href="/services#divorce-family-law" className="hover:text-white transition-colors">Divorce & Family Law</Link></li>
                        <li><Link href="/services#residential-property" className="hover:text-white transition-colors">Residential Property</Link></li>
                        <li><Link href="/services#commercial-property" className="hover:text-white transition-colors">Commercial Property</Link></li>
                        <li><Link href="/services#employment-claims" className="hover:text-white transition-colors">Employment Claims</Link></li>
                        <li><Link href="/services#wills-estate-planning" className="hover:text-white transition-colors">Wills & Estate Planning</Link></li>
                        <li><Link href="/services#business-disputes" className="hover:text-white transition-colors">Business Disputes</Link></li>
                        <li><Link href="/services#debt-recovery" className="hover:text-white transition-colors">Debt Recovery</Link></li>
                        <li><Link href="/services#bankruptcy-insolvency" className="hover:text-white transition-colors">Bankruptcy & Insolvency</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Office</h4>
                    <address className="not-italic text-white/50 text-sm space-y-4">
                        <p>Libra Business Centre, Gor-Ray House<br />758-760 Great Cambridge Road<br />Enfield EN1 3GN</p>
                        <p>
                            <a href="tel:+442083455678" className="hover:text-white transition-colors font-medium">+44 20 8345 5678</a>
                            <br />
                            <a href="mailto:info@ajasolicitors.com" className="hover:text-white transition-colors">info@ajasolicitors.com</a>
                        </p>
                    </address>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Stay Connected</h4>
                    <div className="flex flex-col gap-3 text-sm">
                        <a href="https://www.facebook.com/AJASolicitors" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">Facebook</a>
                        <a href="https://twitter.com/ajasolicitors" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">Twitter</a>
                        <a href="https://www.linkedin.com/company/aj-angelo-solicitors" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">LinkedIn</a>
                    </div>
                    <div className="mt-8">
                        <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Opening Hours</h4>
                        <p className="text-white/50 text-sm">Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM</p>
                        <p className="text-white/50 text-sm">Saturday: By appointment</p>
                        <p className="text-white/50 text-sm">Sunday: Closed</p>
                    </div>
                </div>
            </div>

            <div className="max-w-[1360px] mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
                <p>&copy; {new Date().getFullYear()} AJA Solicitors. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white/60 transition-colors">Terms of Service</Link>
                    <Link href="#" className="hover:text-white/60 transition-colors">Complaints Procedure</Link>
                </div>
            </div>
        </footer>
    );
}
