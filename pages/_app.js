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
          <link href="https://myCDN.com/prism@v1.x/themes/prism.css" rel="stylesheet" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js"></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/dracula.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/a11y-dark.min.css" />
          {/* <link rel="stylesheet" href="http://192.168.129.141:5000/assets/js/highlight.min.js" /> */}
        </Head>
          <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;