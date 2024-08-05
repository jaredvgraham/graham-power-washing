import AboutUs from "@/components/AboutUs";
import BeforeAfter from "@/components/BeforeAfter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurWork from "@/components/OurWork";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import React from "react";

const page = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <Reviews />
      <OurWork />
      <BeforeAfter />
      <Services />
      <section id="about">
        <AboutUs />
      </section>
      <Contact />
      <Footer />
    </>
  );
};

export default page;
