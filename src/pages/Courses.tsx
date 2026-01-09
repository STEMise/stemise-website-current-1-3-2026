import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Calendar, MapPin, Clock, Package, ArrowRight, Sparkles, BookOpen, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
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
const WORKSHOPS_API_URL = "";
const fetchWorkshops = async (): Promise<Workshop[]> => {
  if (!WORKSHOPS_API_URL) {
    return [];
  }
  try {
    const response = await fetch(WORKSHOPS_API_URL);
    const data = await response.json();
    return data.workshops || [];
  } catch (error) {
    console.error("Error fetching workshops:", error);
    return [];
  }
};
const curricula = [{
  name: "AI",
  image: curriculaAi,
  description: "Machine learning and artificial intelligence fundamentals"
}, {
  name: "Cybersecurity",
  image: curriculaCybersecurity,
  description: "Digital security and ethical hacking basics"
}, {
  name: "Web Development",
  image: curriculaWebdev,
  description: "Build modern websites and web applications"
}, {
  name: "Python",
  image: curriculaPython,
  description: "Programming fundamentals with Python"
}, {
  name: "R",
  image: curriculaR,
  description: "Data analysis and statistical computing"
}, {
  name: "Java",
  image: curriculaJava,
  description: "Object-oriented programming with Java"
}];
const programHighlights = [{
  icon: BookOpen,
  title: "Expert Curriculum",
  description: "Designed by educators and industry professionals"
}, {
  icon: Users,
  title: "Community Learning",
  description: "Connect with students worldwide"
}, {
  icon: Sparkles,
  title: "Hands-On Projects",
  description: "Learn by building real-world applications"
}];
const Courses = () => {
  const [email, setEmail] = useState("");
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [isLoadingWorkshops, setIsLoadingWorkshops] = useState(true);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
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
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div className="container mx-auto px-6 relative">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/30 text-secondary bg-primary-foreground">
                STEM Education Programs
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Learn, Build, and
                <span className="text-primary"> Innovate</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Access world-class STEM curriculum, hands-on learning materials, 
                and connect with a global community of learners and educators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link to="/kits" className="text-5xl">
                    Request STEM Kits <Package className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#curriculum">View Curriculum</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-16 border-y border-border/50 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {programHighlights.map((item, index) => <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* STEM Kits CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <Card className="max-w-4xl mx-auto border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <CardContent className="py-12 px-8">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                    <Package className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Free STEM Kits for Educators
                  </h2>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Request hands-on learning materials for your classroom, community center, 
                    or educational program. We provide robotics kits, chemistry sets, coding bundles, and more.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-foreground/80">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>8+ different kit types available</span>
                    </li>
                    <li className="flex items-center gap-2 text-foreground/80">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Each kit serves 15-30 students</span>
                    </li>
                    <li className="flex items-center gap-2 text-foreground/80">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>Includes curriculum materials</span>
                    </li>
                  </ul>
                  <Button size="lg" asChild>
                    <Link to="/kits">
                      Request Free Kits <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
                <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[Package, Sparkles, BookOpen, Users].map((Icon, idx) => <div key={idx} className="w-20 h-20 bg-background/50 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <Icon className="h-10 w-10 text-primary/60" />
                      </div>)}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Learning Portal Section */}
        <section id="portal" className="py-20 bg-secondary/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-primary/20 text-primary border border-primary/30">
                Coming Soon
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                STEMise Learning Portal
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Access world-class STEM curriculum, track your progress, and connect with global educators.
              </p>
            </div>

            {/* Waitlist Card */}
            <Card className="max-w-md mx-auto border border-border/50 bg-card">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">Join the Waitlist</CardTitle>
                <CardDescription className="text-foreground/70">
                  Be the first to know when our learning portal goes live.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required className="bg-secondary/30 border-border/50" />
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
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Upcoming Curriculum</h2>
              <p className="text-foreground/70 max-w-xl mx-auto">
                Our S.T.F.E (Science, Technology, Fundamentals, Engineering) curriculum is coming soon
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {curricula.map(course => <div key={course.name} className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <div className="h-40 rounded-xl mb-4 relative overflow-hidden">
                    <img src={course.image} alt={course.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/70">
                      <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 bg-primary/20 rounded-full text-primary">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{course.name}</h3>
                  <p className="text-sm text-foreground/70">{course.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Upcoming Workshops Section */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Workshops</h2>
              <p className="text-foreground/70 max-w-xl mx-auto">
                Join our interactive workshops and learn from experts
              </p>
            </div>
            
            {isLoadingWorkshops ? <Card className="max-w-2xl mx-auto border border-border/50 bg-card">
                <CardContent className="py-12">
                  <p className="text-center text-lg text-foreground/70">Loading workshops...</p>
                </CardContent>
              </Card> : workshops.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {workshops.map(workshop => <Card key={workshop.id} className="border border-border/50 bg-card hover:border-primary/50 transition-all duration-300">
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
                      {workshop.registrationLink && <Button asChild className="w-full mt-4">
                          <a href={workshop.registrationLink} target="_blank" rel="noopener noreferrer">
                            Register Now
                          </a>
                        </Button>}
                    </CardContent>
                  </Card>)}
              </div> : <Card className="max-w-2xl mx-auto border border-border/50 bg-card">
                <CardContent className="py-12">
                  <p className="text-center text-lg text-foreground/70">
                    No upcoming workshops at the moment. Check back soon!
                  </p>
                </CardContent>
              </Card>}
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Courses;