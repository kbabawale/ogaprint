import SignUpTemplate from "@/app/templates/SignUp";
import Document from "@/app/util/document";
import { Fragment } from "react";

const SignUp = () => {
  return (
    <Fragment>
      <Document
        title="SignUp | Ogaprint"
        description="Authentication page"
      ></Document>
      <SignUpTemplate />
    </Fragment>
  );
};

SignUp.displayName = "SignUp";
export default SignUp;
