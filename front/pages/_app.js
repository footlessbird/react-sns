import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import withRedux from "next-redux-wrapper";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import Layout from "../components/Layout";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
// import createSagaMiddleware from "@redux-saga/core";

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
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired
};

const configureStore = ((initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        );

  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
})

export default withRedux(configureStore)(Dear); // HOC
