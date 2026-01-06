import { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants/company";
import { SERVICES } from "@/lib/constants/services";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/Icons";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: `SAP Implementation - ${COMPANY.name}`,
    description: "Expert SAP implementation services including S/4HANA, SuccessFactors, ARIBA, Fieldglass, and Concur.",
};

const SAP_IMPL_SERVICES = SERVICES.filter(s =>
    ["sap-s4hana", "sap-successfactors", "sap-ariba", "sap-fieldglass", "sap-concur"].includes(s.slug)
);

export default function SAPImplementationPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-slate-900 to-dark">
                <ParticleBackground />
                <div className="absolute top-10 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Link href="/services/sap-solutions" className="text-primary hover:underline">SAP Solutions</Link>
                            <span className="text-white/50">/</span>
                            <span className="text-white/80">Implementation</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight text-white">
                            SAP <span className="gradient-text">Implementation</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                            End-to-end SAP implementation services to transform your enterprise operations
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="section-title pl-8">Implementation Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4">
                            SAP <span className="text-primary">Products</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {SAP_IMPL_SERVICES.map((service) => {
                            const IconComponent = Icons[service.icon];
                            return (
                                <div
                                    key={service.id}
                                    className="group bg-card border-2 border-border rounded-2xl p-6 card-hover"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        {IconComponent && <IconComponent />}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                                    <ul className="space-y-1.5 mb-4">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <span className="text-primary mt-0.5">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button asChild size="sm" className="w-full">
                                        <Link href={`/services/${service.slug}`}>
                                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Implement SAP?</h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Our certified SAP consultants are ready to guide your implementation journey.
                    </p>
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
