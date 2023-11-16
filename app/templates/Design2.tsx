import React, { ChangeEvent, Fragment, useState } from "react";
import Header from "./Header";
import Faq from "./Util/Faq";
import Footer from "./Footer";
import Button from "../components/Button";
import Image from "next/image";
import Modal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import Textarea from "../components/Textarea";
import Input from "../components/Input";
import AltRadio from "../components/AltRadio";
import { useRouter } from "next/router";

const radioGroup: {
  title: string;
  price: number;
  value: string;
  name: string;
}[] = [
  { title: "100 PCS", price: 200, value: "₦450,000", name: "sizeInput" },
  { title: "200 PCS", price: 250, value: "₦450,000", name: "sizeInput" },
  { title: "300 PCS", price: 300, value: "₦450,000", name: "sizeInput" },
  { title: "400 PCS", price: 350, value: "₦450,000", name: "sizeInput" },
  { title: "500 PCS", price: 400, value: "₦450,000", name: "sizeInput" },
];

function Design2Template() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-screen">
      <Header />
      <div className="py-[5rem] w-full md:w-[70%] flex flex-col md:flex-row items-start mx-auto">
        <div className="flex flex-col me-0 md:me-[100px] w-full p-5 md:p-0 md:w-[60%]">
          <span className="font-source text-lg font-semibold">
            Describe your design
          </span>
          <span className="text-sm mt-5">
            Detail your design here. preferred colours, references and
            additional instructions below. For business cards, include company
            name, your name, your position, contact details company address.
          </span>
          <div className="p-3 mt-5 bg-c-yellow rounded-lg flex items-center">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              fontSize={25}
              color="#000000"
            />
            <span className="text-black/70 text-sm ms-5">
              Include your LOGO if you’d like us to incorporate it in the
              designs, a graphic design fee of <strong>₦10,500</strong> will be
              added to your invoice
            </span>
          </div>
          <Textarea
            extraClass="h-[200px] resize-none"
            placeholder="Enter your message"
          />
          <div className="mt-5 rounded-lg border-2 py-[20px] border-dashed bg-black/5 border-black/20 w-full flex flex-col">
            <FontAwesomeIcon className="mb-2" fontSize={20} icon={faUpload} />
            <span className="text-center w-full my-2 font-source font-bold text-sm text-black">
              Company logo (optional)
            </span>
            <div className="text-center text-sm w-full text-black/70">
              Drag and drop to upload or click{" "}
              <span className="text-c-sky-blue hover:cursor-pointer hover:underline font-medium">
                here
              </span>{" "}
              to <br /> select a file from your system
            </div>
          </div>
        </div>
        <div className="flex flex-col md:p-2 border w-full p-5 md:w-[40%]">
          <form>
            <div className="basis-1/2 mb-4">
              <label
                className="font-source font-medium text-black"
                htmlFor="hoodie"
              >
                Email
              </label>
              <Input type="email" placeholder="username@email.com" />
            </div>
            <div className="basis-1/2 mb-4">
              <label
                className="font-source font-medium text-black"
                htmlFor="hoodie"
              >
                Phone number
              </label>
              <Input type="tel" placeholder="Enter a new contact number" />
            </div>
            <div className="basis-1/2 mb-4">
              <label
                className="font-source font-medium text-black"
                htmlFor="hoodie"
              >
                Quantity
              </label>
              <div className="mt-2">
                {radioGroup.map((i, j) => (
                  <AltRadio key={j} {...i} />
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full md:w-[30%] md:mx-auto p-5 mb-5">
        <Button
          click={() => router.push("/cart")}
          extraclass="font-normal"
          label="Proceed to checkout"
        />
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

export default Design2Template;
