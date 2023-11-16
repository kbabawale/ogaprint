import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function CartTemplate() {
  return (
    <div className="flex flex-col w-screen">
      <Header />
      <div className="w-full text-center text-lg font-semibold my-[10rem]">
        Page under construction
      </div>
      <div className="py-[5rem]">
        <Footer />
      </div>
    </div>
  );
}

export default CartTemplate;
