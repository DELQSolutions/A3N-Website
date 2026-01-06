import { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants/company";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Rocket, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: `Careers - ${COMPANY.name}`,
    description: "Join our team of experts and help transform businesses through innovative technology solutions.",
};

const VALUES = [
    {
        icon: Rocket,
        title: "Innovation First",
        description: "We embrace new technologies and creative solutions",
    },
    {
        icon: Users,
        title: "Collaborative Culture",
        description: "Work with talented professionals from around the world",
    },
    {
        icon: Heart,
        title: "Work-Life Balance",
        description: "Flexible working arrangements that fit your lifestyle",
    },
    {
        icon: Globe,
        title: "Global Impact",
        description: "Help enterprises worldwide achieve digital transformation",
    },
];

export default function CareersPage() {
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
                            Join Our <span className="gradient-text">Team</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                            Build your career with us and help shape the future of enterprise technology
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="section-title pl-8">Why Join Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4">
                            Be Part of Something <span className="text-primary">Great</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {VALUES.map((value) => {
                            const IconComponent = value.icon;
                            return (
                                <div
                                    key={value.title}
                                    className="bg-card border-2 border-border rounded-2xl p-6 text-center card-hover"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                        <IconComponent className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground text-sm">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="section-title pl-8">Open Positions</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4">
                            Current <span className="text-primary">Opportunities</span>
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto bg-card border-2 border-border rounded-2xl p-8 text-center">
                        <div className="text-6xl mb-4">📩</div>
                        <h3 className="text-xl font-bold mb-4">No Open Positions Right Now</h3>
                        <p className="text-muted-foreground mb-6">
                            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        <Button asChild>
                            <Link href={`mailto:${COMPANY.contact.email}?subject=Career%20Inquiry`}>
                                Send Your Resume <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions?</h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Reach out to us to learn more about career opportunities at {COMPANY.name}.
                    </p>
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
