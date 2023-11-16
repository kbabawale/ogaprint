import Button from "@/app/components/Button";
import { ButtonType } from "@/app/util/enum";
import { useRouter } from "next/router";
import React, { memo } from "react";

type BoxProps = {
  title: string;
  subTitle: string;
};

const Box = memo(({ title, subTitle }: BoxProps) => {
  return (
    <div className="w-full md:basis-1/2 p-2">
      <div className="rounded-xl shadow-md bg-white flex flex-col p-3">
        <span className="font-bold text-2xl font-source">{title}</span>
        <span className="text-black/40 text-sm">{subTitle}</span>
      </div>
    </div>
  );
});

function Categories() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center w-full">
      <span className="font-bold text-2xl font-source">Categories</span>

      <div className="mx-auto mt-[30px] flex flex-wrap justify-between items-center w-[90%] md:w-[50%] bg-transparent">
        <Box
          title="Bags"
          subTitle="Tote Bags, Courier Bags, Fanny Packs + 15 More"
        />
        <Box
          title="Bags"
          subTitle="Tote Bags, Courier Bags, Fanny Packs + 15 More"
        />
        <Box
          title="Bags"
          subTitle="Tote Bags, Courier Bags, Fanny Packs + 15 More"
        />
        <Box
          title="Bags"
          subTitle="Tote Bags, Courier Bags, Fanny Packs + 15 More"
        />
        <Box
          title="Bags"
          subTitle="Tote Bags, Courier Bags, Fanny Packs + 15 More"
        />
        <Box
          title="Bags"
          subTitle="Tote Bags, Courier Bags, Fanny Packs + 15 More"
        />
      </div>

      <div className="mx-auto mt-[30px]">
        <Button
          click={() => router.push("/category")}
          extraclass="rounded-3xl px-3 py-2 text-sm font-medium"
          theme={ButtonType.ALTERNATE}
          label="Explore all Categories"
        />
      </div>
    </div>
  );
}

export default Categories;
