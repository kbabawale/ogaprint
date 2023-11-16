import React, { useState } from "react";
import Header from "./Header";
import Faq from "./Util/Faq";
import Footer from "./Footer";
import Button from "../components/Button";
import Image from "next/image";
import Modal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faExclamation,
  faExclamationTriangle,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

type BoxProps = {
  ctaLabel: string;
  icon: string;
  title: string;
  subtitle: string;
  clickFn?: () => void;
};

const Box = ({ ctaLabel, icon, title, subtitle, clickFn }: BoxProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="p-2">
        <div className="bg-black/5 w-full h-[250px] flex flex-col items-center justify-center py-2 px-[20%]">
          <div className="basis-1/2  pb-2 flex">
            <Image
              className="md:self-end"
              src={icon}
              alt=""
              width={50}
              height={50}
            />
          </div>
          <span className="basis-4 md:mt-2 font-source font-bold text-base">
            {title}
          </span>
          <span className="grow mt-2 text-center text-sm text-black/70">
            {subtitle}
          </span>
        </div>
        <Button
          click={clickFn}
          extraclass="mt-5 w-full font-normal"
          label={ctaLabel}
        />
      </div>
    </div>
  );
};

function DesignTemplate() {
  const [modal, setModal] = useState<boolean>(false);
  const handleOpen = () => setModal(!modal);

  const inputFile = React.useRef<HTMLInputElement>(null);

  const openFileUploadDialog = () => {
    inputFile.current?.click();
  };

  return (
    <div className="flex flex-col w-screen">
      <Header />
      <div className="py-[5rem] w-full md:w-[60%] flex flex-col items-center mx-auto">
        <span className="font-source font-medium text-base">
          Design your order
        </span>
        <div className="mt-10 flex md:flex-row flex-col w-[80%] md:w-full items-center">
          <Box
            subtitle=" If you already made a design you can upload here. PNG, JPG, AI. 15MB
            Max"
            title="Upload your design"
            icon="/upload.svg"
            ctaLabel="Upload file"
            clickFn={handleOpen}
          />
          <Box
            title="Lets create for you"
            subtitle="Send a message to our team detailing your design specifications and we’ll make it happen"
            icon="/create-design.svg"
            ctaLabel="Send Instructions"
          />
        </div>
      </div>
      <div className="bg-[#F4F5F9] py-[5rem]">
        <Faq />
      </div>
      <div className="py-[5rem]">
        <Footer />

        <Modal
          template={
            <div
              className="flex flex-col p-5"
              aria-hidden="true"
              aria-modal="true"
            >
              <div className="flex items-center">
                <span className="text-black text-center font-source font-semibold text-xl grow">
                  Upload your design
                </span>
                <div
                  title="Close"
                  className="hover:cursor-pointer rounded-full w-[20px] h-[20px] flex items-center justify-center bg-black/30 p-3"
                >
                  <FontAwesomeIcon
                    color="#fff"
                    onClick={handleOpen}
                    icon={faClose}
                  />
                </div>
              </div>
              <div className="mt-5 rounded-lg border-2 py-[50px] border-dashed bg-black/5 border-black/20 w-full flex flex-col">
                <FontAwesomeIcon
                  className="mb-5"
                  fontSize={20}
                  icon={faUpload}
                />
                <div className="text-center text-sm w-full text-black/70">
                  Drag and drop to upload or click{" "}
                  <span
                    onClick={openFileUploadDialog}
                    className="text-c-sky-blue hover:cursor-pointer hover:underline font-medium"
                  >
                    here
                  </span>{" "}
                  to <br /> select a file from your system
                </div>
              </div>
              <div className="p-3 mt-5 bg-c-yellow rounded-lg flex items-center">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  fontSize={25}
                  color="#000000"
                />
                <span className="text-black/70 text-sm ms-5">
                  Files types are limited to PNG, JPG, AI. and a maximum file
                  size of 15MB Max
                </span>
              </div>
              <input
                type="file"
                accept="application/pdf, image/png, image/gif, image/jpeg"
                id="file"
                ref={inputFile}
                className="invisible"
              />
            </div>
          }
          control={modal}
          handleOpen={handleOpen}
        />
      </div>
    </div>
  );
}

export default DesignTemplate;
