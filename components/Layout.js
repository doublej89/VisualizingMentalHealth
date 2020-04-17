import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";
import "../css/bootstrap.min.css";
import "../css/grayscale.min.css";
import { Fragment } from "react";

const Layout = (props) => (
  <Fragment>
    <Head>
      <title>Visualizing Mental Health</title>
    </Head>
    <NavBar />
    {props.children}
    <Footer />
  </Fragment>
);

export default Layout;
