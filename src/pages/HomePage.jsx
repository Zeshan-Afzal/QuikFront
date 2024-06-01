import React from "react";
import Header from "../components/layout/Header";
import Hero from "../components/hero/Hero";
import Features from "../components/sectons/Features";
import Categories from "../components/sectons/Categories";
import BestDeals from "../components/sectons/BestDeals";
import FeaturedProducts from "../components/sectons/FeaturedProducts";
import Events from "../components/events/Evants";
import Sponcerd from "../components/layout/Sponcerd";
import Footer from "../components/layout/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <div className=" flex flex-col gap-8 ">
        <Features />
        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProducts />
        <Sponcerd />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
