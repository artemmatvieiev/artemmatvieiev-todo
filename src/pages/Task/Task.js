import { connect } from 'react-redux';
import { updateTodo } from 'store';
import { getTasks, updateTask, getTask, createTask } from 'services/tasksService';

import './task.scss';

export class TaskComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'New',
      description: '',
      day: props.location.search.replace(/\D+/, '')
    };
  }

  componentDidMount() {
    const { task } = this.props.match.params;

    if (task !== 'new') {
      getTask(task)
        .then(task => this.setState(Object.assign({}, task)));
    }
  }

  updateTasks = (e) => {
    const { task } = this.props.match.params;
    let promise;

    if (task !== 'new') {
      promise = updateTask(task, this.state);
    } else {
      promise = createTask(this.state);
    }

    promise.then(() => {
      getTasks()
        .then(tasks => this.props.updateTodo(tasks))
        /* eslint no-console: ["error", { allow: ["log"] }] */
        .catch(console.log);
    });

    this.props.history.goBack();

    e.preventDefault();
  };

  onChange = (e) => {
    const { target } = e;

    this.setState({ [target.name]: target.value });
  };

  render() {
    const { title, description } = this.state;

    return (
      <form className="task-form" onSubmit={this.updateTasks}>
        <input
          className="task-form-title"
          type="text"
          name="title"
          value={title}
          onChange={this.onChange}
          placeholder="Enter a title"
        />
        <br />
        <textarea
          className="task-form-description"
          name="description"
          cols="30"
          rows="10"
          value={description}
          onChange={this.onChange}
        />
        <br />
        <input
          type="submit"
          value="Save"
        />
      </form>
    );
  }
}

const mapDispatch = dispatch => ({
  updateTodo(tasks) {
    dispatch(updateTodo(tasks));
  }
});

export const Task = connect(null, mapDispatch)(TaskComponent);
