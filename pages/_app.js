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
          <script src="https://myCDN.com/prism@v1.x/components/prism-core.min.js"></script>
	<script src="https://myCDN.com/prism@v1.x/plugins/autoloader/prism-autoloader.min.js"></script>
        </Head>
          <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;