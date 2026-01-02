import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ShieldCheck, Target, TrendingUp } from "lucide-react";

const Donations = () => {
  const causes = [
    {
      icon: <Target className="h-6 w-6 text-foreground" />,
      title: "STEM Kits",
      description: "Providing physical learning materials to students in underserved communities."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-foreground" />,
      title: "Scholarships",
      description: "Funding higher education for promising students in STEM fields."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-foreground" />,
      title: "Safe Spaces",
      description: "Creating secure environments for learning and experimentation."
    },
    {
      icon: <Heart className="h-6 w-6 text-foreground" />,
      title: "Community Outreach",
      description: "Building local awareness and engagement for STEM education."
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
              Support Our Cause
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Your contribution helps us bring STEM education to every corner of the world. Every donation makes a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Impact Content */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Where Your Money Goes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {causes.map((cause, index) => (
                  <div key={index} className="p-6 bg-card border border-border hover:border-primary/50 transition-colors">
                    <div className="mb-4">{cause.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{cause.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{cause.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-primary/5 border border-primary/10 p-8">
                <blockquote className="italic text-foreground/80 border-l-4 border-primary pl-4 py-2">
                  "The kits provided by STEMise changed how my students think about the world. They aren't just learning; they are building."
                </blockquote>
                <p className="mt-4 font-semibold text-sm">— Educator from Lagos, Nigeria</p>
              </div>
            </div>

            {/* Right: Donation Form */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle>Make a Donation</CardTitle>
                <CardDescription>Support our mission with a one-time or recurring gift.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-4">
                    <Label>Select Amount</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {["$10", "$50", "$100", "$250", "$500", "Custom"].map((amount) => (
                        <Button key={amount} variant="outline" type="button" className="w-full">
                          {amount}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="donor-name">Full Name</Label>
                      <Input id="donor-name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="donor-email">Email Address</Label>
                      <Input id="donor-email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="h-4 w-4 text-green-600" />
                      <span className="text-xs text-foreground/60">Secure payment processed via Stripe</span>
                    </div>
                    <Button type="submit" className="w-full h-12 text-lg">Process Donation</Button>
                  </div>
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

export default Donations;
