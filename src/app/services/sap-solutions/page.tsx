import { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants/company";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Building,
    Zap,
    Cloud,
    Server,
    Activity,
    CloudCog,
    Smartphone,
    BarChart2,
    Users,
    Puzzle,
    Play,
    Database,
    UserCheck,
    ShoppingCart,
    ClipboardList,
    Plane,
    Settings,
    AppWindow
} from "lucide-react";

export const metadata: Metadata = {
    title: `SAP Solutions - ${COMPANY.name}`,
    description: "Comprehensive SAP Business One solutions including implementation, cloud hosting, analytics, mobility, and add-ons for enterprise transformation.",
};

const SAP_SOLUTIONS = [
    {
        title: "SAP Business One",
        description: "Complete ERP solution for small and medium businesses with integrated financials, sales, and operations",
        href: "/services/sap-business-one",
        icon: Building,
        gradient: "from-blue-500 to-blue-600",
    },
    {
        title: "SAP B1 Express Edition",
        description: "Simplified and cost-effective ERP for startups and small businesses",
        href: "/services/sap-b1-express-edition",
        icon: Zap,
        gradient: "from-yellow-500 to-orange-500",
    },
    {
        title: "SAP Business One Cloud",
        description: "Cloud-native SAP Business One with flexibility and reduced infrastructure costs",
        href: "/services/sap-business-one-cloud",
        icon: Cloud,
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        title: "SAP Business One Cloud Hosting",
        description: "Enterprise-grade hosting with 99.9% uptime and expert management",
        href: "/services/sap-business-one-cloud-hosting",
        icon: Server,
        gradient: "from-purple-500 to-indigo-500",
    },
    {
        title: "SAP Business One HANA",
        description: "Lightning-fast analytics with SAP HANA in-memory database technology",
        href: "/services/sap-business-one-hana",
        icon: Activity,
        gradient: "from-green-500 to-teal-500",
    },
    {
        title: "SAP S/4 HANA Cloud",
        description: "Next-generation intelligent ERP with AI-driven automation",
        href: "/services/sap-s4-hana-cloud",
        icon: CloudCog,
        gradient: "from-indigo-500 to-purple-600",
    },
    {
        title: "SAP Business One Mobility",
        description: "Mobile apps for iOS and Android extending SAP B1 on the go",
        href: "/services/sap-business-one-mobility",
        icon: Smartphone,
        gradient: "from-pink-500 to-rose-500",
    },
    {
        title: "SAP Business One Analytics",
        description: "Comprehensive analytics and reporting for data-driven decisions",
        href: "/services/sap-business-one-analytics",
        icon: BarChart2,
        gradient: "from-emerald-500 to-green-600",
    },
    {
        title: "HR and Talent Management",
        description: "Complete HR solutions integrated with SAP for the entire employee lifecycle",
        href: "/services/hr-talent-management",
        icon: Users,
        gradient: "from-amber-500 to-orange-600",
    },
    {
        title: "SAP Add-ons",
        description: "Extend SAP capabilities with certified add-ons for your industry",
        href: "/services/sap-add-ons",
        icon: Puzzle,
        gradient: "from-violet-500 to-purple-600",
    },
    {
        title: "SAP Business One Demo",
        description: "Experience SAP Business One with interactive demos and guided tours",
        href: "/services/sap-business-one-demo",
        icon: Play,
        gradient: "from-red-500 to-rose-600",
    },
    {
        title: "SAP S/4HANA",
        description: "Next-generation ERP suite for digital business with real-time insights",
        href: "/services/sap-s4hana",
        icon: Database,
        gradient: "from-blue-600 to-indigo-700",
    },
    {
        title: "SAP SuccessFactors",
        description: "Full suite HCM solutions to optimize and manage your workforce",
        href: "/services/sap-successfactors",
        icon: UserCheck,
        gradient: "from-teal-500 to-cyan-600",
    },
    {
        title: "SAP ARIBA",
        description: "Cloud-based procurement for streamlined buying and supplier collaboration",
        href: "/services/sap-ariba",
        icon: ShoppingCart,
        gradient: "from-orange-500 to-red-500",
    },
    {
        title: "SAP Fieldglass",
        description: "Vendor management system for external workforce and services procurement",
        href: "/services/sap-fieldglass",
        icon: ClipboardList,
        gradient: "from-slate-500 to-gray-600",
    },
    {
        title: "SAP Concur",
        description: "Integrated travel, expense, and invoice management solution",
        href: "/services/sap-concur",
        icon: Plane,
        gradient: "from-sky-500 to-blue-600",
    },
    {
        title: "Custom ERP Solutions",
        description: "Custom SAP ERP implementations tailored for your unique business processes",
        href: "/services/custom-erp",
        icon: Settings,
        gradient: "from-zinc-500 to-slate-700",
    },
    {
        title: "BTP Application Development",
        description: "Application development and extension using SAP Business Technology Platform",
        href: "/services/btp-application",
        icon: AppWindow,
        gradient: "from-fuchsia-500 to-pink-600",
    },
];

export default function SAPSolutionsPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-slate-900 to-dark">
                <ParticleBackground />
                <div className="absolute top-10 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-sm text-primary font-medium">SAP Gold Partner</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight text-white">
                            <span className="gradient-text">SAP Solutions</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
                            Transform your enterprise with our comprehensive SAP solutions.
                            From SAP Business One to S/4HANA, SuccessFactors to ARIBA — we deliver complete ERP excellence.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/services/sap-business-one-demo">
                                    Request Demo
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="section-title pl-8">Complete SAP Ecosystem</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
                            Enterprise <span className="text-primary">Transformation</span> Solutions
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Explore our full range of SAP solutions designed to streamline operations,
                            boost productivity, and drive growth for businesses of all sizes.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {SAP_SOLUTIONS.map((solution) => {
                            const IconComponent = solution.icon;
                            return (
                                <Link
                                    key={solution.title}
                                    href={solution.href}
                                    className="group relative bg-card border-2 border-border rounded-2xl p-6 card-hover overflow-hidden"
                                >
                                    {/* Gradient background on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                    <div className="relative z-10">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {solution.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                            {solution.description}
                                        </p>
                                        <div className="flex items-center text-primary text-sm font-medium">
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose SAP Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="section-title pl-8">Why SAP Solutions</span>
                                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                                    The Smart Choice for <span className="text-primary">Growing Businesses</span>
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    SAP solutions are designed for businesses of all sizes,
                                    offering integrated solutions to manage your entire business operations.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Single integrated solution for all business processes",
                                        "Real-time insights for faster decision making",
                                        "Scalable from 5 to 500+ users",
                                        "Industry-specific solutions available",
                                        "Cloud, on-premise, or hybrid deployment options",
                                        "Global 24/7 support and training"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-primary text-sm">✓</span>
                                            </div>
                                            <span className="text-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
                                <div className="relative bg-card border-2 border-border rounded-3xl p-8">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="text-center p-4 bg-muted/50 rounded-xl">
                                            <div className="text-3xl font-black text-primary mb-2">70K+</div>
                                            <div className="text-sm text-muted-foreground">Companies Worldwide</div>
                                        </div>
                                        <div className="text-center p-4 bg-muted/50 rounded-xl">
                                            <div className="text-3xl font-black text-primary mb-2">170+</div>
                                            <div className="text-sm text-muted-foreground">Countries</div>
                                        </div>
                                        <div className="text-center p-4 bg-muted/50 rounded-xl">
                                            <div className="text-3xl font-black text-primary mb-2">28</div>
                                            <div className="text-sm text-muted-foreground">Languages</div>
                                        </div>
                                        <div className="text-center p-4 bg-muted/50 rounded-xl">
                                            <div className="text-3xl font-black text-primary mb-2">50+</div>
                                            <div className="text-sm text-muted-foreground">Localizations</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for SAP Transformation?</h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Partner with our certified SAP consultants to accelerate your digital transformation journey.
                        Get a personalized demo and implementation roadmap today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">Get Started</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                            <Link href="/services/sap-business-one-demo">Request Demo</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
