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
        description: "We'll notify you when the portal launches."
      });
      setEmail("");
    }
  };
  const courses = ['Quantum Physics', 'Robotics Level 1', 'AI & Ethics', 'Sustainable Tech'];
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-primary-foreground text-secondary">
              Coming Soon
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground">
              STEMise Learning Portal
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Access world-class STEM curriculum, track your progress, and connect with global educators.
            </p>
          </div>

          <Card className="max-w-md mx-auto border border-border/50 bg-gradient-to-br from-card to-secondary/30 rounded-2xl">
            <CardHeader className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold">Join the Waitlist</CardTitle>
              <CardDescription className="text-foreground/70">
                Be the first to know when our learning portal goes live.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required className="bg-background/50" />
                <Button type="submit" className="w-full">
                  Notify Me
                </Button>
              </form>
              <p className="text-sm text-center text-foreground/50 mt-4">
                We'll never share your email with anyone else.
              </p>
            </CardContent>
          </Card>

          <div className="mt-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Preview
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold text-foreground">Upcoming Modules</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => <div key={course} className="group p-4 bg-gradient-to-br from-card to-secondary/50 rounded-2xl border border-border/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default">
                  <div className="h-40 bg-muted/30 rounded-xl mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-semibold uppercase">Coming Soon</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center">{course}</h3>
                </div>)}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Courses;