import React from "react";
import Head from "next/head";

const HeadApp = () => {
  return (
    <>
      <Head>
      <title>Convert HTML to React</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/dracula.min.css"
      />
       <link rel="stylesheet" href="/assets/css/index.css" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <meta property="og:site_name" content="Convert HTML to React." />
      <meta property="og:title" content="Convert HTML to React." />
      <meta
        property="og:url"
        content="https://reactconverter.now.sh/html-to-react"
      />
      <meta property="og:locale" content="pt_br" />
      <meta property="og:image:width" content="128" />
      <meta property="og:image:height" content="128" />
      <meta
        property="og:description"
        content="Cole algum código html no editor, e o programa o converterá para código react js."
      />
      <meta
        property="og:image"
        content="https://reactconverter.now.sh/html-to-react.jpeg"
      />
      <meta property="og:type" content="website" />
      </Head>
    </>
  );
};

export default HeadApp;
