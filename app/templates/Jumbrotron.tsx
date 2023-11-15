import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ButtonType } from "../util/enum";

function Jumbrotron() {
  return (
    <div className="bg-c-sky-blue-light w-full flex items-center justify-center py-[4rem] min-h-[150px]">
      <div className="px-5 md:px-0 w-full md:w-[55%] mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-[3rem] md:mb-0 flex flex-col">
          <span className="font-source capitalize font-bold text-5xl text-black">
            Give the gift Perfect gift <br /> of this mothers’ day
          </span>
          <span className="text-lg mt-5">
            Get 20% off when gifting with our special <br /> mothers’ day cards
            campaign
          </span>
          <div className="mt-5 w-[30%]">
            <Button
              iconPosition="after"
              icon={faArrowRight}
              theme={ButtonType.SECONDARY}
              label="Shop Now"
            />
          </div>
        </div>
        <Image alt="" width={300} height={300} src={"/stock2.svg"} />
      </div>
    </div>
  );
}

export default Jumbrotron;
