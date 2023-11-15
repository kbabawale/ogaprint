import HomeTemplate from "@/app/templates/Home";
import Document from "@/app/util/document";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Document
        title="Ogaprint Digital"
        description="Branding, Packaging"
      ></Document>
      <HomeTemplate />
    </Fragment>
  );
};

Home.displayName = "Home";
export default Home;
