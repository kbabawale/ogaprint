import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Breadcrumb } from "../components/Breadcrumb";
import Item, { ItemProps } from "./Util/Item";
import CategoryDrawer from "./Util/CategoryDrawer";
import { useRouter } from "next/router";

export type Categories = {
  name: string;
  subCategory?: string[];
};

const items: ItemProps = {
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

const _categories: Categories[] = [
  { name: "Bags" },
  {
    name: "Banners & Large Format",
    subCategory: [
      "Roller Banners - Essential",
      "Roller Banners - Classic",
      "Roller Banners - Premium",
    ],
  },
  { name: "Brochures" },
  { name: "Business Cards" },
  { name: "Calendars" },
  { name: "Campaign Materials" },
  { name: "Caps & Hats" },
  { name: "Cloth Tags" },
  { name: "Clothing & Apparel" },
  { name: "Coroporate Gifts" },
  { name: "Envelopes" },
  { name: "Flyers & Handbills" },
  { name: "Frames & Wall Arts" },
  { name: "Greeting Cards" },
  { name: "ID Cards" },
  { name: "Labels" },
  { name: "Letterheads" },
  { name: "Notepads & Jotters" },
  { name: "Posters" },
  { name: "Presentation Folders" },
  { name: "Promotional Items" },
  { name: "Stickers" },
  { name: "Umbrella" },
  { name: "Wedding Stationery" },
];

function CategoryTemplate() {
  const router = useRouter();
  const itemsArr = Array(30).fill(items);
  return (
    <div className="flex flex-col w-screen">
      <Header />
      <div className="flex flex-col w-[90%] md:w-[75%] mx-auto">
        <div className="mt-3">
          <Breadcrumb />
        </div>
        <div className="flex flex-col md:flex-row items-start mt-[50px]">
          <div className="flex md:hidden w-full mb-[30px]">
            <CategoryDrawer list={_categories} />
          </div>
          <div className="hidden md:flex min-w-[300px] me-[100px] flex-col">
            <span className="font-source font-bold text-2xl text-black">
              All Categories
            </span>
            {_categories.map((category, i) => (
              <div
                key={i}
                className="my-2 text-sm capitalize hover:cursor-pointer text-black/90 hover:text-black"
              >
                {category.name}
                {category.subCategory && (
                  <div className="mt-2 flex flex-col relative text-black/60 capitalize left-4">
                    {category.subCategory.map((subCategory, j) => (
                      <span key={j} className="my-2 hover:text-black/75">
                        {subCategory}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="grow flex flex-wrap">
            {itemsArr.map((v, i) => (
              <Item
                {...v}
                showTag={false}
                showCTA={true}
                showPrice={false}
                key={i}
                onclick={() => router.push("/product")}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="py-[5rem]">
        <Footer />
      </div>
    </div>
  );
}

export default CategoryTemplate;
