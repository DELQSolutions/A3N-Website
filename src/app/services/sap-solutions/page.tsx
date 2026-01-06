import { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants/company";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Settings } from "lucide-react";

export const metadata: Metadata = {
    title: `SAP Solutions - ${COMPANY.name}`,
    description: "Comprehensive SAP solutions including implementation, consulting, and support services for enterprise transformation.",
};

const SAP_CATEGORIES = [
    {
        title: "SAP Implementation",
        description: "End-to-end implementation of SAP solutions tailored to your business needs",
        href: "/services/sap-implementation",
        icon: Server,
        items: ["SAP S/4HANA", "SAP SuccessFactors", "SAP ARIBA", "SAP Fieldglass", "SAP Concur"],
    },
    {
        title: "SAP Consulting & Services",
        description: "Expert consulting and support services to optimize your SAP investments",
        href: "/services/sap-consulting",
        icon: Settings,
        items: ["BTP Application Development", "Integrations", "HR Process Automations", "Analytics & Reporting", "AI Product Development"],
    },
];

export default function SAPSolutionsPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-slate-900 to-dark">
                <ParticleBackground />
                <div className="absolute top-10 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight text-white">
                            <span className="gradient-text">SAP Solutions</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                            Transform your enterprise with our comprehensive SAP solutions and expert consulting services
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="section-title pl-8">SAP Expertise</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4">
                            Enterprise <span className="text-primary">Transformation</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {SAP_CATEGORIES.map((category) => {
                            const IconComponent = category.icon;
                            return (
                                <div
                                    key={category.title}
                                    className="group bg-card border-2 border-border rounded-2xl p-8 card-hover"
                                >
                                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                        <IconComponent className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                                    <p className="text-muted-foreground mb-6">{category.description}</p>
                                    <ul className="space-y-2 mb-6">
                                        {category.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <span className="text-primary mt-1">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button asChild>
                                        <Link href={category.href}>
                                            Explore <ArrowRight className="ml-2 h-4 w-4" />
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for SAP Transformation?</h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Partner with our certified SAP consultants to accelerate your digital transformation journey.
                    </p>
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
