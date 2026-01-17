import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Seo from "@/components/Seo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Contact"
        description="Contact STEMise to collaborate, request kits, or learn more about STEM programs."
        pathname="/contact"
      />
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
