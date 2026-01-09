import { useEffect, useRef, useState } from "react";
const MissionSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current) setHeaderVisible(true);
          if (entry.target === contentRef.current) setContentVisible(true);
          if (entry.target === statsRef.current) setStatsVisible(true);
        }
      });
    }, {
      threshold: 0.2
    });
    if (headerRef.current) observer.observe(headerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);
  return <section id="about" className="py-24 scroll-mt-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div ref={headerRef} className={`text-center mb-12 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 text-secondary bg-primary-foreground">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
              Our Mission
            </h2>
          </div>
          
          <div ref={contentRef} className={`bg-gradient-to-br from-card to-secondary/50 p-8 md:p-12 rounded-3xl border border-border/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 ${contentVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90 text-center">
              STEMise is an international, youth-led organization committed to redefining STEM education by focusing on introducing hands-on learning to communities through interactive STEM kits, technology curricula, and educational workshops.
            </p>
            
            <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90 mt-6 text-center">
              Our actions are driven by the foundational belief in the effectiveness and power of interactive learning compared to passive learning, and our desire to transform abstract classroom concepts into engaging, meaningful, and real-world learning experiences for learners worldwide.
            </p>

            <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90 mt-6 text-center">
              Through our discipline-specific STEM kits, members—each with their expertise in different science disciplines—have the opportunity to apply their creative minds to formulate personalized kits that serve as effective tools for learning and cultivating curiosity, as well as fostering a lifelong passion in STEM.
            </p>
          </div>

          <div ref={statsRef} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[{
            value: "2025",
            label: "Founded in Seoul"
          }, {
            value: "Global",
            label: "Members worldwide"
          }, {
            value: "Youth-Led",
            label: "By students, for students"
          }].map((stat, index) => <div key={stat.label} className={`group p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 ${statsVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
            animationDelay: `${(index + 1) * 0.1}s`
          }}>
                <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-foreground/70">{stat.label}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default MissionSection;