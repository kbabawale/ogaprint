import { Breadcrumbs } from "@material-tailwind/react";

type BProps = {
  extraClass?: string;
};

export function Breadcrumb({ extraClass }: BProps) {
  return (
    <Breadcrumbs
      className={`overflow-x-scroll p-0 my-1 bg-white ${
        extraClass ? extraClass : ""
      }`}
    >
      <a href="#" className="breadcrumb-link">
        Docs
      </a>
      <a href="#" className="breadcrumb-link">
        Components
      </a>
      <a href="#" className="breadcrumb-link">
        Breadcrumbs
      </a>
    </Breadcrumbs>
  );
}
