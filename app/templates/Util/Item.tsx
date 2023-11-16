import React, { memo } from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export type ItemProps = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  tagLabel?: string;
  tagType?: "discount" | "coupon";
  showPrice?: boolean;
  showTag?: boolean;
  showCTA?: boolean;
  onclick?: () => void;
};

const Item = memo<ItemProps>(
  ({
    image,
    name,
    description,
    price,
    oldPrice,
    tagType,
    tagLabel,
    showPrice = true,
    showTag = true,
    showCTA = false,
    onclick,
  }: ItemProps) => {
    return (
      <div className="flex flex-col basis-1/2 md:basis-1/5 md:mx-3">
        <div className="p-2">
          <div className="p-2 relative bg-black/[2%] rounded-2xl w-full h-[200px]">
            {showTag && (
              <div
                className={`absolute px-2 py-1 rounded-2xl text-xs font-medium ${
                  tagType === "discount"
                    ? "bg-c-red/30 text-c-red"
                    : "bg-c-blue text-black"
                }`}
              >
                {tagLabel}
              </div>
            )}
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
          {showPrice && (
            <div className="flex mt-3">
              <span className="text-base font-medium">₦{price}</span>
              <span className="ms-3 line-through text-c-gray-200 text-base font-medium">
                ₦{oldPrice}
              </span>
            </div>
          )}
          {showCTA && (
            <Button
              extraclass="mt-2 text-sm font-normal"
              label="Order now"
              click={onclick}
              iconPosition="after"
              icon={faAngleRight}
            />
          )}
        </div>
      </div>
    );
  }
);

export default Item;
