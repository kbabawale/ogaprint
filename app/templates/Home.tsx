import React from "react";
import Header from "./Header";
import Jumbrotron from "./Util/Jumbrotron";
import Deals from "./Util/Deals";
import Categories from "./Util/Categories";
import Trending from "./Util/Trending";
import Faq from "./Util/Faq";
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
        <Trending titlePosition="left" />
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
