import { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants/company";

export const metadata: Metadata = {
    title: `Terms of Service - ${COMPANY.name}`,
    description: `Terms of Service for ${COMPANY.name}. Read our terms and conditions for using our services.`,
};

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-gradient-to-br from-dark via-slate-900 to-dark text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl font-black mb-4">Terms of Service</h1>
                        <p className="text-white/70">Last updated: January 2026</p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 flex-grow">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                        <p className="text-muted-foreground mb-6">
                            By accessing and using the {COMPANY.name} website and services, you agree to be bound by
                            these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
                        <p className="text-muted-foreground mb-6">
                            {COMPANY.name} provides SAP consulting, implementation, and IT services. The specific
                            scope of services will be defined in individual service agreements with clients.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                        <p className="text-muted-foreground mb-6">
                            When using our website, you agree to:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                            <li>Provide accurate and complete information</li>
                            <li>Use the website only for lawful purposes</li>
                            <li>Not attempt to gain unauthorized access to our systems</li>
                            <li>Not interfere with the proper functioning of the website</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                        <p className="text-muted-foreground mb-6">
                            All content on this website, including text, graphics, logos, and software, is the property
                            of {COMPANY.name} and is protected by intellectual property laws. You may not reproduce,
                            distribute, or create derivative works without our express written consent.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
                        <p className="text-muted-foreground mb-6">
                            To the fullest extent permitted by law, {COMPANY.name} shall not be liable for any
                            indirect, incidental, special, or consequential damages arising from your use of our
                            website or services.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">6. Third-Party Links</h2>
                        <p className="text-muted-foreground mb-6">
                            Our website may contain links to third-party websites. We are not responsible for the
                            content or privacy practices of these external sites.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
                        <p className="text-muted-foreground mb-6">
                            We reserve the right to modify these Terms of Service at any time. Changes will be
                            effective immediately upon posting on this page. Your continued use of our services
                            constitutes acceptance of the modified terms.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                        <p className="text-muted-foreground mb-6">
                            These Terms of Service shall be governed by and construed in accordance with applicable laws.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
                        <p className="text-muted-foreground mb-6">
                            For questions about these Terms of Service, please contact us:
                        </p>
                        <div className="bg-muted/30 rounded-lg p-6 mb-6">
                            <p className="font-bold">{COMPANY.name}</p>
                            <p className="text-muted-foreground">{COMPANY.contact.address.street}</p>
                            <p className="text-muted-foreground">{COMPANY.contact.address.city}, {COMPANY.contact.address.zip}</p>
                            <p className="text-muted-foreground">Email: {COMPANY.contact.email}</p>
                            <p className="text-muted-foreground">Phone: {COMPANY.contact.phone}</p>
                        </div>

                        <div className="mt-8">
                            <Link href="/" className="text-primary hover:underline">
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
