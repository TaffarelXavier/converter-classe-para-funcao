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
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
					<textarea autoFocus onChange={handleChange}></textarea>
				</Col>
				<Col>
					{textFormated !== '' ? (
						<>
							<h3>Saída:</h3>
							<pre>{textFormated}</pre>
							<CopyToClipboard text={textFormated} onCopy={() => setCopy(true)}>
								<button>Copy to clipboard with button</button>
							</CopyToClipboard>
						</>
					) : (
						<>Cole o código no editor à esquerda.</>
					)}
				</Col>
			</Row>
		</Container>
	);
};
