const str  = `class HelloMessage extends React.Component {
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
  );`;

const regex = /[\s\S]/gms
console.log(str)