import React from "react";
import Head from "next/head";
import PropTypes from 'prop-types';

import Layout from "../components/Layout";

const Dear = ({ Component }) => {
  return (
    <div>
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
    </div>
  );
};

Dear.propTypes = {
    Component: PropTypes.elementType,
  };

export default Dear;
