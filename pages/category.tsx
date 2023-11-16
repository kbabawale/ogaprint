import CategoryTemplate from "@/app/templates/Category";
import Document from "@/app/util/document";
import { Fragment } from "react";

const Category = () => {
  return (
    <Fragment>
      <Document
        title="Ogaprint Digital"
        description="Branding, Packaging"
      ></Document>
      <CategoryTemplate />
    </Fragment>
  );
};

Category.displayName = "Category";
export default Category;
