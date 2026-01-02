import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24 flex items-center justify-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 max-w-lg relative z-10">
          <Card className="border border-border/50 bg-gradient-to-br from-card to-secondary/30 rounded-2xl">
            <CardHeader className="text-center">
              <div className="mx-auto w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <UserPlus className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-3xl md:text-5xl font-semibold">Join STEMise</CardTitle>
              <CardDescription className="text-foreground/70 text-lg mt-2">Create your account to start your STEM journey with us.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="full-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="full-name" className="pl-10 bg-background/50" placeholder="Jane Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" className="pl-10 bg-background/50" placeholder="jane@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="password" type="password" className="pl-10 bg-background/50" placeholder="••••••••" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">I am a...</Label>
                    <select id="role" className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>Student</option>
                      <option>Educator</option>
                      <option>Parent</option>
                      <option>Partner</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-foreground/70 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I agree to the <Link to="#" className="text-primary hover:underline">Terms of Service</Link> and <Link to="#" className="text-primary hover:underline">Privacy Policy</Link>.
                  </label>
                </div>

                <Button type="submit" className="w-full h-11">Create Account</Button>
                
                <p className="text-center text-sm text-foreground/60 mt-4">
                  Already have an account? <Link to="/courses" className="text-primary font-medium hover:underline">Log in</Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;