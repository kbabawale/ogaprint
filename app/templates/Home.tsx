import React from "react";
import Header from "./Header";
import Jumbrotron from "./Jumbrotron";
import Deals from "./Deals";

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
    </div>
  );
}

export default HomeTemplate;
