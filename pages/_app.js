import React from 'react';
import App from 'next/app';
// import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Component {...pageProps} />
			</>
		);
	}
}

export default MyApp;
