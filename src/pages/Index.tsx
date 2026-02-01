import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ProgramsSection from "@/components/ProgramsSection";
import TimelineSection from "@/components/TimelineSection";
import ValuesSection from "@/components/ValuesSection";
import MembershipSection from "@/components/MembershipSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo pathname="/" />
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <ProgramsSection />
        <TimelineSection />
        <ValuesSection />
        <MembershipSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
