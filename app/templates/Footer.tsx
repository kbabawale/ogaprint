import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col w-[90%] md:w-[60%] mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="mb-5 md:mb-0 flex flex-col">
          <a href="#" className="py-1 font-source font-bold">
            Company
          </a>
          <a href="#" className="hover:underline py-2 text-sm">
            About us
          </a>
          <a href="#" className="hover:underline py-2 text-sm">
            Contact us
          </a>
          <a href="#" className="hover:underline py-2 text-sm">
            Track Order
          </a>
          <a href="#" className="hover:underline py-2 text-sm">
            Careers
          </a>
        </div>
        <div className="mb-5 md:mb-0 flex flex-col">
          <a href="#" className="py-1 font-source font-bold">
            Company
          </a>
          <a href="#" className="hover:underline py-2 text-sm">
            Paper Quality
          </a>
          <a href="#" className="hover:underline py-2 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline py-2 text-sm">
            Terms &amp; Conditions
          </a>
          <a href="#" className="hover:underline py-2 text-sm">
            Shipping &amp; Delivery
          </a>
        </div>
        <div className="mb-5 md:mb-0  flex flex-col">
          <a href="#" className="py-1 font-source font-bold">
            Company
          </a>
          <span className="py-3 text-sm w-[70%]">
            25b Ozumba Mbadiwe Road, Opposite 1004, Victoria Island 100001,
            Lagos
          </span>
          <div className="flex items-center mt-[30px]">
            <FontAwesomeIcon
              className="text-black/50 pe-3"
              fontSize={25}
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="text-black/50 px-3"
              fontSize={25}
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="text-black/50 px-3"
              fontSize={25}
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="text-black/50 px-3"
              fontSize={25}
              icon={faLinkedin}
            />
          </div>
        </div>
      </div>
      <span className="text-center w-full text-sm mt-[3rem]">
        Copyright &copy; {currentYear} OgaPrints. All rights reserved.
      </span>
    </div>
  );
}

export default Footer;
