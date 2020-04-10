import React, { useState } from "react";
import Head from "./Head";
import ConverterHtmlToReact from "../../utils/ConverterHtmlToReact";
import { CopyToClipboard } from "react-copy-to-clipboard";

const App = () => {
  const [entrada, setCodigo] = useState("");
  const [copiado, setCopy] = useState(false);
  const [saida, setSaida] = useState("");

  const handleConvert = ev => {
    setCodigo(ev.target.value);
  };

  const handleClick = ev => {
    setSaida(ConverterHtmlToReact(entrada));
  };

  return (
    <>
      <Head />

      <div id="general-container">
        <header className="header-page">
          <div className="logo">
            <a href="#">
              <img src="assets/img/logo.svg" alt="logo do site" height="90" />
            </a>
          </div>
        </header>

        <main>
          <header className="description">
            <h1>Conversor de HTML para React JS em JavaScript.</h1>
            {/* <h3>Converta classes...</h3> */}
          </header>

          <section className="converter">
            <div className="class-container">
              <form action="" method="post" className="runcode">
                <section className="desc-and-sub">
                  <label htmlFor="">
                    <strong>Copy your code here!</strong>
                  </label>
                  <button type="button" onClick={handleClick} className="btn">
                    Convert
                  </button>
                </section>
                <textarea
                  name=""
                  id=""
                  cols="50"
                  rows="50"
                  autoFocus
                  required
                  value={entrada}
                  onChange={ev => setCodigo(ev.target.value)}
                  spellCheck="false"
                ></textarea>
              </form>
            </div>

            <div className="class-container">
              <form action="" method="post" className="runcode">
                <section className="desc-and-sub">
                  <label htmlFor="">
                    <strong>Your converted code.</strong>
                  </label>

                  <CopyToClipboard text={saida} onCopy={() => setCopy(true)}>
                    <button type="button" className="btn">
                      Copy to clipboard
                    </button>
                  </CopyToClipboard>
                </section>
                <textarea
                  name=""
                  id=""
                  cols="50"
                  rows="50"
                  spellCheck="false"
                  value={saida}
                  onChange={ev => setSaida(ev.target.value)}
                ></textarea>
              </form>
            </div>
          </section>
        </main>

        <footer>
          <section className="sect">
            <h3>O Projeto</h3>
            <p>
              Este projeto é um conversor de codigos HTML, CSS e JavaScript para
              React...
            </p>
          </section>

          <section className="sect">
            <h4>Seja um colaboradador deste projeto:</h4>
            <a
              href="https://github.com/TaffarelXavier/converter-classe-para-funcao"
              target="_blank"
            >
              projeto github
            </a>
          </section>
          <section className="copyright">©2020 - Taffarel Xavier</section>
        </footer>
      </div>
    </>
  );
};

export default App;
