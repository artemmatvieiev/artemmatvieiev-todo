import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';

import { addTodo, removeTodo, setStatusTodo } from 'store';
import { Tabs, TabLink, Tab, TabContent } from 'components/Tabs';
import { getTasks, updateTask, removeTask } from 'services/tasksService';

import { days } from './constants';

export class TaskListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      indexDay: null,
      taskIndex: null
    };
  }

  componentDidMount() {
    getTasks()
      .then(tasks => this.props.addTodo(tasks))
      /* eslint no-console: ["error", { allow: ["log"] }] */
      .catch(console.log);
  }

  deleteTask = () => {
    const { indexDay, taskIndex } = this.state;
    const task = this.props.tasks[indexDay][taskIndex];
    removeTask(task.id)
      .then(() => {
        this.props.removeTodo({ day: indexDay, index: taskIndex });
      })
      /* eslint no-console: ["error", { allow: ["log"] }] */
      .catch(console.log);
    this.onCloseModal();
  }

  setTaskState = (task, done) => {
    // doneState: undefined | true | false
    task.done = done;
    updateTask(task.id, task)
      .then(() => {
        this.props.setStatusTodo({ task });
      })
      /* eslint no-console: ["error", { allow: ["log"] }] */
      .catch(console.log);
  }

  static getClassName(task) {
    if (task.done) {
      return 'done';
    }

    if (task.done === false) {
      return 'progress';
    }

    return '';
  }

  onOpenModal = (indexDay, taskIndex) => {
    this.setState({
      open: true,
      indexDay,
      taskIndex
    });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };


  render() {
    const current = new Date().getDay();
    const { open } = this.state;
    const { tasks } = this.props;
    const stylesModal = {
      modal: {
        background: '#ccc',
        width: '20%',
        textAlign: 'center',
        borderRadius: '5px'
      }
    };

    return (
      <Tabs selected={current}>
        {
          days.map((day, indexDay) => (
            <Tab key={day}>
              <TabLink title={day} />
              <TabContent>
                <ul className="tab-content-list">
                  {
                    tasks.length &&
                    tasks[indexDay].map((task, taskIndex) => (
                      <li
                        key={task.id}
                        className={`tab-content-item ${TaskListComponent.getClassName(task)}`}
                      >
                        <Link
                          to={`/tasks/${task.id}?day=${indexDay}`}
                          className="tab-content-link"
                        >
                          {task.title}
                        </Link>
                        <div className="btn-container">
                          <button
                            className="btn-process"
                            onClick={() => this.setTaskState(task, false)}
                            title="In process"
                          >
                            ~
                          </button>
                          { !task.done &&
                            <button
                              className="btn-done"
                              onClick={() => this.setTaskState(task, true)}
                              title="Done"
                            >
                              v
                            </button>
                          }
                          <button
                            className="btn-delete"
                            onClick={() => this.onOpenModal(indexDay, taskIndex)}
                            title="Delete"
                          >
                            x
                          </button>
                        </div>
                      </li>
                  ))}
                </ul>
                <Modal
                  open={open}
                  onClose={this.onCloseModal}
                  little
                  closeIconSize={16}
                  styles={stylesModal}
                >
                  <h3>Delete this task?</h3>
                  <button onClick={() => this.deleteTask()}>Yes</button>
                  <button onClick={this.onCloseModal}>No</button>
                </Modal>
                <Link
                  to={`/tasks/new?day=${indexDay}`}
                  className="tab-content-link"
                >
                  Add new
                </Link>
              </TabContent>
            </Tab>
          ))
        }
      </Tabs>
    );
  }
}

const mapState = ({ tasks }) => ({ tasks });

const mapDispatch = dispatch => ({
  addTodo(tasks) {
    dispatch(addTodo(tasks));
  },
  removeTodo(removeData) {
    dispatch(removeTodo(removeData));
  },
  setStatusTodo(task) {
    dispatch(setStatusTodo(task));
  }
});

export const TaskList = connect(mapState, mapDispatch)(TaskListComponent);
