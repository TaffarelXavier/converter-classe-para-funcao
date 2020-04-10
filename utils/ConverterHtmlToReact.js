const handleEstrutuaReactNextJs = entrada => {
  let reactApp = `import React, { useState } from 'react';
	import Head from 'next/head';
	
	const App = () => {`;

  reactApp += `
	return (
		<>
			<Head>
				<title>Título aqui</title>
			</Head>
			${entrada}
		</>
		);
	\n\n }`;

  reactApp += "\n\nexport default App;";

  return reactApp;
};

function cleanPropertyName(name) {
  // turn things like 'align-items' into 'alignItems'
  name = name.replace(/(-.)/g, function(v) {
    return v[1].toUpperCase();
  });

  return name;
}

function handleConvertHtmlToReact(entrada) {
  let regexImg = /((<img\s+[^>]*src="([^"]*)")[^\/>]*>|\<img?[^\/]>)/g;
  let removeTagScript = /<script[^>]*>|<\/(script|scripts)>/gi;
  let removeTagScriptWithContent = /<script[^>]*>(.*?)<\/(script|scripts)>/gms;
  let removeTagStyle = /<style>(.*?)<\/(style)>/gms;
  let removeAllComment = /<!--[\s\S]*?-->/g;
  let removeDoctype = /<!(DOCTYPE|doctype)[^>[]*(\[[^]]*\])?>/;
  let replaceheadByHead = [/<head[^>]*>/, /<\/head\>/]; //Array Two items
  let removeTagHtml = /<(html)\s[^>]*>|<\/(html)>/gm; //Array Two items
  let metaUpdateCharset = /charset/g;
  const regexCssStyle = /style=((".*?"|'.*?'|[^"'][^\s]*))/g;
  const replaceTagMeta = /(<meta[^>]+)>/g;
  const replaceTagInput = /(<input[^\/>]+)>/g;
  const replaceTagLink = /(<link[^>]+)>/g;
  const replaceTagBodyByMain = /<(body)\s[^>]*>|<\/(body)>/g;
  const replaceBr = /<br\s\S[^\/]+>|<br\s+>|<br>/gm;
  const replaceCrossOrigin = /crossorigin\=/gm;
  const autofocus = /autofocus\=/gm;
  const replaceHr = /(<hr>|<hr\s+>)/gm;

  /***
   *
   *
   * |
   */
  entrada = entrada.replace(regexImg, " $2 />");
  entrada = entrada.replace(removeTagHtml, "");
  entrada = entrada.replace(replaceTagMeta, "$1/>");
  entrada = entrada.replace(replaceTagLink, "$1/>");
  entrada = entrada.replace(replaceTagBodyByMain, "$1");
  entrada = entrada.replace(removeTagScriptWithContent, "");
  entrada = entrada.replace(removeTagScript, "");
  entrada = entrada.replace(replaceheadByHead[0], "<Head>");
  entrada = entrada.replace(replaceheadByHead[1], "</Head>");
  entrada = entrada.replace(removeAllComment, "");
  entrada = entrada.replace(removeDoctype, "");
  entrada = entrada.replace(replaceTagInput, "$1 />");
  entrada = entrada.replace(removeTagStyle, ""); //Remove a tag style e todo seu conteúdo
  //entrada = entrada.replace(/\r?\n|\r/g, "");   //Remove the line breaks
  entrada = entrada.replace(/class\=/g, "className=");
  entrada = entrada.replace(metaUpdateCharset, "charSet");
  entrada = entrada.replace(replaceCrossOrigin, "crossOrigin=");
  entrada = entrada.replace(replaceBr, "<br/>");
  entrada = entrada.replace(autofocus, "autoFocus=");
  entrada = entrada.replace(replaceHr, "<hr/>");

  entrada = entrada.replace(regexCssStyle, function(ev) {
    let stilos = cleanPropertyName(
	  ev.replace(/style=\"|\"/gs, "")
	  .replace(/\;/g, ",")
	  .replace(/px/g,'')
    );

    return `style={{${stilos}}}`;
  });

  return handleEstrutuaReactNextJs(entrada);
}

export default handleConvertHtmlToReact;
