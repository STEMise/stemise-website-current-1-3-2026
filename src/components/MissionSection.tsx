import { useEffect, useRef, useState } from "react";

const MissionSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) setHeaderVisible(true);
            if (entry.target === contentRef.current) setContentVisible(true);
            if (entry.target === statsRef.current) setStatsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div
            ref={headerRef}
            className={`${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
              Our Mission
            </h2>
          </div>
          
          <div
            ref={contentRef}
            className={`bg-card p-8 md:p-12 border border-border hover-lift ${contentVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}
          >
            <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground">
              STEMise is an international, youth-led organization committed to redefining STEM education by focusing on introducing hands-on learning to communities through interactive STEM kits, technology curricula, and educational workshops.
            </p>
            
            <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground mt-6">
              Our actions are driven by the foundational belief in the effectiveness and power of interactive learning compared to passive learning, and our desire to transform abstract classroom concepts into engaging, meaningful, and real-world learning experiences for learners worldwide.
            </p>

            <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground mt-6">
              Through our discipline-specific STEM kits, members—each with their expertise in different science disciplines—have the opportunity to apply their creative minds to formulate personalized kits that serve as effective tools for learning and cultivating curiosity, as well as fostering a lifelong passion in STEM.
            </p>
          </div>

          <div
            ref={statsRef}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            <div className={`bg-card p-6 border border-border hover-lift ${statsVisible ? 'animate-scale-in stagger-1' : 'opacity-0'}`}>
              <p className="text-3xl font-semibold text-primary animate-pulse-slow">2025</p>
              <p className="mt-2 text-sm text-foreground/80">Founded in Seoul</p>
            </div>
            <div className={`bg-card p-6 border border-border hover-lift ${statsVisible ? 'animate-scale-in stagger-2' : 'opacity-0'}`}>
              <p className="text-3xl font-semibold text-primary animate-pulse-slow">Global</p>
              <p className="mt-2 text-sm text-foreground/80">Members worldwide</p>
            </div>
            <div className={`bg-card p-6 border border-border hover-lift ${statsVisible ? 'animate-scale-in stagger-3' : 'opacity-0'}`}>
              <p className="text-3xl font-semibold text-primary animate-pulse-slow">Youth-Led</p>
              <p className="mt-2 text-sm text-foreground/80">By students, for students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
