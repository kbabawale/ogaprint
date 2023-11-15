import Image from "next/image";
import React, { memo } from "react";

type ProductsProps = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  tagLabel?: string;
  tagType?: "discount" | "coupon";
};
const items: ProductsProps = {
  id: Date.now(),
  image: "/stock3.svg",
  name: "Wine Paper Bags",
  description:
    "Choose from our amazing collection of free templates or upload your own design",
  price: 12000,
  oldPrice: 9000,
  tagType: "discount",
  tagLabel: "15% Off",
};

const Products = memo<ProductsProps>(
  ({
    image,
    name,
    description,
    price,
    oldPrice,
    tagType,
    tagLabel,
  }: ProductsProps) => {
    return (
      <div className="flex flex-col w-[300px] mx-3">
        <div className="p-2 relative bg-black/[2%] rounded-2xl w-full h-[200px]">
          <div
            className={`absolute px-2 py-1 rounded-2xl text-xs font-medium ${
              tagType === "discount"
                ? "bg-c-red/30 text-c-red"
                : "bg-c-blue text-black"
            }`}
          >
            {tagLabel}
          </div>
          <Image
            src={image}
            style={{ objectFit: "contain" }}
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
        <div className="flex mt-3">
          <span className="text-base font-medium">₦{price}</span>
          <span className="ms-3 line-through text-c-gray-200 text-base font-medium">
            ₦{oldPrice}
          </span>
        </div>
      </div>
    );
  }
);

function Deals() {
  const itemsArr = Array(6).fill(items);
  return (
    <div className="flex flex-col items-center w-full">
      <span className="font-bold text-2xl font-source">Daily Deals</span>
      <span className="font-normal text-sm">
        Get awesome discounts and Deals on US
      </span>

      <div className="overflow-x-scroll md:w-[80%] mx-auto mt-10 flex w-full">
        {itemsArr.map((v, i) => (
          <Products key={i} {...v} />
        ))}
      </div>
    </div>
  );
}

export default Deals;
