import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitContactMessage } from "@/lib/formService";
import contactHero from "@/assets/contact-hero.jpg";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const result = await submitContactMessage({ name, email, message });

    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setName("");
      setEmail("");
      setMessage("");
    } else {
      toast({
        title: "Submission failed",
        description: result.error || "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="relative min-h-[80vh] flex items-center py-20 scroll-mt-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactHero})` }}
      />
      {/* Dark blue overlay for contrast */}
      <div className="absolute inset-0 bg-[#050b1d]/70" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-5xl font-semibold text-foreground">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg md:text-xl text-foreground/80">
              Have questions about STEMise or want to collaborate? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-card p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="text-base md:text-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="text-base md:text-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-base">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  className="text-base md:text-lg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full text-base md:text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
