import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import withRedux from "next-redux-wrapper";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import rootReducer from "../reducers";

const Dear = ({ Component, store }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

Dear.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object
};

export default withRedux((initialState, options) => {
  const store = createStore(rootReducer, initialState);
  return store
})(Dear); // HOC
