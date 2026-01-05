import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Package, Plus, Minus, Trash2, Send, Calendar, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import curriculaAi from "@/assets/curricula-ai.png";
import curriculaCybersecurity from "@/assets/curricula-cybersecurity.png";
import curriculaWebdev from "@/assets/curricula-webdev.png";
import curriculaPython from "@/assets/curricula-python.png";
import curriculaR from "@/assets/curricula-r.png";
import curriculaJava from "@/assets/curricula-java.png";

// Workshop type for API data
interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  registrationLink?: string;
}

// TODO: Replace with your Google Sheets API endpoint
// Example: https://sheets.googleapis.com/v4/spreadsheets/{SPREADSHEET_ID}/values/{RANGE}?key={API_KEY}
// Or use a service like SheetDB, Sheetsu, or a custom backend
const WORKSHOPS_API_URL = "";

const fetchWorkshops = async (): Promise<Workshop[]> => {
  if (!WORKSHOPS_API_URL) {
    return [];
  }
  
  try {
    const response = await fetch(WORKSHOPS_API_URL);
    const data = await response.json();
    
    // TODO: Transform the Google Sheets response to match Workshop interface
    // Google Sheets API returns: { values: [["id", "title", "description", ...], [...row data...]] }
    // Example transformation:
    // const rows = data.values?.slice(1) || []; // Skip header row
    // return rows.map((row: string[]) => ({
    //   id: row[0],
    //   title: row[1],
    //   description: row[2],
    //   date: row[3],
    //   time: row[4],
    //   location: row[5],
    //   registrationLink: row[6],
    // }));
    
    return data.workshops || [];
  } catch (error) {
    console.error("Error fetching workshops:", error);
    return [];
  }
};

const curricula = [{
  name: "AI",
  image: curriculaAi
}, {
  name: "Cybersecurity",
  image: curriculaCybersecurity
}, {
  name: "Web Development",
  image: curriculaWebdev
}, {
  name: "Python",
  image: curriculaPython
}, {
  name: "R",
  image: curriculaR
}, {
  name: "Java",
  image: curriculaJava
}];
interface KitItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
}
const stemKits = [{
  id: "robotics-basic",
  name: "Robotics Starter Kit",
  description: "Arduino-based robotics kit for beginners"
}, {
  id: "electronics-lab",
  name: "Electronics Lab Kit",
  description: "Breadboards, components, and sensors"
}, {
  id: "chemistry-set",
  name: "Chemistry Experiment Set",
  description: "Safe chemistry experiments for students"
}, {
  id: "physics-toolkit",
  name: "Physics Toolkit",
  description: "Mechanics, optics, and electricity demos"
}, {
  id: "coding-bundle",
  name: "Coding Education Bundle",
  description: "Micro:bit and Raspberry Pi materials"
}, {
  id: "biology-microscope",
  name: "Biology Microscope Kit",
  description: "Microscopes and prepared slides"
}, {
  id: "math-manipulatives",
  name: "Math Manipulatives Set",
  description: "Hands-on geometry and algebra tools"
}, {
  id: "renewable-energy",
  name: "Renewable Energy Kit",
  description: "Solar, wind, and hydro experiments"
}];
const Courses = () => {
  const [email, setEmail] = useState("");
  const [selectedKits, setSelectedKits] = useState<KitItem[]>([]);
  const [message, setMessage] = useState("");
  const [requesterName, setRequesterName] = useState("");
  const [requesterEmail, setRequesterEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [isLoadingWorkshops, setIsLoadingWorkshops] = useState(true);

  useEffect(() => {
    const loadWorkshops = async () => {
      setIsLoadingWorkshops(true);
      const data = await fetchWorkshops();
      setWorkshops(data);
      setIsLoadingWorkshops(false);
    };
    loadWorkshops();
  }, []);
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
  const addKit = (kit: typeof stemKits[0]) => {
    const existing = selectedKits.find(k => k.id === kit.id);
    if (existing) {
      setSelectedKits(selectedKits.map(k => k.id === kit.id ? {
        ...k,
        quantity: k.quantity + 1
      } : k));
    } else {
      setSelectedKits([...selectedKits, {
        ...kit,
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
    setShowConfirmDialog(true);
  };
  const sendRequest = async () => {
    setIsSending(true);

    // Placeholder for email sending - replace with your backend service
    const requestData = {
      to: "officialstemise@gmail.com",
      from: requesterEmail,
      name: requesterName,
      organization,
      message,
      kits: selectedKits.map(k => ({
        name: k.name,
        quantity: k.quantity
      }))
    };
    console.log("Request data to send:", requestData);

    // Simulate sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // TODO: Replace this with actual email API call
    // Example: await fetch('/api/send-kit-request', { method: 'POST', body: JSON.stringify(requestData) });

    setIsSending(false);
    setShowConfirmDialog(false);
    toast({
      title: "Request submitted!",
      description: "We'll review your request and get back to you soon."
    });

    // Reset form
    setSelectedKits([]);
    setMessage("");
    setRequesterName("");
    setRequesterEmail("");
    setOrganization("");
  };
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-6">
          {/* STEM Kit Request Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-primary-foreground text-secondary">
                Distribute Resources
              </span>
              <h1 className="text-3xl md:text-5xl font-semibold text-foreground">
                Request STEM Kits
              </h1>
              <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Select the kits you need for your school, community center, or educational program. 
                We distribute STEM resources to educators worldwide.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Available Kits */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold mb-4">Available Kits</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {stemKits.map(kit => <Card key={kit.id} className="border border-border/50 bg-gradient-to-br from-card to-secondary/30">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Package className="h-5 w-5 text-primary" />
                          </div>
                          <Button size="sm" onClick={() => addKit(kit)} className="h-8">
                            <Plus className="h-4 w-4 mr-1" /> Add
                          </Button>
                        </div>
                        <CardTitle className="text-lg mt-2">{kit.name}</CardTitle>
                        <CardDescription>{kit.description}</CardDescription>
                      </CardHeader>
                    </Card>)}
                </div>
              </div>

              {/* Request Summary */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Your Request</h3>
                <Card className="border border-border/50 bg-gradient-to-br from-card to-secondary/30 sticky top-24">
                  <CardContent className="pt-6">
                    {selectedKits.length === 0 ? <p className="text-foreground/50 text-center py-8">
                        No kits selected yet. Click "Add" on any kit to include it in your request.
                      </p> : <div className="space-y-3 mb-6">
                        {selectedKits.map(kit => <div key={kit.id} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm truncate">{kit.name}</p>
                            </div>
                            <div className="flex items-center gap-2 ml-2">
                              <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQuantity(kit.id, -1)}>
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center font-medium">{kit.quantity}</span>
                              <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQuantity(kit.id, 1)}>
                                <Plus className="h-3 w-3" />
                              </Button>
                              <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive" onClick={() => removeKit(kit.id)}>
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>)}
                      </div>}

                    <div className="space-y-4">
                      <Input placeholder="Your name *" value={requesterName} onChange={e => setRequesterName(e.target.value)} className="bg-background/50" />
                      <Input type="email" placeholder="Your email *" value={requesterEmail} onChange={e => setRequesterEmail(e.target.value)} className="bg-background/50" />
                      <Input placeholder="Organization (optional)" value={organization} onChange={e => setOrganization(e.target.value)} className="bg-background/50" />
                      <Textarea placeholder="Additional message (e.g., intended use, target audience, location...)" value={message} onChange={e => setMessage(e.target.value)} className="bg-background/50 min-h-[100px]" />
                      <Button className="w-full" onClick={handleSubmitRequest} disabled={selectedKits.length === 0}>
                        <Send className="h-4 w-4 mr-2" /> Submit Request
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Confirmation Dialog */}
          <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Your Request</DialogTitle>
                <DialogDescription>
                  Please review your STEM kit request before submitting.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <p className="text-sm text-foreground/70 mb-2">Requested kits:</p>
                  <ul className="space-y-1">
                    {selectedKits.map(kit => <li key={kit.id} className="text-sm">
                        • {kit.name} × {kit.quantity}
                      </li>)}
                  </ul>
                </div>
                <div className="text-sm">
                  <p><strong>From:</strong> {requesterName} ({requesterEmail})</p>
                  {organization && <p><strong>Organization:</strong> {organization}</p>}
                  {message && <p className="mt-2"><strong>Message:</strong> {message}</p>}
                </div>
                <p className="text-sm text-foreground/70">
                  This request will be sent to officialstemise@gmail.com
                </p>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={sendRequest} disabled={isSending}>
                  {isSending ? "Sending..." : "Confirm & Send"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Learning Portal Section */}
          <div id="programs" className="mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-primary-foreground text-secondary">
                Coming Soon
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
                STEMise Learning Portal
              </h2>
              <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Access world-class STEM curriculum, track your progress, and connect with global educators.
              </p>
            </div>

            {/* Waitlist Card */}
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
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-foreground md:text-3xl">Upcoming S.T.F.E Curriculum</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {curricula.map(course => <div key={course.name} className="group p-6 bg-gradient-to-br from-card to-secondary/50 rounded-2xl border border-border/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default">
                  <div className="h-48 rounded-xl mb-4 relative overflow-hidden">
                    <img src={course.image} alt={course.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/60">
                      <span className="text-sm font-semibold uppercase tracking-wider">Coming Soon</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-center">{course.name}</h3>
                </div>)}
            </div>
          </div>

          {/* Upcoming Workshops Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-semibold text-foreground">Workshops</h2>
            </div>
            
            {isLoadingWorkshops ? (
              <Card className="max-w-2xl mx-auto border border-border/50 bg-card">
                <CardContent className="py-12">
                  <p className="text-center text-lg text-foreground/70">Loading workshops...</p>
                </CardContent>
              </Card>
            ) : workshops.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workshops.map((workshop) => (
                  <Card key={workshop.id} className="border border-border/50 bg-gradient-to-br from-card to-secondary/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl">{workshop.title}</CardTitle>
                      <CardDescription>{workshop.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{workshop.location}</span>
                      </div>
                      {workshop.registrationLink && (
                        <Button asChild className="w-full mt-4">
                          <a href={workshop.registrationLink} target="_blank" rel="noopener noreferrer">
                            Register Now
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="max-w-2xl mx-auto border border-border/50 bg-card">
                <CardContent className="py-12">
                  <p className="text-center text-lg text-foreground/70">
                    No upcoming workshops soon
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Courses;