import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Globe, Users, Trophy } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { submitPartnershipInquiry } from "@/lib/formService";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerLogo3 from "@/assets/partner-logo-3.png";
import partnerLogo4 from "@/assets/partner-logo-4.png";
const Partners = () => {
  const [formData, setFormData] = useState({
    orgName: "",
    contactName: "",
    email: "",
    interest: "Sponsorship",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const partnerLogos = [partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4];
  const benefits = [{
    icon: Globe,
    title: "Global Reach",
    description: "Amplify your impact through our worldwide STEM network and initiatives.",
    gradient: "from-sky-500/20 to-blue-500/20",
    iconBg: "bg-background"
  }, {
    icon: Users,
    title: "Direct Access",
    description: "Connect with thousands of students, educators, and STEM professionals.",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-background"
  }, {
    icon: Handshake,
    title: "Strategic Impact",
    description: "Collaborate on projects that bridge the gap in STEM education accessibility.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-background"
  }, {
    icon: Trophy,
    title: "Shared Values",
    description: "Join a community dedicated to excellence, innovation, and educational equity.",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-background"
  }];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.orgName || !formData.contactName || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    const result = await submitPartnershipInquiry({
      organizationName: formData.orgName,
      contactPerson: formData.contactName,
      email: formData.email,
      interestArea: formData.interest,
      message: formData.message
    });
    setIsSubmitting(false);
    if (result.success) {
      toast({
        title: "Proposal submitted!",
        description: "Our team will get back to you within 48 hours."
      });
      setFormData({
        orgName: "",
        contactName: "",
        email: "",
        interest: "Sponsorship",
        message: ""
      });
    } else {
      toast({
        title: "Submission failed",
        description: result.error || "Please try again later.",
        variant: "destructive"
      });
    }
  };
  return <div className="min-h-screen bg-background">
    <Header />
    <main className="py-24">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full font-medium mb-4 bg-primary-foreground text-secondary text-lg">
            Partnerships
          </span>
          <h1 className="text-3xl font-semibold text-foreground md:text-6xl">
            Partner With Us
          </h1>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto leading-relaxed text-2xl">
            Together, we can redefine STEM education and inspire the next generation of innovators worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Benefits */}
          <div className="space-y-8 animate-fade-in-up stagger-2">
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground">Why Partner with STEMise?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return <div key={index} className={`group p-6 bg-gradient-to-br ${benefit.gradient} rounded-2xl border border-border/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 transition-all duration-300`}>
                  <div className={`w-12 h-12 ${benefit.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{benefit.description}</p>
                </div>;
              })}
            </div>
          </div>

          {/* Right: Sign up Form */}
          <Card className="border border-border/50 bg-card rounded-2xl animate-fade-in-up stagger-3">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Partnership Inquiry</CardTitle>
              <CardDescription className="text-foreground/70">Fill out the form below and our team will get back to you within 48 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="org-name">Organization Name</Label>
                  <Input id="org-name" placeholder="ABC STEM Foundation" required className="bg-background/50" value={formData.orgName} onChange={e => setFormData(prev => ({
                    ...prev,
                    orgName: e.target.value
                  }))} disabled={isSubmitting} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Contact Person</Label>
                    <Input id="contact-name" placeholder="John Doe" required className="bg-background/50" value={formData.contactName} onChange={e => setFormData(prev => ({
                      ...prev,
                      contactName: e.target.value
                    }))} disabled={isSubmitting} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="john@organization.org" required className="bg-background/50" value={formData.email} onChange={e => setFormData(prev => ({
                      ...prev,
                      email: e.target.value
                    }))} disabled={isSubmitting} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest</Label>
                  <select id="interest" className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" value={formData.interest} onChange={e => setFormData(prev => ({
                    ...prev,
                    interest: e.target.value
                  }))} disabled={isSubmitting}>
                    <option>Sponsorship</option>
                    <option>Educational Programs</option>
                    <option>Resource Sharing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">How would you like to collaborate?</Label>
                  <Textarea id="message" placeholder="Tell us about your organization and goals..." className="min-h-[120px] bg-background/50" required value={formData.message} onChange={e => setFormData(prev => ({
                    ...prev,
                    message: e.target.value
                  }))} disabled={isSubmitting} />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Proposal"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Partner Logos Conveyor Belt */}
        <div className="mt-20">
          <h3 className="text-center text-lg font-medium text-foreground/70 mb-8">Our Partners:</h3>
          <div className="relative overflow-hidden bg-background py-8">
            <div className="flex animate-scroll w-max">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => <div key={index} className="flex-shrink-0 mx-12">
                <img src={logo} alt={`Partner ${index % 4 + 1}`} className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>;
};
export default Partners;