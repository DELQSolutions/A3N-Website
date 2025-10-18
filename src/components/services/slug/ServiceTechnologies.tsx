"use client";

interface ServiceTechnologiesProps {
  title: string;
  technologies: Array<{
    category: string;
    items: string[];
  }>;
}

export function ServiceTechnologies({
  title,
  technologies,
}: ServiceTechnologiesProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title} <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies and industry best practices to
            deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border-2 border-border hover:border-primary/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {tech.category}
              </h3>
              <ul className="space-y-2">
                {tech.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
