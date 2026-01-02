import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Courses = () => {
  const [email, setEmail] = useState("");

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when the portal launches.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              STEMise Learning Portal
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Access world-class STEM curriculum, track your progress, and connect with global educators.
            </p>
          </div>

          <Card className="max-w-md mx-auto border border-border">
            <CardHeader className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-foreground" />
              </div>
              <CardTitle>Join the Waitlist</CardTitle>
              <CardDescription>
                Be the first to know when our learning portal goes live.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full">
                  Notify Me
                </Button>
              </form>
              <p className="text-xs text-center text-foreground/50 mt-4">
                We'll never share your email with anyone else.
              </p>
            </CardContent>
          </Card>

          <div className="mt-20 py-12 border-t border-border">
            <h3 className="text-2xl font-bold mb-8 text-center uppercase tracking-tighter">Upcoming Modules</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Quantum Physics', 'Robotics Level 1', 'AI & Ethics', 'Sustainable Tech'].map((course) => (
                <div key={course} className="p-4 bg-card border border-border hover:border-primary/50 transition-all cursor-default group">
                   <div className="h-40 bg-muted mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-xs font-bold uppercase">Coming Soon</span>
                      </div>
                   </div>
                   <h4 className="font-semibold text-center">{course}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
