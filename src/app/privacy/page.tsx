import { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants/company";

export const metadata: Metadata = {
    title: `Privacy Policy - ${COMPANY.name}`,
    description: `Privacy Policy for ${COMPANY.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-gradient-to-br from-dark via-slate-900 to-dark text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl font-black mb-4">Privacy Policy</h1>
                        <p className="text-white/70">Last updated: January 2026</p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 flex-grow">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                        <p className="text-muted-foreground mb-6">
                            We collect information you provide directly to us, such as when you fill out a contact form,
                            request a consultation, or communicate with us. This may include your name, email address,
                            phone number, company name, and any other information you choose to provide.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                        <p className="text-muted-foreground mb-6">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Send you information about our services and solutions</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                        <p className="text-muted-foreground mb-6">
                            We do not sell, trade, or otherwise transfer your personal information to third parties
                            without your consent, except as described in this policy or as required by law.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                        <p className="text-muted-foreground mb-6">
                            We implement appropriate technical and organizational measures to protect your personal
                            information against unauthorized access, alteration, disclosure, or destruction.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
                        <p className="text-muted-foreground mb-6">
                            Our website may use cookies to enhance your browsing experience. You can choose to disable
                            cookies through your browser settings, though this may affect site functionality.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                        <p className="text-muted-foreground mb-6">
                            You have the right to access, correct, or delete your personal information.
                            To exercise these rights, please contact us using the information below.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
                        <p className="text-muted-foreground mb-6">
                            If you have any questions about this Privacy Policy, please contact us at:
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
