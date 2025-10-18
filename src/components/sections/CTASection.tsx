import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton?: { // Make primaryButton optional
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground mb-8">{description}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryButton && primaryButton.href && (
              <Button size="lg" asChild>
                <Link href={primaryButton.href}>
                  {primaryButton.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            
            {secondaryButton && secondaryButton.href && (
              <Button size="lg" variant="outline" asChild>
                <Link href={secondaryButton.href}>{secondaryButton.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
