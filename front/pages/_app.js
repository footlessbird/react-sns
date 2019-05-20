import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";

const Dear = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Dear</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.js" />
      </Head>
      <Layout>
        <Component />
      </Layout>
    </>
  );
};

export default Dear;
