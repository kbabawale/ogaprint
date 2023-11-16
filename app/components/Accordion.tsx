import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

type IconProps = {
  id: number;
  open: number;
};

function Icon({ id, open }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-45" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
        fill="black"
        fillOpacity="0.5"
      />
    </svg>
  );
}

function CustomAccordion() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          className="font-source font-medium text-base"
          onClick={() => handleOpen(1)}
        >
          When do I get my order?
        </AccordionHeader>
        <AccordionBody className="font-inter font-normal text-sm">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          className="font-source font-medium text-base"
          onClick={() => handleOpen(2)}
        >
          What is the minimum quantity of prints I can order?
        </AccordionHeader>
        <AccordionBody className="font-inter font-normal text-sm">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          className="font-source font-medium text-base"
          onClick={() => handleOpen(3)}
        >
          How do I place an order on your website?
        </AccordionHeader>
        <AccordionBody className="font-inter font-normal text-sm">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default CustomAccordion;
