'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
    const [agreed, setAgreed] = useState(false);

    return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-deep-black mb-2">
                    Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-deep-black placeholder-muted focus:outline-none focus:border-deep-black transition-colors"
                    placeholder="Your full name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-deep-black mb-2">
                    Email <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-deep-black placeholder-muted focus:outline-none focus:border-deep-black transition-colors"
                    placeholder="your@email.com"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-deep-black mb-2">
                    Phone
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-deep-black placeholder-muted focus:outline-none focus:border-deep-black transition-colors"
                    placeholder="+44 ..."
                />
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-deep-black mb-2">
                    Subject <span className="text-red-500">*</span>
                </label>
                <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-deep-black focus:outline-none focus:border-deep-black transition-colors"
                >
                    <option value="">Select a subject...</option>
                    <option value="divorce-family">Divorce & Family Law</option>
                    <option value="residential-property">Residential Property</option>
                    <option value="commercial-property">Commercial Property</option>
                    <option value="employment">Employment Claims</option>
                    <option value="inheritance">Inheritance Act Claims</option>
                    <option value="bankruptcy">Bankruptcy & Insolvency</option>
                    <option value="negligence">Professional Negligence</option>
                    <option value="business-disputes">Business Disputes</option>
                    <option value="wills">Wills & Estate Planning</option>
                    <option value="debt-recovery">Debt Recovery</option>
                    <option value="landlord-tenant">Landlord & Tenant Disputes</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-deep-black mb-2">
                    Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-deep-black placeholder-muted focus:outline-none focus:border-deep-black transition-colors resize-none"
                    placeholder="Please describe how we can help you..."
                />
            </div>

            <div className="flex items-start gap-3">
                <input
                    type="checkbox"
                    id="terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-border text-accent focus:ring-accent"
                />
                <label htmlFor="terms" className="text-sm text-muted">
                    I have read and accept the <a href="#" className="text-accent hover:underline">terms and conditions</a> and understand that this form does not create a solicitor-client relationship. <span className="text-red-500">*</span>
                </label>
            </div>

            <button
                type="submit"
                disabled={!agreed}
                className="group w-full px-8 py-4 bg-accent text-white rounded-lg text-lg font-medium flex items-center justify-center gap-2 hover:-translate-y-px transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
                Send Enquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </form>
    );
}
