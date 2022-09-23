import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Categories2 from "../components/Categories2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Navbar3 from "../components/Navbar3";
import Navbar4 from "../components/Navbar4";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Navbar2 />
      <Categories />
      <Navbar3 />
      <Products/>
      <Navbar4 />
      <Categories2 />
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
