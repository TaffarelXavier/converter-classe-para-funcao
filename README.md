# Converter Classe para Função de Javascript

## Before:
``` javascript
class HelloMessage extends React.Component {
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
);
```

## After:

``` javascript
const HelloMessage = (props) => {
    return (
      <div>
        Olá, {props.name}!
      </div>
    );
}

export default HelloMessage;
```