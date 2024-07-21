import AboutUs from "@/components/AboutUs";
import BeforeAfter from "@/components/BeforeAfter";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurWork from "@/components/OurWork";
import Reviews from "@/components/Reviews";
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
      <section id="about">
        <AboutUs />
      </section>

      <Footer />
    </>
  );
};

export default page;
