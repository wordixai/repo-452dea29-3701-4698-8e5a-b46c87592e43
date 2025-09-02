import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyXpanderSection from "@/components/WhyXpanderSection";
import ForDevelopersSection from "@/components/ForDevelopersSection";
import AgentPlatformSection from "@/components/AgentPlatformSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhyXpanderSection />
      <ForDevelopersSection />
      <AgentPlatformSection />
      <Footer />
    </div>
  );
};

export default Index;