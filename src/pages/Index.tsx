import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CasinosSection from "@/components/home/CasinosSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import FeaturesSection from "@/components/home/FeaturesSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CasinosSection />
      <WhyChooseSection />
      <FeaturesSection />
    </Layout>
  );
};

export default Index;
