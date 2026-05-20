import Navbar from "@/components/ui/Navbar";
import HeroCanvas from "@/components/ui/HeroCanvas";
import HeroText from "@/components/ui/HeroText";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import AboutSection from "@/components/ui/AboutSection";
import EducationSection from "@/components/ui/EducationSection";
import ProjectSection from "@/components/ui/ProjectSection";
import ServiceSection from "@/components/ui/ServiceSection";
import ContactSection from "@/components/ui/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden selection:bg-accent/30 bg-[#030A11]">
      <div className="bg-dust" />

      {/* Header Node */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative w-full h-screen overflow-hidden">
        {/* Fullscreen Video Background just for Hero */}
        <HeroCanvas />

        <div className="relative w-full h-full max-w-[1400px] mx-auto px-8 flex flex-col justify-end pb-32 z-10 pointer-events-none">
          <div className="w-full flex justify-end pointer-events-auto">
            <HeroText />
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Education Section */}
      <EducationSection />

      {/* Project Section */}
      <ProjectSection />

      {/* Service Section */}
      <ServiceSection />

      {/* Contact Section */}
      <ContactSection />

    </main>
  );
}
