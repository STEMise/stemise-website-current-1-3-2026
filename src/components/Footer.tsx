import { Link } from "react-router-dom";
import AppHashLink from "@/components/AppHashLink";
import stemiseLogo from "@/assets/stemise-logo.png";
const LinkedInIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>;
const InstagramIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>;
const TikTokIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>;

// Discord icon component
const DiscordIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>;
const socialLinks = [{
  name: "LinkedIn",
  url: "https://linkedin.com/company/stemise",
  icon: LinkedInIcon
}, {
  name: "Instagram",
  url: "https://www.instagram.com/stemise_official/",
  icon: InstagramIcon
}, {
  name: "TikTok",
  url: "https://www.tiktok.com/@stemise_official",
  icon: TikTokIcon
}, {
  name: "Discord",
  url: "https://discord.gg/dHYPMrsD8U",
  icon: DiscordIcon
}];
const mailtoHref = "mailto:officialstemise@gmail.com";
const Footer = () => {
  return <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <img src={stemiseLogo} alt="STEMise" className="h-40 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-foreground/80">
              Redefining STEM education through hands-on learning worldwide.
            </p>

          </div>

          <div className="md:justify-self-center">
            <h4 className="font-medium text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <AppHashLink toId="about" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  About Us
                </AppHashLink>
              </li>
              
              
              <li>
                <Link to="/team" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/donations" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Donations
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end">
            <h4 className="font-medium text-foreground mb-4">Contact</h4>
            <p className="text-sm text-foreground/80 mb-3">
              For inquiries, partnerships, or questions:
            </p>
            <a href={mailtoHref} className="text-sm text-primary hover:underline">
              officialstemise@gmail.com
            </a>
            <div className="flex gap-3 mt-4">
              {socialLinks.map(social => <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-70" aria-label={social.name}>
                  <social.icon className="h-5 w-5 text-foreground" />
                </a>)}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-foreground/60 text-center">
            © {new Date().getFullYear()} STEMise. All rights reserved. STEMise does not discriminate based on race, nationality, ethnicity, religion, disability, sex, gender identity, sexual orientation, or socioeconomic status.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
