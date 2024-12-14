import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Category from "./components/Category";
import Music from "./components/music";
import Products from "./components/products";
import Flash from "./components/flash";
import Explore from "./components/exploreproduct";
import Feature from "./components/feature";
import Delivery from "./components/delivery";
import Footer from "./components/footer";




 
export default function page () {
    return (
        <div>
        <Navbar/>
        <Hero />
        <Flash />
        <Category />
        <Products />
        <Music />
        <Explore />
        <Feature/>
        <Delivery/>
        <Footer />
        
        </div>
    );
}