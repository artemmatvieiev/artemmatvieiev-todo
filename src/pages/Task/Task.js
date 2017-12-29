import { updateTask, getTask, createTask } from 'services/tasksService';

export class Task extends Component {
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

  updateTask = () => {
    const { task } = this.props.match.params;
    const taskData = this.state.task;

    if (task !== 'new') {
      updateTask(task, taskData);
    } else {
      createTask(taskData);
    }
  }

  render() {
    const { title } = this.state;
    return <strong>Task "{title}"</strong>;
  }
}
