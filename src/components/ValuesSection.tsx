import { Shield, Heart, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const values = [{
  icon: Shield,
  title: "Safety First",
  description: "All kits and workshops include appropriate safety guidance and age-appropriate materials. Events follow host institution safeguarding rules.",
  color: "from-amber-500/20 to-orange-500/20",
  iconColor: "text-white-300"
}, {
  icon: Heart,
  title: "Non-Discrimination",
  description: "STEMise does not discriminate based on race, nationality, ethnicity, religion, disability, sex, gender identity, sexual orientation, or socioeconomic status.",
  color: "from-rose-500/20 to-pink-500/20",
  iconColor: "text-white-300"
}, {
  icon: Globe,
  title: "Global Reach",
  description: "With members from across the world, we deliver hands-on learning experiences through both in-person and online workshops to reach diverse audiences.",
  color: "from-sky-500/20 to-blue-500/20",
  iconColor: "text-white-300"
}];
const ValuesSection = () => {
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
  return <section className="relative overflow-hidden bg-[#0c0c18] py-[80px]">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className={`text-center mb-20 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
            Our Values
          </h2>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Guided by principles that ensure inclusive, safe, and impactful STEM education
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => <div key={value.title} className={`group relative p-8 rounded-3xl bg-gradient-to-br ${value.color} backdrop-blur-sm border border-border/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/10 ${cardsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{
          animationDelay: `${index * 0.15}s`
        }}>
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
              
              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-background/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`h-8 w-8 ${value.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-foreground/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>)}
        </div>
      </div>
    </section>;
};
export default ValuesSection;