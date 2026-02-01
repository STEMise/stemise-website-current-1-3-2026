import Header from "@/components/Header";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Timeline = () => {
    return (
        <div className="min-h-screen">
            <Seo
                pathname="/timeline"
                title="Our Journey"
                description="Explore STEMise's milestones and journey in making STEM education accessible to everyone."
            />
            <Header />
            <main>
                <TimelineSection />
            </main>
            <Footer />
        </div>
    );
};

export default Timeline;
