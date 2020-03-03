import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Highlight from "react-highlight";
import converterClassToFunction from "../utils/ConverterClassToFunction";

export default () => {
  const [
    entrada,
    setEntrada
  ] = useState(`class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>Tarefas</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              O que precisa ser feito?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Adicionar #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }
  
  ReactDOM.render(
    <TodoApp />,
    document.getElementById('todos-example')
  );`);

  const [textFormated, setTextFormated] = useState("");

  const [copiado, setCopy] = useState(false);

  const handleChange = ev => {
    let entrada = ev.target.value;

    setEntrada(entrada);

    setTextFormated(converterClassToFunction(entrada));
  };

  const handlerConvert = () => {
    setTextFormated(converterClassToFunction(entrada));
  };

  return (
    <Container>
      <Row style={{ marginBottom: 40, marginTop: 40 }}>
        <Col>
          <h2>Conversor de <b>classe</b> para <b>função</b> em javascript.</h2>
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
          {textFormated !== "" ? (
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
            <></>
          )}
        </Col>
      </Row>
    </Container>
  );
};
