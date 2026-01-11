import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Package, Plus, Minus, Trash2, Send, CheckCircle, Users, GraduationCap, Truck, Clock, Globe, Award, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { submitKitRequest } from "@/lib/formService";

// Kit images
import kitRobotics from "@/assets/kit-robotics.png";
import kitElectronics from "@/assets/kit-electronics.png";
import kitChemistry from "@/assets/kit-chemistry.png";
import kitPhysics from "@/assets/kit-physics.png";
import kitCoding from "@/assets/kit-coding.png";
import kitBiology from "@/assets/kit-biology.png";
import kitMath from "@/assets/kit-math.png";
import kitRenewable from "@/assets/kit-renewable.png";
interface KitItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
}
const stemKits = [{
  id: "robotics-basic",
  name: "Color Change Chemistry Kit",
  description: "Through samples of red cabbage, vitamin C pill, and baking soda, the color change chemistry kit teaches the fundamental concepts of titration and acid-base concentrations.",
  students: "Individual or groups of 2-5",
  grades: "K-8",
  image: kitRobotics
}, {
  id: "electronics-lab",
  name: "Physics Catapult Kit (Beginner Edition):",
  description: "Tailored for kindergarteners and low-grade primary students. The popsicle stick catapult which consists of 10 popsicle sticks, a bottle cap, and three rubberbands, serves as a great starting point to learn about projectile motion and gravity.",
  students: "Individual or groups of 2-6",
  grades: "K-5",
  image: kitElectronics

}, {
  id: "coding-bundle",
  name: "Rock Candy Crystallization Kit",
  description: "Coming soon. Add to cart for reservation purposes",
  students: "Individual",
  grades: "K-8",
  image: kitCoding
}, {
  id: "biology-microscope",
  name: "Balloon-powered Car Kit",
  description: "Coming soon. Add to cart for reservation purposes",
  students: "Groups of 3-9",
  grades: "K-5",
  image: kitBiology
}, {
  id: "math-manipulatives",
  name: "Chemistry Ice Cream Kit",
  description: "Coming soon. Add to cart for reservation purposes",
  students: "Individual or groups of 2-4",
  grades: "K-8",
  image: kitMath

}];
const testimonials = [{
  quote: "The robotics kits transformed our after-school program. Students who were disengaged are now leading projects!",
  author: "Ms. Rodriguez",
  role: "STEM Coordinator, Lincoln Middle School",
  location: "Texas, USA"
}, {
  quote: "We received the chemistry sets within 2 weeks. The quality exceeded our expectations.",
  author: "Mr. Okonkwo",
  role: "Science Teacher",
  location: "Lagos, Nigeria"
}, {
  quote: "STEMise made it possible for our rural school to offer hands-on science education for the first time.",
  author: "Dr. Patel",
  role: "Principal",
  location: "Gujarat, India"
}];
const faqs = [{
  question: "Who is eligible to request STEM kits?",
  answer: "Any educator, school, community center, library, or non-profit organization focused on education can request kits. We prioritize underserved communities and Title I schools."
}, {
  question: "Is there a cost for the kits?",
  answer: "STEM kits are provided free of charge to qualifying organizations. Big kits may require additional fees for shipping.",
}, {
  question: "How long does processing take?",
  answer: "Requests are typically reviewed within 3-5 business days. Once approved, kits ship within 1-4 weeks depending on your location and kit availability."
}, {
  question: "Can I request multiple types of kits?",
  answer: "Yes! You can request multiple different kits and multiple quantities of each kit. We'll review based on your student population and needs."
}, {
  question: "What countries do you ship to?",
  answer: "We currently ship worldwide, subject to standard legal restrictions. Please note that kits containing organic matter cannot be shipped internationally. Contact us for specific inquiries."
}, {
  question: "Do kits come with curriculum materials?",
  answer: "Yes, every kit includes activity guides and lesson plans / guides aligned to standards."
}];
const impactStats = [{
  value: "5,000+",
  label: "Students Reached",
  icon: Users
}, {
  value: "150+",
  label: "Schools Served",
  icon: GraduationCap
}, {
  value: "25+",
  label: "Countries",
  icon: Globe
}, {
  value: "98%",
  label: "Satisfaction Rate",
  icon: Award
}];
const howItWorks = [{
  step: 1,
  title: "Select Kits",
  description: "Browse our catalog and add the kits you need to your request"
}, {
  step: 2,
  title: "Fill Details",
  description: "Tell us about your organization and intended use"
}, {
  step: 3,
  title: "Submit Request",
  description: "Review and submit your request for approval"
}, {
  step: 4,
  title: "Receive & Teach",
  description: "Get your kits and start inspiring students!"
}];
const Kits = () => {
  const [selectedKits, setSelectedKits] = useState<KitItem[]>([]);
  const [message, setMessage] = useState("");
  const [requesterName, setRequesterName] = useState("");
  const [requesterEmail, setRequesterEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [organization, setOrganization] = useState("");
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setRequesterEmail(email);
    if (email && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const kitsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === heroRef.current && entry.isIntersecting) {
          setIsHeroVisible(true);
        }
      });
    }, {
      threshold: 0.1
    });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);
  const scrollToKits = () => {
    kitsRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const addKit = (kit: typeof stemKits[0]) => {
    const existing = selectedKits.find(k => k.id === kit.id);
    if (existing) {
      setSelectedKits(selectedKits.map(k => k.id === kit.id ? {
        ...k,
        quantity: k.quantity + 1
      } : k));
    } else {
      setSelectedKits([...selectedKits, {
        id: kit.id,
        name: kit.name,
        description: kit.description,
        quantity: 1
      }]);
    }
    toast({
      title: "Kit added",
      description: `${kit.name} added to your request list.`
    });
  };
  const updateQuantity = (id: string, delta: number) => {
    setSelectedKits(selectedKits.map(k => {
      if (k.id === id) {
        const newQty = Math.max(1, k.quantity + delta);
        return {
          ...k,
          quantity: newQty
        };
      }
      return k;
    }));
  };
  const removeKit = (id: string) => {
    setSelectedKits(selectedKits.filter(k => k.id !== id));
  };
  const getProgress = () => {
    if (selectedKits.length === 0) return 25;
    if (!requesterName || !requesterEmail) return 50;
    if (!organization && !message) return 75;
    return 100;
  };
  const handleSubmitRequest = () => {
    if (selectedKits.length === 0) {
      toast({
        title: "No kits selected",
        description: "Please add at least one STEM kit to your request.",
        variant: "destructive"
      });
      return;
    }
    if (!requesterName || !requesterEmail) {
      toast({
        title: "Missing information",
        description: "Please fill in your name and email.",
        variant: "destructive"
      });
      return;
    }
    if (!validateEmail(requesterEmail)) {
      setEmailError("Please enter a valid email address");
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    setShowConfirmDialog(true);
  };
  const sendRequest = async () => {
    setIsSending(true);
    const result = await submitKitRequest({
      name: requesterName,
      email: requesterEmail,
      organization: organization,
      message: message,
      kits: selectedKits.map(k => ({
        name: k.name,
        quantity: k.quantity
      }))
    });
    setIsSending(false);
    setShowConfirmDialog(false);
    if (result.success) {
      toast({
        title: "Request submitted!",
        description: "We'll review your request and get back to you soon."
      });
      setSelectedKits([]);
      setMessage("");
      setRequesterName("");
      setRequesterEmail("");
      setOrganization("");
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
    <main>
      {/* Hero Section */}


      {/* Impact Stats */}


      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full font-medium mb-4 text-lg bg-secondary-foreground text-background">
              How It Works
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4 md:text-6xl">Request Our STEM Kits</h2>
            <p className="text-foreground/70 max-w-xl mx-auto text-2xl">Getting STEM kits for your classroom is simple</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up stagger-2">
            {howItWorks.map(item => <div key={item.step} className="relative text-center">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                {item.step}
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
              <p className="text-foreground/70 text-base">{item.description}</p>
              {item.step < 4}
            </div>)}
          </div>
        </div>
      </section>

      {/* Kit Selection Section */}
      <section ref={kitsRef} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up stagger-3">
            <h2 className="text-3xl font-bold text-foreground mb-4 md:text-5xl">Available STEM Kits</h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Available Kits */}
            <div className="lg:col-span-2 space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {stemKits.map(kit => <Card key={kit.id} className="border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden bg-secondary/30">
                    <img src={kit.image} alt={kit.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg">{kit.name}</CardTitle>
                      <Button size="sm" onClick={() => addKit(kit)} className="h-9 px-4">
                        <Plus className="h-4 w-4 mr-1" /> Add
                      </Button>
                    </div>
                    <CardDescription className="text-foreground/70">{kit.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid gap-2 text-sm text-foreground/70">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground/60">Grades</span>
                        <span className="text-foreground/80">{kit.grades}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-foreground/60">Students</span>
                        <span className="text-foreground/80">{kit.students}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
              </div>
            </div>

            {/* Request Summary */}
            <div>
              <div className="sticky top-24 space-y-4">

                <Card className="border border-border/50 bg-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl flex items-center gap-2">

                      Your Request
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedKits.length === 0 ? <div className="text-center py-8">
                        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                          <Package className="h-8 w-8 text-foreground/40" />
                        </div>
                        <p className="text-foreground/60 text-sm">
                          No kits selected yet.<br />Click "Add" on any kit to include it.
                        </p>
                      </div> : <div className="space-y-3 mb-6">
                        {selectedKits.map(kit => <div key={kit.id} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg border border-border/30">
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm truncate text-foreground">{kit.name}</p>
                            </div>
                            <div className="flex items-center gap-2 ml-2">
                              <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQuantity(kit.id, -1)}>
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center font-medium text-foreground">{kit.quantity}</span>
                              <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQuantity(kit.id, 1)}>
                                <Plus className="h-3 w-3" />
                              </Button>
                              <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive hover:text-destructive" onClick={() => removeKit(kit.id)}>
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>)}
                      </div>}

                    <div className="space-y-4">
                      <Input placeholder="Your name *" value={requesterName} onChange={e => setRequesterName(e.target.value)} className="bg-secondary/30 border-border/50" />
                      <div className="space-y-1">
                        <Input type="email" placeholder="Your email *" value={requesterEmail} onChange={handleEmailChange} className={`bg-secondary/30 border-border/50 ${emailError ? 'border-destructive' : ''}`} />
                        {emailError && <p className="text-xs text-destructive">{emailError}</p>}
                      </div>
                      <Input placeholder="School / Organization" value={organization} onChange={e => setOrganization(e.target.value)} className="bg-secondary/30 border-border/50" />
                      <Textarea placeholder="Tell us about your program and how you'll use the kits..." value={message} onChange={e => setMessage(e.target.value)} className="bg-secondary/30 border-border/50 min-h-[100px]" />
                      <Button className="w-full" onClick={handleSubmitRequest} disabled={selectedKits.length === 0}>
                        <Send className="h-4 w-4 mr-2" /> Submit Request
                      </Button>
                    </div>

                    <p className="text-xs text-foreground/50 text-center mt-4">
                      <Clock className="h-3 w-3 inline mr-1" />
                      Typical processing: 5-7 business days
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Confirm Your Request
            </DialogTitle>
            <DialogDescription>
              Please review your STEM kit request before submitting.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <p className="text-sm text-foreground/70 mb-2">Requested kits:</p>
              <ul className="space-y-1">
                {selectedKits.map(kit => <li key={kit.id} className="text-sm flex items-center gap-2">
                  <Package className="h-4 w-4 text-primary" />
                  {kit.name} × {kit.quantity}
                </li>)}
              </ul>
            </div>
            <div className="text-sm space-y-1">
              <p><strong>From:</strong> {requesterName} ({requesterEmail})</p>
              {organization && <p><strong>Organization:</strong> {organization}</p>}
              {message && <p className="mt-2"><strong>Message:</strong> {message}</p>}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>Cancel</Button>
            <Button onClick={sendRequest} disabled={isSending}>
              {isSending ? "Sending..." : "Confirm & Send"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Testimonials */}


      {/* FAQ Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 md:text-5xl">Frequently Asked Questions</h2>

          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`faq-${index}`} className="border border-border/50 rounded-lg bg-card px-6">
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}

    </main>
    <Footer />
  </div>;
};
export default Kits;
