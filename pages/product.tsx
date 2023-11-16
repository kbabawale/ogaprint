import ProductsTemplate from "@/app/templates/Product";
import Document from "@/app/util/document";
import { Fragment } from "react";

const Product = () => {
  return (
    <Fragment>
      <Document
        title="Ogaprint Digital"
        description="Branding, Packaging"
      ></Document>
      <ProductsTemplate />
    </Fragment>
  );
};

Product.displayName = "Product";
export default Product;
