import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ProgramsSection from "@/components/ProgramsSection";
import ValuesSection from "@/components/ValuesSection";
import MembershipSection from "@/components/MembershipSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
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
