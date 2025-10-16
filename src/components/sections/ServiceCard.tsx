import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Icons } from "@/components/shared/Icons";
import type { Service } from "@/lib/constants/services";

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const IconComponent = Icons[service.icon];
  
  return (
    <Card className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${featured ? "border-primary" : ""}`}>
      <CardHeader>
        <div className="mb-4">
          <IconComponent />
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-3 text-foreground">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Button variant="ghost" className="w-full group justify-between hover:bg-primary/10" asChild>
          <Link href={`/services/${service.slug}`}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
