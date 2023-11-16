import React from "react";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import Button from "@/app/components/Button";
import { ButtonType } from "@/app/util/enum";
import { Categories } from "../Category";

type Props = {
  list: Categories[];
};

function CategoryDrawer({ list }: Props) {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <React.Fragment>
      <Button
        extraclass=""
        theme={ButtonType.SECONDARY}
        click={openDrawer}
        label="All Categories"
      />
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="overflow-y-scroll p-4"
      >
        <div className="flex flex-col">
          <span className="font-source font-bold text-2xl text-black">
            All Categories
          </span>
          {list &&
            list.map((category, i) => (
              <div
                key={i}
                className="my-3 text-sm capitalize hover:cursor-pointer text-black/90 hover:text-black"
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
      </Drawer>
    </React.Fragment>
  );
}

export default CategoryDrawer;
