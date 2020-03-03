const TodoApp = props => {
  
  const [items, setitems] = useState([]);
  const [text, settext] = useState("");

  return (
    <div>
      <h3>Tarefas</h3>

      <TodoList items={this.state.items} />

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-todo">O que precisa ser feito?</label>
        <input id="new-todo" onChange={this.handleChange} value={text} />
        <button>{items} </button>
      </form>
    </div>
  );

  function handleChange(e) {}
};

const TodoList = props => {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
