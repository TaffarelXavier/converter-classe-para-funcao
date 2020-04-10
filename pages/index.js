import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Highlight from "react-highlight";
import converterClassToFunction from "../utils/ConverterClassToFunction";
import Head from "next/head";

export default () => {
  const [iniciado, setIniciado] = useState(false);
  const [
    entrada,
    setEntrada
  ] = useState(`class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          Olá, {this.props.name}!
        </div>
      );
    }
  }
  ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('hello-example')
  );`);

  const [textFormated, setTextFormated] = useState("");

  const [copiado, setCopy] = useState(false);

  const handleChange = ev => {
    let entrada = ev.target.value;

    setEntrada(entrada);
  };

  const handlerConvert = () => {
    setIniciado(true);
    setTextFormated(converterClassToFunction(entrada));
  };

  return (
    <>
    	<Head>
					<title>Conveter Classe para Função em React JS</title>
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/dracula.min.css" />
					<link
						rel="stylesheet"
						href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
					<meta property="og:site_name" content="Converter classe para função javascript" />
					<meta property="og:title" content="Converter classe para função javascript" />
					<meta property="og:description" content="Converter uma classe para função javascript no padrão es6 de javascript." />
					<meta
						property="og:image"
						content="https://github.com/TaffarelXavier/convert-class-to-function-react-js/blob/master/icon.png?raw=true"
					/>
					<meta property="og:type" content="website" />
				</Head>
    <Container>
      <Row style={{ marginBottom: 40, marginTop: 40 }}>
        <Col>
          <h2>
            Conversor de <b>classe</b> para <b>função</b> em javascript.
          </h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <b>Before:</b>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="15"
                value={entrada}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Button onClick={handlerConvert}>Converter</Button>
          </Form>
        </Col>
        <Col md={6}>
          {textFormated !== "" && iniciado ? (
            <>
              <label>
                <b>After:</b>
              </label>
              <Highlight innerHTML={false}>{textFormated}</Highlight>
              <CopyToClipboard text={textFormated} onCopy={() => setCopy(true)}>
                <Button variant="primary" className="btn-block" type="submit">
                  Copiar para área de transferência
                </Button>
              </CopyToClipboard>
            </>
          ) : (
            <>
              <label>
                <b>After:</b>
              </label>
              <Highlight>
                {`const HelloMessage = (props) => {

return (
  <div>
    Olá, {props.name}!
  </div>
);
}

export default HelloMessage;`}
              </Highlight>
            </>
          )}
        </Col>
      </Row>
      <Row style={{ marginTop: 60 }}>
        <Col>
          <a
            href="https://github.com/TaffarelXavier/converter-classe-para-funcao"
            target="_blank"
          >
            Seja um colaboradador deste projeto:
            <img
              src="https://symbols.getvecta.com/stencil_81/41_github-tile.7833f77ccf.svg"
              width={20}
            />
          </a>
        </Col>
      </Row>
    </Container>
    </>
  );
};
