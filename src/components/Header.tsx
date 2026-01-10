import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppHashLink from "@/components/AppHashLink";
import stemiseLogo from "@/assets/stemise-logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    to: "/",
    label: "About"
  }, {
    to: "/partners",
    label: "Partners"
  }, {
    to: "/donations",
    label: "Donations"
  }, {
    to: "/team",
    label: "Team"
  }, {
    to: "/courses",
    label: "Programs"
  }];
  return <header className="sticky top-0 z-50 bg-background border-b border-primary-foreground">
      <div className="container mx-auto px-6 bg-background">
        <div className="flex items-center justify-between h-16 border-transparent">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img alt="STEMise" src="/lovable-uploads/8f7071d0-3b3d-46b7-92eb-7c76c236e727.png" className="h-7 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navLinks.map(link => <Link key={link.to} to={link.to} className="transition-colors text-sm font-medium border-b-2 border-transparent hover:border-primary pb-1 text-white">
                  {link.label}
                </Link>)}
            <Button size="sm" asChild>
              <AppHashLink toId="join">Join Us</AppHashLink>
            </Button>
          </nav>


          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden py-4 border-t border-border" aria-label="Mobile">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.to} to={link.to} className="text-foreground hover:text-primary transition-colors text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>)}
              <Button size="sm" asChild className="w-fit">
                <AppHashLink toId="join" onClick={() => setIsMenuOpen(false)}>Join Us</AppHashLink>
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;