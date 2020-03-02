import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Prism from 'prismjs';
// The code snippet you want to highlight, as a string
const code = `var data = 1;`;

// Returns a highlighted HTML string


export default () => {
	const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

	const [textFormated, setTextFormated] = useState('');

	const [copiado, setCopy] = useState(false);

	const handleChange = ev => {
		
		var entrada = ev.target.value;

		var arr = entrada.split('\n');

		var saida = 'const';

		arr.map((el, index) => {
			var className = el.match(/className\s+(\w+)/);

			if (Boolean(className)) {
				saida += ` ${className[1]} = () => {\n`;
			} else if (Boolean(el.match(/\s+?render\(\)\s+{/gm))) {
				saida += '\n';
			} else {
				saida += el + '\n';
			}
		});

		setTextFormated(saida.replace(/\}\n\}/, '\n}\n'));
	};

	return (
		<Container>
			<Row>
				<Col>
					<h2>Convete uma classe para função em javascript</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Cole o código no editor abaixo:</Form.Label>
							<Form.Control as="textarea" rows="15" autoFocus onChange={handleChange} />
						</Form.Group>
					</Form>
				</Col>
				<Col>
				<span className="token keyword">var</span> data <span className="token operator">=</span> <span className="token number">1</span><span className="token punctuation">;</span>

					{textFormated !== '' ? (
						<>
							<h3>Saída:</h3>
							<pre>{textFormated}</pre>
							<CopyToClipboard text={textFormated} onCopy={() => setCopy(true)}>
								<Button variant="primary" type="submit">Copiar para área de transferência</Button>
							</CopyToClipboard>
						</>
					) : (
						<></>
					)}
				</Col>
			</Row>
		</Container>
	);
};
