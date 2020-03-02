import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default () => {

	const [textFormated, setTextFormated] = useState('');

	const [copiado, setCopy] = useState(false);

	const handleChange = ev => {
		
		var entrada = ev.target.value;

		var arr = entrada.split('\n');

		var saida = 'const';

		arr.map((el, index) => {
			var className = el.match(/class\s+(\w+)/);

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
				<pre><code className="language-css">{`p { color: red }`}</code></pre>

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
