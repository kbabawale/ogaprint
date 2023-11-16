import DesignTemplate from "@/app/templates/Design";
import Document from "@/app/util/document";
import { Fragment } from "react";

const Design = () => {
  return (
    <Fragment>
      <Document
        title="Ogaprint Digital"
        description="Branding, Packaging"
      ></Document>
      <DesignTemplate />
    </Fragment>
  );
};

Design.displayName = "Design";
export default Design;
