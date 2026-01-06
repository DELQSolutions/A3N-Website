"use client";

import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { SOLUTIONS } from "@/lib/constants/solutions";
import { Button } from "@/components/ui/button";

interface SolutionSidebarProps {
    currentSlug: string;
}

export function SolutionSidebar({ currentSlug }: SolutionSidebarProps) {
    return (
        <aside className="space-y-6">
            {/* Solutions List */}
            <div className="bg-card border-2 border-border rounded-xl overflow-hidden">
                <div className="bg-primary text-white px-6 py-4">
                    <h3 className="text-lg font-bold">Industry Solutions</h3>
                </div>
                <nav className="p-2">
                    {SOLUTIONS.map((solution) => (
                        <Link
                            key={solution.slug}
                            href={`/solutions/${solution.slug}`}
                            className={`block px-4 py-3 rounded-lg transition-all ${currentSlug === solution.slug
                                    ? "bg-primary text-white font-semibold"
                                    : "hover:bg-primary/10 text-foreground"
                                }`}
                        >
                            → {solution.title}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Download Brochure */}
            <div className="bg-card border-2 border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-bold">Solution Brochure</h4>
                        <p className="text-sm text-muted-foreground">Download PDF</p>
                    </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                    <a href="#" download>
                        Download
                    </a>
                </Button>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-primary to-accent text-white rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium">Have a Question?</p>
                        <p className="text-2xl font-black">+91 8086874344</p>
                    </div>
                </div>
                <Button variant="secondary" className="w-full font-bold" asChild>
                    <Link href="/contact">Get in Touch</Link>
                </Button>
            </div>
        </aside>
    );
}
