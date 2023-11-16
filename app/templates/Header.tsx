import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import { ButtonType } from "../util/enum";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <header className="shadow-xl md:shadow-none px-3 md:px-0 w-full md:w-[75%] md:border-none pb-2 pt-2 mx-auto flex flex-col">
      {/* First Layer */}
      <div className="py-2 flex items-center justify-between">
        <div className="w-[200px]">
          <Image alt="" width="150" height="150" src={"/logo.svg"} />
        </div>
        <div className="hidden md:block mx-3 grow relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 focus:border-gray-500 focus:outline-none rounded-3xl bg-transparent "
            placeholder="Search any products"
            required
          />
        </div>
        <div className="me-[5rem] hidden md:flex items-start font-semibold text-sm">
          Need help? Call &nbsp;
          <Link className="text-c-purple" href="#">
            08012345678
          </Link>
        </div>

        <div className="md:me-5 hover:underline hover:cursor-pointer flex items-center font-semibold text-sm">
          <FontAwesomeIcon fontSize="1.1rem" icon={faCartShopping} />
          &nbsp;
          <span className="hidden md:block text-sm font-normal">Cart</span>
        </div>

        <div className="">
          <Button
            click={() => router.push("/auth")}
            iconPosition="before"
            icon={faUser}
            theme={ButtonType.SECONDARY}
            label="Login"
          />
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden  grow relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 focus:border-gray-500 focus:outline-none rounded-3xl bg-transparent "
          placeholder="Search any products"
          required
        />
      </div>

      {/* Second Layer */}
      <div className="hidden md:flex py-1 items-start">
        <Link className="me-2 pe-2 text-sm hover:underline" href="#">
          All Products
        </Link>
        <Link className="me-2 px-2 text-sm hover:underline" href="#">
          Business Cards
        </Link>
        <Link className="me-2 px-2 text-sm hover:underline" href="#">
          Flyers
        </Link>
      </div>
    </header>
  );
}

export default Header;
