import Image from "next/image";
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { ButtonType } from "../util/enum";
import { useRouter } from "next/router";
import Select from "../components/Select";
import Textarea from "../components/Textarea";
import Link from "next/link";

function SignUpTemplate() {
  let [load, setLoad] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className="flex w-screen h-screen">
      <div className="flex flex-col w-full md:w-[40%] pt-3 pb-20 px-6 overflow-y-scroll">
        <div className="px-10 mt-10">
          <Image alt="" width={150} height={150} src={"/logo.svg"} />
        </div>

        <div className="text-center mx-auto mt-[100px]">
          <p className="text-c-black text-xl font-bold">Create your account</p>
          <p className="mt-2 font-light">
            Enter your details to get an account
          </p>
        </div>

        <div className="mx-auto mt-20 w-full md:w-[70%]">
          <form>
            <div className="flex items-center">
              <div className="basis-1/2 mb-4">
                <label htmlFor="firstname">Firstname</label>
                <Input type="text" placeholder="Legal firstname" />
              </div>
              <div>&nbsp;</div>
              <div className="basis-1/2 mb-4">
                <label htmlFor="lastname">Lastname</label>
                <Input type="text" placeholder="Legal lastname" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <Input type="email" placeholder="example@mail.com" />
            </div>
            <div className="flex items-center">
              <div className="basis-1/2 mb-4">
                <label htmlFor="gender">Gender</label>
                <Select
                  options={[
                    { label: "Male", value: "Male" },
                    { label: "Female", value: "Female" },
                  ]}
                  value={"Male"}
                />
              </div>
              <div>&nbsp;</div>
              <div className="basis-1/2 mb-4">
                <label htmlFor="dob">Date of birth</label>
                <Input type="date" placeholder="DD/MM/YYYY" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email">Phone number</label>
              <div className="relative">
                <div className="absolute inset-y-7 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    viewBox="0 0 6 3"
                  >
                    <path fill="#008751" d="M0 0h6v3H0z" />
                    <path fill="#FFF" d="M2 0h2v3H2z" />
                  </svg>
                </div>
                <span className="absolute inset-y-[17px] start-[45px] text-c-gray-900">
                  +234
                </span>
                <Input
                  type="tel"
                  extraTypeAttributes={[{ inputMode: "tel" }]}
                  extraClass="ps-[6rem]"
                  placeholder="8056567556"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email">Shipping Address</label>
              <Textarea
                extraMessage="Your shipping address will be used as your primary delivery location for all orders"
                placeholder="Enter address"
              />
            </div>
            <div className="mb-4 flex items-start">
              <div className="w-1/12">
                <input id="terms" type="checkbox" />
              </div>
              <label
                htmlFor="terms"
                className="w-11/12 grow text-c-gray-800 font-light"
              >
                I have read and agree to OgaPrint the{" "}
                <Link className="font-medium text-c-green" href="#">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link className="font-medium text-c-green" href="#">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <div className="mb-4 flex items-start">
              <div className="w-1/12 ">
                <input id="offers" type="checkbox" />
              </div>
              <label
                htmlFor="offers"
                className="w-11/12 grow text-c-gray-800 font-light"
              >
                Send me email updates on new offers, promotions, partnerships
                and new products by OgaPrints and it’s partners
              </label>
            </div>
            <Button
              type="submit"
              click={() => {
                setLoad(!load);
              }}
              loading={load}
              extraclass="mt-5"
              label="Create account"
            />
          </form>
        </div>
      </div>
      <div className="grow hidden md:flex bg-c-gray-10 items-center justify-center">
        <Image alt="" width={500} height={500} src={"/stock1.svg"} />
      </div>
    </div>
  );
}

export default SignUpTemplate;
