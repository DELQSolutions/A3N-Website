import { Metadata } from "next";
import { redirect } from "next/navigation";
import { COMPANY } from "@/lib/constants/company";

export const metadata: Metadata = {
    title: `Industries - ${COMPANY.name}`,
    description: "Explore industry-specific solutions for manufacturing, healthcare, retail, and financial services.",
};

export default function IndustriesPage() {
    // Redirect to solutions page as it contains industry solutions
    redirect("/solutions");
}
