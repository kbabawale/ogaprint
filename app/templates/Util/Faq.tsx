import CustomAccordion from "@/app/components/Accordion";
import Button from "@/app/components/Button";
import { ButtonType } from "@/app/util/enum";
import React from "react";

function Faq() {
  return (
    <div className="flex flex-col items-center w-[90%] mx-auto md:full">
      <span className="font-bold text-2xl font-source">
        Frequently asked questions
      </span>

      <div className="mt-[3rem] w-full md:w-[50%]">
        <CustomAccordion />
      </div>

      <div className="mx-auto mt-[30px]">
        <Button
          extraclass="rounded-3xl px-3 py-2 text-sm font-medium"
          theme={ButtonType.ALTERNATE}
          label="See all questions"
        />
      </div>
    </div>
  );
}

export default Faq;
