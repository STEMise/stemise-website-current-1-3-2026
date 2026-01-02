import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Beaker, Cpu, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const programs = [
  {
    icon: Beaker,
    title: "STEM Kits",
    description:
      "Discipline-specific kits designed by members with expertise across science fields. Each kit transforms abstract concepts into hands-on experiments that cultivate curiosity and foster a lifelong passion for STEM.",
    features: [
      "Physics, Chemistry, Biology kits",
      "Age-appropriate materials",
      "Safety guidance included",
      "Designed for interactive learning",
    ],
  },
  {
    icon: Cpu,
    title: "S.T.F.E. Curriculum",
    description:
      "STEMise's Tech For Everybody provides communities with fundamental knowledge of topics ranging from AI, cybersecurity, and programming languages—all relevant to today's era of digital technology.",
    features: [
      "AI literacy programs",
      "Cybersecurity fundamentals",
      "Programming languages",
      "Digital technology skills",
    ],
  },
  {
    icon: Users,
    title: "Interactive Workshops",
    description:
      "Both in-person and online workshops to address diverse target audiences. Members pass on their knowledge through kit distributions, hands-on activities, and technology curriculum lessons.",
    features: [
      "In-person sessions",
      "Online accessibility",
      "Regularly scheduled",
      "Community-focused",
    ],
  },
];

const ProgramsSection = () => {
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
    <section id="programs" className="py-20 bg-card scroll-mt-24">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Our Programs
          </h2>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            STEMise's mission is practiced through two core activities: STEM Kit distributions and STEMise's Tech for Everybody (S.T.F.E.)
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className={`border border-border bg-secondary hover-lift ${cardsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 flex items-center justify-center mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  <program.icon className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {program.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-foreground/80 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
