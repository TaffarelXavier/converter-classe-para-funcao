import React from "react";
import App from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Conveter Classe para Função em React JS</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/dracula.min.css"
          />
          <meta property="og:site_name" content="Converter classe para função javascript" />
          <meta property="og:title" content="Converter classe para função javascript" />
          <meta
            property="og:description"
            content="Converter uma classe para função javascript no padrão es6 de javascript."
          />
          <meta
            property="og:image"
            content="https://github.com/TaffarelXavier/convert-class-to-function-react-js/blob/master/icon.png?raw=true"
          />
          <meta property="og:type" content="website" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
