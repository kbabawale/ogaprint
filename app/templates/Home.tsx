import React from "react";
import Header from "./Header";
import Jumbrotron from "./Home/Jumbrotron";
import Deals from "./Home/Deals";
import Categories from "./Home/Categories";
import Trending from "./Home/Trending";
import Faq from "./Home/Faq";
import Footer from "./Footer";

function HomeTemplate() {
  return (
    <div className="flex flex-col w-screen">
      <Header />
      <div className="my-5">
        <Jumbrotron />
      </div>
      <div className="py-[5rem]">
        <Deals />
      </div>
      <div className="bg-[#F4F5F9] py-[5rem]">
        <Categories />
      </div>
      <div className="py-[5rem]">
        <Trending />
      </div>
      <div className="bg-[#F4F5F9] py-[5rem]">
        <Faq />
      </div>
      <div className="py-[5rem]">
        <Footer />
      </div>
    </div>
  );
}

export default HomeTemplate;
