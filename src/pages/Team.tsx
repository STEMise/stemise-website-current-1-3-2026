import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Linkedin } from "lucide-react";

const teamMembers = [
  { title: "Executive Director", name: "Name Here", bio: "Bio coming soon...", linkedin: "https://linkedin.com/in/" },
  { title: "Deputy Executive Director", name: "Name Here", bio: "Bio coming soon...", linkedin: "https://linkedin.com/in/" },
  { title: "Chief of Staff", name: "Name Here", bio: "Bio coming soon...", linkedin: "https://linkedin.com/in/" },
  { title: "Head of Operations", name: "Name Here", bio: "Bio coming soon...", linkedin: "https://linkedin.com/in/" },
  { title: "Head of Technology", name: "Name Here", bio: "Bio coming soon...", linkedin: "https://linkedin.com/in/" },
  { title: "Head of Marketing", name: "Name Here", bio: "Bio coming soon...", linkedin: "https://linkedin.com/in/" },
  { title: "Head of Education", name: "Name Here", bio: "Bio coming soon...", linkedin: "https://linkedin.com/in/" },
  { title: "Head of Outreach", name: "Name Here", bio: "Bio coming soon...", linkedin: "https://linkedin.com/in/" },
  { title: "Head of Finances", name: "Name Here", bio: "Bio coming soon...", linkedin: "https://linkedin.com/in/" },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Team
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground">
              Get to Know Us
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Meet the passionate individuals driving STEMise's mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-card to-secondary/50 border border-border/50 rounded-2xl p-6 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
              >
                {/* Placeholder for photo */}
                <div className="w-32 h-32 mx-auto mb-4 bg-muted/50 rounded-2xl border border-border/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-muted-foreground text-sm">Photo</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center">
                  {member.name}
                </h3>
                <p className="text-primary text-center font-medium mt-1">
                  {member.title}
                </p>
                <p className="text-foreground/70 text-center text-sm mt-3 leading-relaxed">
                  {member.bio}
                </p>
                {/* LinkedIn */}
                <div className="flex justify-center mt-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5 text-foreground" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;