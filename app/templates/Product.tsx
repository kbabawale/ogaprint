import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Breadcrumb } from "../components/Breadcrumb";
import Image from "next/image";
import Faq from "./Util/Faq";
import Trending from "./Util/Trending";
import Select from "../components/Select";
import AltRadio from "../components/AltRadio";
import Button from "../components/Button";
import { useRouter } from "next/router";

function ProductsTemplate() {
  const images = ["/stock1.svg", "/stock2.svg", "/stock3.svg", "/stock4.svg"];
  const [slideImage, setSlideImage] = useState<string>(images[0]);
  const router = useRouter();
  const radioGroup: {
    title: string;
    price: number;
    value: string;
    name: string;
  }[] = [
    { title: "Small", price: 200, value: "sm", name: "sizeInput" },
    { title: "Medium", price: 250, value: "md", name: "sizeInput" },
    { title: "Large", price: 300, value: "lg", name: "sizeInput" },
    { title: "X-Large", price: 350, value: "xl", name: "sizeInput" },
    { title: "XX-Large", price: 400, value: "xxl", name: "sizeInput" },
  ];

  //automatic slide scroll (still buggy)
  // useEffect(() => {
  //   const detectImageIndex = (image: string) => {
  //     return images.findIndex((img) => image === img);
  //   };

  //   setTimeout(() => {
  //     const index = detectImageIndex(slideImage);

  //     if (index > -1) {
  //       if (index + 1 >= 4) {
  //         setSlideImage(images[0]);
  //       } else {
  //         setSlideImage(images[index + 1]);
  //       }
  //     }
  //   }, 5000);
  //   return () => {};
  // }, [slideImage]);

  return (
    <div className="flex flex-col w-screen">
      <Header />
      <div className="flex flex-col w-[90%] md:w-[75%] mx-auto">
        <div className="mt-3">
          <Breadcrumb />
        </div>
        <div className="flex flex-col md:flex-row items-start w-full mt-5">
          <div className="overflow-x-scroll flex flex-row md:flex-col me-5 w-full md:min-w-[120px]">
            {images.map((v, i) => (
              <Image
                key={i}
                className={`${
                  slideImage === v && "border-4 border-c-purple"
                } hover:cursor-pointer hover:opacity-90 transition object-cover mb-1 w-[50px] h-[50px] me-2 md:m-0 md:w-[110px] md:h-[110px] rounded-lg  p-0`}
                width={120}
                height={120}
                alt=""
                src={v}
                onClick={() => {
                  setSlideImage(v);
                }}
              />
            ))}
          </div>
          <div className="w-full md:w-auto flex flex-col me-5">
            <div className="bg-black/10 rounded-lg flex items-center justify-center">
              <Image
                className="object-cover w-[500px] h-[450px]"
                width={500}
                height={450}
                alt=""
                src={slideImage}
              />
            </div>
            <span className="mt-5 font-source font-bold text-3xl text-black">
              Short Run Flyer Printing
            </span>
            <span className="mt-5 text-sm leading-6">
              Our short run A4 flyers and A5 flyer printing service will help
              you convey your business’ key message whilst our A6 flyer printing
              and A7 flyers are a small but mighty option, ideal for summarising
              key information. Whether you’re spreading the word about a new
              business or giving your firm a promotional push, design short-run
              personalised flyers using WTTB’s short-run flyer print-out service
              and distribute through door-drops or instore. Experts in print,
              look no further than WTTB for high-quality, short-run printing for
              a cost-effective advertising solution. Cheap flyers are an
              economical way to boost brand awareness and spread the word about
              promotions, events and more. Small but mighty, A5 flyers and A6
              flyers will automatically grab the attention of your target
              demographic when popped through the letterbox but if you want
              something a little bigger to really make your message stand out,
              we also offer high-quality A4 flyer printing
            </span>
            <span className="mt-5 font-source font-bold text-lg text-black">
              Technical Specification:
            </span>
            <div className="ms-2">
              <ul className="list-disc text-sm">
                {Array(6)
                  .fill("50% ringspun cotton 50% Polyester")
                  .map((v, i) => (
                    <li key={i} className="my-1">
                      {v}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="w-full mt-5 md:mt-0 md:min-w-[30%]">
            <span className="font-source font-bold">Customize your order</span>
            <div className="bg-[#FAFCFF] border border-black/5 rounded-lg w-full mt-5 py-5 px-3">
              <form>
                <div className="basis-1/2 mb-4">
                  <label
                    className="font-source font-medium text-black"
                    htmlFor="hoodie"
                  >
                    Hoodie color
                  </label>
                  <Select
                    extraClass="bg-transparent text-sm font-normal"
                    options={[
                      { label: "Black", value: "Black" },
                      { label: "Yellow", value: "Yellow" },
                    ]}
                    value={"Black"}
                  />
                </div>
                <div className="basis-1/2 mb-4">
                  <label
                    className="font-source font-medium text-black"
                    htmlFor="hoodie"
                  >
                    Print Area
                  </label>
                  <Select
                    placeholder="Choose print area options"
                    extraClass="bg-transparent text-sm font-normal"
                    options={[
                      { label: "Black", value: "Black" },
                      { label: "Yellow", value: "Yellow" },
                    ]}
                  />
                </div>
                <div className="basis-1/2 mb-4">
                  <label
                    className="font-source font-medium text-black"
                    htmlFor="hoodie"
                  >
                    Size
                  </label>
                  <div className="mt-2">
                    {radioGroup.map((i, j) => (
                      <AltRadio key={j} {...i} />
                    ))}
                  </div>
                </div>
              </form>
            </div>
            <Button
              click={() => router.push("/design")}
              extraclass="mt-5 text-sm font-medium"
              label="Order now"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F4F5F9] mt-[10rem] py-[5rem]">
        <Faq />
      </div>
      <div className="py-[5rem]">
        <Trending productCount={3} />
      </div>
      <div className="py-[5rem]">
        <Footer />
      </div>
    </div>
  );
}

export default ProductsTemplate;
