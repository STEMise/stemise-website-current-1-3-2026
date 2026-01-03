import Header from "@/components/Header";
import Footer from "@/components/Footer";
import harryHonigPhoto from "@/assets/team-harry-honig.jpeg";

const LinkedInIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>;
const teamMembers: { title: string; name: string; bio: string; linkedin: string; photo?: string }[] = [{
  title: "Executive Director",
  name: "Name Here",
  bio: "Bio coming soon...",
  linkedin: "https://linkedin.com/in/"
}, {
  title: "Deputy Executive Director",
  name: "Name Here",
  bio: "Bio coming soon...",
  linkedin: "https://linkedin.com/in/"
}, {
  title: "Chief of Staff",
  name: "Name Here",
  bio: "Bio coming soon...",
  linkedin: "https://linkedin.com/in/"
}, {
  title: "Head of Operations",
  name: "Harry Honig",
  bio: "Leads STEMise's operations, building systems that enable chapter growth and global coordination. Oversees workflows, onboarding, and cross-team execution to ensure programs run efficiently and scale sustainably, supporting the organization's mission to expand access to STEM and AI education.",
  linkedin: "https://www.linkedin.com/in/harry-honig-56b3b6303/",
  photo: harryHonigPhoto
}, {
  title: "Head of Technology",
  name: "Name Here",
  bio: "Bio coming soon...",
  linkedin: "https://linkedin.com/in/"
}, {
  title: "Head of Marketing",
  name: "Name Here",
  bio: "Bio coming soon...",
  linkedin: "https://linkedin.com/in/"
}, {
  title: "Head of Education",
  name: "Name Here",
  bio: "Bio coming soon...",
  linkedin: "https://linkedin.com/in/"
}, {
  title: "Head of Outreach",
  name: "Name Here",
  bio: "Bio coming soon...",
  linkedin: "https://linkedin.com/in/"
}, {
  title: "Head of Finances",
  name: "Name Here",
  bio: "Bio coming soon...",
  linkedin: "https://linkedin.com/in/"
}];
const Team = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-primary-foreground text-secondary">
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
            {teamMembers.map((member, index) => <div key={index} className="bg-card border border-border/50 rounded-2xl p-6 transition-all duration-300">
                {/* Photo */}
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="w-32 h-32 mx-auto mb-4 rounded-2xl border border-border/50 object-cover" />
                ) : (
                  <div className="w-32 h-32 mx-auto mb-4 bg-muted/50 rounded-2xl border border-border/50 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Photo</span>
                  </div>
                )}
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
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-70" aria-label={`${member.name}'s LinkedIn`}>
                    <LinkedInIcon className="h-5 w-5 text-foreground" />
                  </a>
                </div>
              </div>)}
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Team;