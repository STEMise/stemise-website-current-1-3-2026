import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ProgramsSection from "@/components/ProgramsSection";
import ValuesSection from "@/components/ValuesSection";
import MembershipSection from "@/components/MembershipSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-card py-8 flex justify-center">
          <img src={heroBanner} alt="STEMise Banner" className="h-24 md:h-32 w-auto" />
        </section>
        <HeroSection />
        <MissionSection />
        <ProgramsSection />
        <ValuesSection />
        <MembershipSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
