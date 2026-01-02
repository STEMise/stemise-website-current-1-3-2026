import { Shield, Heart, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "All kits and workshops include appropriate safety guidance and age-appropriate materials. Events follow host institution safeguarding rules.",
  },
  {
    icon: Heart,
    title: "Non-Discrimination",
    description:
      "STEMise does not discriminate based on race, nationality, ethnicity, religion, disability, sex, gender identity, sexual orientation, or socioeconomic status.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "With members from across the world, we deliver hands-on learning experiences through both in-person and online workshops to reach diverse audiences.",
  },
];

const ValuesSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) setHeaderVisible(true);
            if (entry.target === cardsRef.current) setCardsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Our Values
          </h2>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            Guided by principles that ensure inclusive, safe, and impactful STEM education
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`text-center ${cardsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                <value.icon className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
