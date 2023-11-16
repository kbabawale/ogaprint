import Design2Template from "@/app/templates/Design2";
import Document from "@/app/util/document";
import { Fragment } from "react";

const Design2 = () => {
  return (
    <Fragment>
      <Document
        title="Ogaprint Digital"
        description="Branding, Packaging"
      ></Document>
      <Design2Template />
    </Fragment>
  );
};

Design2.displayName = "Design2";
export default Design2;
