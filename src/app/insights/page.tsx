import { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants/company";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Lightbulb, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
    title: `Insights - ${COMPANY.name}`,
    description: "Stay updated with the latest insights, trends, and best practices in SAP, AI, and digital transformation.",
};

const COMING_SOON_TOPICS = [
    {
        icon: BookOpen,
        title: "Industry Reports",
        description: "In-depth analysis and reports on enterprise technology trends",
    },
    {
        icon: Lightbulb,
        title: "Best Practices",
        description: "Expert guides and best practices for SAP implementations",
    },
    {
        icon: TrendingUp,
        title: "Case Studies",
        description: "Success stories from our client transformations",
    },
];

export default function InsightsPage() {
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
                            <span className="gradient-text">Insights</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                            Expert perspectives on enterprise technology and digital transformation
                        </p>
                    </div>
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full mb-4">
                            Coming Soon
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            We're working on something <span className="text-primary">great</span>
                        </h2>
                        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                            Our insights section is currently under development. Soon you'll find valuable content here.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {COMING_SOON_TOPICS.map((topic) => {
                            const IconComponent = topic.icon;
                            return (
                                <div
                                    key={topic.title}
                                    className="bg-card border-2 border-border rounded-2xl p-6 text-center"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                        <IconComponent className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{topic.title}</h3>
                                    <p className="text-muted-foreground text-sm">{topic.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-muted-foreground mb-4">
                            Want to be notified when we launch our insights section?
                        </p>
                        <Button asChild>
                            <Link href="/contact">
                                Get Notified <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
