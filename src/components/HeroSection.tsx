import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AppHashLink from "@/components/AppHashLink";
import heroImage from "@/assets/hero-stem.jpg";
import heroBanner from "@/assets/hero-banner.png";
const HeroSection = () => {
  return <section className="relative bg-card min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with subtle zoom animation */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[zoomIn_20s_ease-in-out_infinite_alternate]" style={{
      backgroundImage: `url(${heroImage})`,
      transformOrigin: 'center center'
    }} />
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 py-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <img alt="STEMise Banner" src="/lovable-uploads/0bf0f453-e9ad-4ad9-a3e8-7be7ebcbfe3b.png" className="h-40 md:h-20 w-auto mx-auto mb-2 shadow-none opacity-85" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight animate-fade-in-up">
            Redefining STEM Education Worldwide
          </h1>

          <p className="mt-6 text-lg leading-relaxed animate-fade-in-up stagger-2 text-primary-foreground bg-transparent md:text-2xl">
            An international, youth-led organization committed to transforming abstract classroom concepts into engaging, meaningful learning experiences through hands-on STEM kits and technology curricula.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
            <Button size="lg" asChild className="hover-lift animate-glow">
              <Link to="/courses#programs" className="gap-2 inline-flex items-center">
                Explore our programs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover-lift bg-foreground text-background border-foreground hover:bg-foreground/90 hover:text-background">
              <AppHashLink toId="join">Get Involved</AppHashLink>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative animated elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default HeroSection;