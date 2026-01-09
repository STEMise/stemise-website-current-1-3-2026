import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Target, TrendingUp, ShieldCheck, Sparkles } from "lucide-react";
import hackclubLogo from "@/assets/hackclub-logo.png";
const Donations = () => {
  const impactItems = [{
    icon: Target,
    title: "STEM Kits",
    description: "Physical learning materials for students worldwide"
  }, {
    icon: TrendingUp,
    title: "Scholarships",
    description: "Funding education for promising STEM students"
  }, {
    icon: ShieldCheck,
    title: "Safe Spaces",
    description: "Creating secure environments for learning"
  }, {
    icon: Sparkles,
    title: "Community",
    description: "Building awareness for STEM education"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-primary-foreground text-sidebar">
              Make an Impact
            </span>
            <h1 className="text-4xl font-semibold text-foreground mb-6 md:text-5xl">
              Support Our Mission
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Your contribution helps us bring STEM education to every corner of the world. 
              Every donation makes a difference.
            </p>
          </div>

          {/* Main Donation Card - Centered */}
          <div className="flex justify-center mb-20">
            <div className="bg-[#ec3750] rounded-3xl p-10 md:p-14 flex-col text-center max-w-lg w-full shadow-2xl shadow-[#ec3750]/20 flex items-center justify-start px-[40px] py-[30px]">
              <img src={hackclubLogo} alt="Hack Club" className="h-14 w-auto mb-6" />
              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
                Donate to STEMise
              </h2>
              <p className="text-white/85 text-base md:text-lg mb-8 leading-relaxed">
                Support us through Hack Club's fiscal sponsorship. Your donation is 100% tax-deductible.
              </p>
              <a href="https://hcb.hackclub.com/donations/start/stemise" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full h-14 bg-white hover:bg-white/95 text-[#ec3750] font-semibold rounded-xl transition-all duration-300 text-lg hover:scale-[1.02] hover:shadow-lg">
                <Heart className="h-5 w-5" />
                <span>Donate Now</span>
              </a>
              
            </div>
          </div>

          {/* Impact Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Where Your Money Goes
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Every dollar you donate directly supports our programs and initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {impactItems.map((item, index) => {
            const Icon = item.icon;
            return <div key={index} className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 bg-transparent">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                </div>;
          })}
          </div>

          {/* Testimonial */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border/50 p-8 text-center">
              <blockquote className="italic text-foreground/80 text-lg leading-relaxed mb-4">
                "The kits provided by STEMise changed how my students think about the world. 
                They aren't just learning; they are building."
              </blockquote>
              <p className="font-semibold text-foreground">— Educator from Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Donations;