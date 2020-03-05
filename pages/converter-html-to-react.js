import React, { useState } from 'react';
import Head from 'next/head';
const App = () => {
    const [entrada, setCodigo] = useState('');
    const [saida, setSaida] = useState('');

function handle(){
	let regexImg = /((<img[^>]* src=\"([^\"]*)\"[^>]*)[^\/]>|\<img?[^\/]>)/g;
	let removeTagScript  = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi
	let removeAllComment  = /<!--[\s\S]*?-->/g
	let removeDoctype  = /<!DOCTYPE[^>[]*(\[[^]]*\])?>/
	let metaUpdateCharset  = /charset/g

	let data = entrada.replace(regexImg, "$1 />");
	
	data = data.replace(removeTagScript, "");
	data = data.replace(removeAllComment, "");
	data = data.replace(removeDoctype, "");
	data = data.replace(/\r?\n|\r/g, "");
	data = data.replace(/class\=/g, "className=");
	data = data.replace(metaUpdateCharset, "charSet");

    setSaida(data);
}

	return (
		<>
			<Head>
				<title>Conveter HTML para Função em React JS</title>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/dracula.min.css" />
				<link
					rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
					crossorigin="anonymous"
				/>
			</Head>
			<textarea
				className="form-control"
				autoFocus
				value={entrada}
				onChange={ev => setCodigo(ev.target.value)}
				cols={10}
				rows={10}
			></textarea>
			<label htmlFor="">Saída:</label>
			<textarea value={saida} cols={10} rows={10} className="form-control"
			onChange={ev => setSaida(ev.target.value)}
			></textarea>
            <button 
            onClick={handle}
            className="btn btn-primary">
        Converter
            </button>
		</>
	);
};

export default App;
