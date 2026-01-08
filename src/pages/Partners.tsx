import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Globe, Users, Trophy } from "lucide-react";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerLogo3 from "@/assets/partner-logo-3.png";
import partnerLogo4 from "@/assets/partner-logo-4.png";

const Partners = () => {
  const partnerLogos = [partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4];
  const benefits = [{
    icon: Globe,
    title: "Global Reach",
    description: "Amplify your impact through our worldwide STEM network and initiatives.",
    gradient: "from-sky-500/20 to-blue-500/20",
    iconBg: "bg-sky-500/20"
  }, {
    icon: Users,
    title: "Direct Access",
    description: "Connect with thousands of students, educators, and STEM professionals.",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-purple-500/20"
  }, {
    icon: Handshake,
    title: "Strategic Impact",
    description: "Collaborate on projects that bridge the gap in STEM education accessibility.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-500/20"
  }, {
    icon: Trophy,
    title: "Shared Values",
    description: "Join a community dedicated to excellence, innovation, and educational equity.",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-500/20"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-primary-foreground text-secondary">
              Partnerships
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground">
              Partner With Us
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Together, we can redefine STEM education and inspire the next generation of innovators worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Benefits */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-semibold text-foreground">Why Partner with STEMise?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return <div key={index} className={`group p-6 bg-gradient-to-br ${benefit.gradient} rounded-2xl border border-border/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 transition-all duration-300`}>
                      <div className={`w-12 h-12 ${benefit.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{benefit.description}</p>
                    </div>;
              })}
              </div>
            </div>

            {/* Right: Sign up Form */}
            <Card className="border border-border/50 bg-card rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Partnership Inquiry</CardTitle>
                <CardDescription className="text-foreground/70">Fill out the form below and our team will get back to you within 48 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="org-name">Organization Name</Label>
                    <Input id="org-name" placeholder="ABC STEM Foundation" required className="bg-background/50" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Contact Person</Label>
                      <Input id="contact-name" placeholder="John Doe" required className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input id="email" type="email" placeholder="john@organization.org" required className="bg-background/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of Interest</Label>
                    <select id="interest" className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>Sponsorship</option>
                      <option>Educational Programs</option>
                      <option>Resource Sharing</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How would you like to collaborate?</Label>
                    <Textarea id="message" placeholder="Tell us about your organization and goals..." className="min-h-[120px] bg-background/50" required />
                  </div>
                  <Button type="submit" className="w-full">Submit Proposal</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Partner Logos Conveyor Belt */}
          <div className="mt-20">
            <h3 className="text-center text-lg font-medium text-foreground/70 mb-8">Our Partners</h3>
            <div className="relative overflow-hidden bg-background py-8">
              <div className="flex animate-scroll w-max">
                {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <div key={index} className="flex-shrink-0 mx-12">
                    <img 
                      src={logo} 
                      alt={`Partner ${(index % 4) + 1}`} 
                      className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Partners;