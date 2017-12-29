import { Link } from 'react-router-dom';

import { Tabs, TabLink, Tab, TabContent } from 'components/Tabs';
import { getTasks, updateTask, removeTask } from 'services/tasksService';

import { days } from './constants';

export class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    getTasks()
      .then(tasks => this.setState({ tasks }))
      /* eslint no-console: ["error", { allow: ["log"] }] */
      .catch(console.log);
  }

  deleteTask = (indexDay, taskIndex) => {
    const tasks = this.state.tasks[indexDay];
    const task = tasks[taskIndex];

    removeTask(task.id)
      .then(() => {
        tasks.splice(taskIndex, 1);
        this.setState({ tasks: [...this.state.tasks] });
      })
      /* eslint no-console: ["error", { allow: ["log"] }] */
      .catch(console.log);
  }

  setTaskState = (task, doneState) => {
    // doneState: undefined | true | false
    task.done = doneState;
    console.log(task);
    updateTask(task.id, task)
      .then(() => this.setState({ tasks: [...this.state.tasks] }))
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


  render() {
    const current = new Date().getDay();
    const { tasks } = this.state;

    return (
      <Tabs selected={current}>
        {
          days.map((day, indexDay) => (
            <Tab key={day}>
              <TabLink title={day} />
              <TabContent>
                <ul className="contentList">
                  {
                    tasks.length &&
                    tasks[indexDay].map((task, taskIndex) => (
                      <li
                        key={task.id}
                        className={TaskList.getClassName(task)}
                      >
                        <Link to={`/tasks/${task.id}?day=${indexDay}`}>
                          {task.title}
                        </Link>
                        {
                          !task.done &&
                          <div className="btn-container">
                            <button
                              className="btn-process"
                              onClick={() => this.setTaskState(task, false)}
                              title="In process"
                            >
                              ~
                            </button>
                            <button
                              className="btn-done"
                              onClick={() => this.setTaskState(task, true)}
                              title="Done"
                            >
                              v
                            </button>
                            <button
                              className="btn-delete"
                              onClick={() => this.deleteTask(indexDay, taskIndex)}
                              title="Delete"
                            >
                              x
                            </button>
                          </div>
                        }
                      </li>
                  ))}
                </ul>

                <Link to={`/tasks/new?day=${indexDay}`}>Add new</Link>
              </TabContent>
            </Tab>
          ))
        }
      </Tabs>
    );
  }
}
