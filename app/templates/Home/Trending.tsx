import React, { memo } from "react";
import Image from "next/image";
import Button from "@/app/components/Button";

type ProductsProps = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
};

const items: ProductsProps = {
  id: Date.now(),
  image: "/stock1.svg",
  name: "Winter Hoodie",
  description:
    "With no minimum orders or set-up fees, hoodie printing has never been easier.",
  price: 7900,
};

const Products = memo<ProductsProps>(
  ({ image, name, description, price }: ProductsProps) => {
    return (
      <div className="basis-full md:basis-1/3 p-2 mb-[2rem] md:mb-0">
        <div className="flex flex-col">
          <div className="scale-100 md:scale-95 md:transition md:ease-in-out md:hover:scale-100 bg-black/[2%] rounded-2xl w-full h-[200px]">
            <Image
              src={image}
              style={{ objectFit: "cover" }}
              alt={name}
              fill={true}
            />
          </div>
          <span className="mt-1 font-bold text-black text-base font-source">
            {name}
          </span>
          <span className="mt-1 line-clamp-2 font-light text-c-gray-600 text-sm">
            {description}
          </span>
          <div className="flex justify-between mt-3">
            <span className="text-base text-black/50 font-normal">
              Starting at
            </span>
            <span className="text-lg font-bold font-source">₦{price}</span>
          </div>
          <Button
            extraclass="mt-4 border border-black py-2 font-medium text-sm"
            label="Customize your order"
          />
        </div>
      </div>
    );
  }
);

function Trending() {
  const itemsArr = Array(6).fill(items);
  return (
    <div className="flex flex-col items-center w-[90%] md:w-[60%] mx-auto">
      <span className="font-bold text-2xl font-source self-start">
        Trending Products
      </span>

      <div className="flex-wrap mx-auto mt-10 flex w-full">
        {itemsArr.map((v, i) => (
          <Products key={i} {...v} />
        ))}
      </div>
    </div>
  );
}

export default Trending;
