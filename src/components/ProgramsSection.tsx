import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Beaker, Cpu, Users, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const programs = [{
  icon: Beaker,
  title: "STEM Kits",
  description: "Discipline-specific kits designed by members with expertise across science fields. Each kit transforms abstract concepts into hands-on experiments that cultivate curiosity and foster a lifelong passion for STEM.",
  features: ["Physics, Chemistry, Biology kits", "Age-appropriate materials", "Safety guidance included", "Designed for interactive learning"],
  iconBg: "bg-blue-500/20"
}, {
  icon: Cpu,
  title: "S.T.F.E. Curriculum",
  description: "STEMise's Tech For Everybody provides communities with fundamental knowledge of topics ranging from AI, cybersecurity, and programming languages—all relevant to today's era of digital technology.",
  features: ["AI literacy programs", "Cybersecurity fundamentals", "Programming languages", "Digital technology skills"],
  iconBg: "bg-purple-500/20"
}, {
  icon: Users,
  title: "Interactive Workshops",
  description: "Both in-person and online workshops to address diverse target audiences. Members pass on their knowledge through kit distributions, hands-on activities, and technology curriculum lessons.",
  features: ["In-person sessions", "Online accessibility", "Regularly scheduled", "Community-focused"],
  iconBg: "bg-emerald-500/20"
}];
const ProgramsSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current) setHeaderVisible(true);
          if (entry.target === cardsRef.current) setCardsVisible(true);
        }
      });
    }, {
      threshold: 0.2
    });
    if (headerRef.current) observer.observe(headerRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);
  return <section id="programs" className="bg-background scroll-mt-24 relative overflow-hidden py-[60px]">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className={`text-center mb-20 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 text-secondary bg-primary-foreground">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
            Our Programs
          </h2>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            STEMise's mission is practiced through two core activities: STEM Kit distributions and STEMise's Tech for Everybody (S.T.F.E.)
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => <Card key={program.title} className={`group relative bg-card overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 ${cardsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{
          animationDelay: `${index * 0.15}s`
        }}>
              {/* Card inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
              
              <CardHeader className="relative pb-2">
                <div className={`w-14 h-14 ${program.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="h-7 w-7 text-foreground" />
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="leading-relaxed mb-6 text-white">
                  {program.description}
                </p>
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => <li key={feature} className="text-sm text-foreground/80 flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300" style={{
                transitionDelay: `${featureIndex * 50}ms`
              }}>
                      <span className="w-2 h-2 rounded-full flex-shrink-0 bg-white" />
                      {feature}
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>

        <div className={`text-center mt-12 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{
        animationDelay: '0.5s'
      }}>
          <Button size="lg" asChild className="group">
            <Link to="/courses" className="gap-2 inline-flex items-center">
              Explore All Programs
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default ProgramsSection;