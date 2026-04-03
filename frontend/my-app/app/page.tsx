"use client";
import AboutSection from "@/components/about/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import ServiceSection from "@/components/service/ServiceSection";
import PortifolioSection from "@/components/portifolio/PortifolioSection";
import WhyUsSection from "@/components/portifolio/WhyUseSection";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import SloganSection from "@/components/testimonials/SloganSection";
import BlogSection from "@/components/blog/BlogSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div>
      {/* HeroSection now includes the fixed navbar and its own section with id="home" */}
      <HeroSection />

      <section id="about">
        <AboutSection />
      </section>

      <section id="services">
        <ServiceSection />
      </section>

      <section id="portfolio">
        <PortifolioSection />
      </section>

      <section id="whyus">
        <WhyUsSection />
      </section>

      <section id="blog">
        <BlogSection />
      </section>

      <section id="testimonials">
        <TestimonialSection />
      </section>

      <section id="slogan">
        <SloganSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}