import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ShieldCheck, Target, TrendingUp } from "lucide-react";
import hackclubLogo from "@/assets/hackclub-logo.png";
const Donations = () => {
  const causes = [{
    icon: Target,
    title: "STEM Kits",
    description: "Providing physical learning materials to students in underserved communities.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/20"
  }, {
    icon: TrendingUp,
    title: "Scholarships",
    description: "Funding higher education for promising students in STEM fields.",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-purple-500/20"
  }, {
    icon: ShieldCheck,
    title: "Safe Spaces",
    description: "Creating secure environments for learning and experimentation.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-500/20"
  }, {
    icon: Heart,
    title: "Community Outreach",
    description: "Building local awareness and engagement for STEM education.",
    gradient: "from-rose-500/20 to-pink-500/20",
    iconBg: "bg-rose-500/20"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-primary-foreground text-secondary">
              Make an Impact
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground">
              Support Our Cause
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Your contribution helps us bring STEM education to every corner of the world. Every donation makes a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Impact Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-semibold text-foreground">Where Your Money Goes:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {causes.map((cause, index) => {
                const Icon = cause.icon;
                return <div key={index} className={`group p-6 bg-gradient-to-br ${cause.gradient} rounded-2xl border border-border/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 transition-all duration-300`}>
                      <div className={`w-12 h-12 ${cause.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{cause.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{cause.description}</p>
                    </div>;
              })}
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border/50 p-8">
                <blockquote className="italic text-foreground/80 border-l-4 border-primary pl-4 py-2">
                  "The kits provided by STEMise changed how my students think about the world. They aren't just learning; they are building."
                </blockquote>
                <p className="mt-4 font-semibold text-sm">— Educator from Lagos, Nigeria</p>
              </div>

            </div>

            {/* Right: Hack Club Donation Card */}
            <div className="flex items-center justify-center lg:mt-6">
              <div className="bg-[#ec3750] rounded-2xl border border-[#d63045] p-10 flex flex-col items-center justify-center text-center w-full max-w-md">
                <img src={hackclubLogo} alt="Hack Club" className="h-16 w-auto mb-6" />
                <h3 className="text-white text-2xl font-semibold mb-3">Support Our Mission</h3>
                <p className="text-white/90 text-base mb-6 leading-relaxed">
                  Your donation through Hack Club's fiscal sponsorship directly funds STEM education for students worldwide.
                </p>
                <a 
                  href="https://hcb.hackclub.com/donations/start/stemise" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full h-14 bg-white hover:bg-white/90 text-[#ec3750] font-semibold rounded-xl transition-colors text-lg"
                >
                  <Heart className="h-5 w-5" />
                  <span>Donate Now</span>
                </a>
                <p className="text-white/70 text-sm mt-4">
                  100% tax-deductible • Secure payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Donations;
