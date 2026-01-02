import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Globe, Users, Trophy } from "lucide-react";

const Partners = () => {
  const benefits = [
    {
      icon: <Globe className="h-6 w-6 text-foreground" />,
      title: "Global Reach",
      description: "Amplify your impact through our worldwide STEM network and initiatives."
    },
    {
      icon: <Users className="h-6 w-6 text-foreground" />,
      title: "Direct Access",
      description: "Connect with thousands of students, educators, and STEM professionals."
    },
    {
      icon: <Handshake className="h-6 w-6 text-foreground" />,
      title: "Strategic Impact",
      description: "Collaborate on projects that bridge the gap in STEM education accessibility."
    },
    {
      icon: <Trophy className="h-6 w-6 text-foreground" />,
      title: "Shared Values",
      description: "Join a community dedicated to excellence, innovation, and educational equity."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Partner With Us
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Together, we can redefine STEM education and inspire the next generation of innovators worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Benefits */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Why Partner with STEMise?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-6 bg-card border border-border hover:border-primary/50 transition-colors">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sign up Form */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle>Partnership Inquiry</CardTitle>
                <CardDescription>Fill out the form below and our team will get back to you within 48 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="org-name">Organization Name</Label>
                    <Input id="org-name" placeholder="ABC STEM Foundation" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Contact Person</Label>
                      <Input id="contact-name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input id="email" type="email" placeholder="john@organization.org" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of Interest</Label>
                    <select id="interest" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>Sponsorship</option>
                      <option>Educational Programs</option>
                      <option>Resource Sharing</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How would you like to collaborate?</Label>
                    <Textarea id="message" placeholder="Tell us about your organization and goals..." className="min-h-[120px]" required />
                  </div>
                  <Button type="submit" className="w-full">Submit Proposal</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
