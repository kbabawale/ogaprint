import LoginTemplate from "@/app/templates/Login";
import Document from "@/app/util/document";
import { Fragment } from "react";

const Login = () => {
  return (
    <Fragment>
      <Document
        title="Login | Ogaprint"
        description="Authentication page"
      ></Document>
      <LoginTemplate />
    </Fragment>
  );
};

Login.displayName = "Login";
export default Login;
