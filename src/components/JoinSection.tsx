import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AppHashLink from "@/components/AppHashLink";
import joinImage from "@/assets/join-community.jpg";
import { useEffect, useRef, useState } from "react";

const JoinSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="join" className="relative py-24 bg-card scroll-mt-24 overflow-hidden">
      {/* Background Image with subtle movement */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[zoomIn_25s_ease-in-out_infinite_alternate]"
        style={{ 
          backgroundImage: `url(${joinImage})`,
          transformOrigin: 'center center',
        }}
      />
      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/85" />
      
      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className={`inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Take Action
          </span>
          <h2 className={`text-3xl md:text-5xl font-semibold text-foreground ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Join STEMise Today
          </h2>

          <p className={`mt-6 text-foreground/70 text-lg leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Be part of an international community of young leaders dedicated to transforming STEM education. Whether you're a student, educator, or volunteer, there's a place for you at STEMise.
          </p>

          <div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="gap-2 hover-lift animate-glow">
              Get involved
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" asChild className="hover-lift bg-foreground text-background border-foreground hover:bg-foreground/90 hover:text-background">
              <AppHashLink toId="contact">Contact us</AppHashLink>
            </Button>
          </div>

          <p className={`mt-8 text-sm text-foreground/50 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Founded by Ryan Ahn and Dongwon Lee in Seoul, South Korea
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;