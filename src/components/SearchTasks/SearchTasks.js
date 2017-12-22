import { List } from 'components/List';

import './searchTasks.scss';

export class SearchTasks extends Component {
  constructor() {
    super();

    this.getTodos();

    this.state = {
      todos: [],
      filtredTodos: [],
      isFiltred: false,
      notFound: false
    };
  }

  getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => this.setState({ todos }));
  }

  changeHandler = (e) => {
    this.setState({
      filtredTodos: [],
      notFound: false,
      isFiltred: false
    });

    if (e.target.value.length > 1) {
      const filtred = this.state.todos.filter(todo => todo.title.includes(e.target.value));
      this.setState({
        filtredTodos: filtred,
        notFound: !filtred.length,
        isFiltred: true
      });
    }
  }

  render() {
    const {
      todos,
      filtredTodos,
      notFound,
      isFiltred
    } = this.state;

    const Arr = isFiltred ? filtredTodos : todos;

    return (
      <div>
        <input
          type="text"
          onChange={this.changeHandler}
          className="todos-search"
          placeholder="Search..."
        />
        <List
          className="todos-list"
          items={Arr}
          field="title"
        />
        { notFound && <span key="4">Todo not found</span> }
      </div>
    );
  }
}
