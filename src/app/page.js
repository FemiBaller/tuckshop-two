import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Features from "@/Components/Features";
import Demo from "@/Components/Demo";
import Reviews from "@/Components/Reviews";
import FAQS from "@/Components/FAQS";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div>  
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <Reviews />
      <FAQS />
      <Footer />

    </div>
  
  );
}
