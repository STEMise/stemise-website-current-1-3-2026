import { Users, Award, Heart, Handshake, Gift } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
const contributorCategories = [{
  icon: Users,
  title: "General Contributors",
  description: "Students or youth volunteers who contribute to STEMise activities.",
  benefits: ["Participate in all activities", "Propose new initiatives", "Vote in General Meetings", "Access to STEM resources"],
  gradient: "from-blue-600/40 via-blue-500/20 to-transparent",
  cardBack: "bg-blue-950/90 border-blue-800/50",
  iconBg: "bg-blue-500/20"
}, {
  icon: Award,
  title: "Executive Board",
  description: "Officers with governance responsibilities who help lead the organization.",
  benefits: ["All General Contributor benefits", "Governance participation", "Leadership opportunities", "Strategic decision-making"],
  gradient: "from-purple-600/40 via-purple-500/20 to-transparent",
  cardBack: "bg-purple-950/90 border-purple-800/50",
  iconBg: "bg-purple-500/20"
}, {
  icon: Heart,
  title: "Volunteers",
  description: "Individuals supporting specific events or logistics (may be non-students).",
  benefits: ["Support specific events", "Flexible commitment", "Community involvement", "Skill development"],
  gradient: "from-rose-600/40 via-rose-500/20 to-transparent",
  cardBack: "bg-rose-950/90 border-rose-800/50",
  iconBg: "bg-rose-500/20"
}, {
  icon: Handshake,
  title: "Partners",
  description: "Organizations and institutions collaborating with STEMise on educational initiatives.",
  benefits: ["Joint program development", "Co-branded events", "Resource sharing", "Network access"],
  gradient: "from-emerald-600/40 via-emerald-500/20 to-transparent",
  cardBack: "bg-emerald-950/90 border-emerald-800/50",
  iconBg: "bg-emerald-500/20"
}, {
  icon: Gift,
  title: "Donors",
  description: "Individuals and organizations supporting STEMise through financial contributions.",
  benefits: ["Impact reports", "Recognition opportunities", "Event invitations", "Tax-deductible giving"],
  gradient: "from-amber-600/40 via-amber-500/20 to-transparent",
  cardBack: "bg-amber-950/90 border-amber-800/50",
  iconBg: "bg-amber-500/20"
}];
const FlipCard = ({
  category,
  index,
  onHover
}: {
  category: typeof contributorCategories[0];
  index: number;
  onHover: (index: number | null) => void;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const Icon = category.icon;
  return <div ref={cardRef} className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
    animationDelay: `${index * 0.1}s`
  }} onMouseEnter={() => onHover(index)} onMouseLeave={() => onHover(null)}>
      {/* Spacer to maintain grid layout */}
      <div className="w-full aspect-square" />
      
      {/* Actual flip card positioned absolutely */}
      <div className="flip-card absolute inset-0 group">
        <div className="flip-card-inner relative w-full h-full group-hover:min-h-max">
          {/* Front of card */}
          <div className="flip-card-front absolute inset-0 bg-card border border-border/50 rounded-2xl flex flex-col items-center justify-center p-6">
            <div className={`w-16 h-16 ${category.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
              <Icon className="h-8 w-8 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground text-center">
              {category.title}
            </h3>
          </div>

          {/* Back of card */}
          <div className={`flip-card-back absolute top-0 left-0 right-0 min-h-full border rounded-2xl flex flex-col items-center justify-start p-6 z-10 ${category.cardBack}`}>
            <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
              {category.title}
            </h3>
            <p className="text-foreground/80 text-sm text-center mb-4">
              {category.description}
            </p>
            <ul className="space-y-2">
              {category.benefits.map(benefit => <li key={benefit} className="text-sm text-foreground/70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  {benefit}
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>;
};
const MembershipSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [gradientOpacities, setGradientOpacities] = useState<number[]>(contributorCategories.map(() => 0));
  const headerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const targetOpacitiesRef = useRef<number[]>(contributorCategories.map(() => 0));
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHeaderVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Smooth animation loop
  useEffect(() => {
    const animate = () => {
      setGradientOpacities(prev => {
        const next = prev.map((opacity, i) => {
          const target = targetOpacitiesRef.current[i];
          const diff = target - opacity;
          // Ease towards target - adjust speed here (0.08 = smooth, higher = faster)
          const speed = 0.08;
          if (Math.abs(diff) < 0.01) return target;
          return opacity + diff * speed;
        });
        return next;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  const handleHover = useCallback((index: number | null) => {
    targetOpacitiesRef.current = contributorCategories.map((_, i) => i === index ? 1 : 0);
  }, []);
  return <section id="contributors" className="py-24 scroll-mt-24 relative overflow-hidden min-h-[900px]">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-20" />
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20" />
      
      {/* Gradient backgrounds with smooth opacity transitions */}
      {contributorCategories.map((category, index) => <div key={category.title} className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`} style={{
      opacity: gradientOpacities[index]
    }} />)}

      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerRef} className={`text-center mb-20 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 text-secondary bg-primary-foreground">
            Join Our Community
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
            Get Involved
          </h2>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">Join our growing community of contributors, partners, and supporters making STEM education accessible worldwide!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {contributorCategories.map((category, index) => <FlipCard key={category.title} category={category} index={index} onHover={handleHover} />)}
        </div>
      </div>
    </section>;
};
export default MembershipSection;