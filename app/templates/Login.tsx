import Image from "next/image";
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { ButtonType } from "../util/enum";
import { useRouter } from "next/router";

function LoginTemplate() {
  let [load, setLoad] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className="flex w-screen h-screen">
      <div className="flex flex-col w-full md:w-[40%] py-3 px-6">
        <div className="px-10 mt-10">
          <Image alt="" width={150} height={150} src={"logo.svg"} />
        </div>

        <div className="mx-auto mt-[100px]">
          <p className="text-c-black text-4xl font-bold">
            Welcome to OgaPrints
          </p>
          <p className="mt-3 font-light w-2/3">
            Log in to continue your order or create an account to get started
          </p>
        </div>

        <div className="mx-auto mt-20 w-full md:w-[70%]">
          <form>
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <Input type="email" placeholder="example@mail.com" />
            </div>
            <div className="">
              <label htmlFor="email">Password</label>
              <Input type="password" placeholder="**********" />
            </div>
            <Button
              click={() => {
                setLoad(!load);
                setTimeout(() => {
                  router.push("/");
                }, 3000);
              }}
              loading={load}
              extraclass="mt-5"
              label="Sign In"
            />
          </form>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-c-gray-50"></div>
            <span className="flex-shrink mx-4">or</span>
            <div className="flex-grow border-t border-c-gray-50"></div>
          </div>
          <Button
            theme={ButtonType.ALTERNATE}
            click={() => router.push("/auth/signup")}
            loading={load}
            extraclass="mt-5"
            label="Create an account"
          />
        </div>
      </div>
      <div className="grow hidden md:flex bg-c-gray-10 items-center justify-center">
        <Image alt="" width={500} height={500} src={"stock4.svg"} />
      </div>
    </div>
  );
}

export default LoginTemplate;
