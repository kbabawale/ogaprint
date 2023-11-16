import CartTemplate from "@/app/templates/Cart";
import Document from "@/app/util/document";
import { Fragment } from "react";

const Cart = () => {
  return (
    <Fragment>
      <Document
        title="Ogaprint Digital"
        description="Branding, Packaging"
      ></Document>
      <CartTemplate />
    </Fragment>
  );
};

Cart.displayName = "Cart";
export default Cart;
