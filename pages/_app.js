import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Admin</title>
          {/* <link rel="stylesheet" href="http://192.168.129.141:5000/assets/js/highlight.min.js" /> */}
        </Head>
          <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;