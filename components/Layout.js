import Head from "next/head";
import React from "react";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const Layout = (props) => {
  return (
    <div>
      <head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </head>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
