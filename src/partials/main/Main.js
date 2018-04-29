import React from 'react';
import { getTasksInfo } from 'services/tasksService';


import { Greeting } from 'components/greeting';

import './main.scss';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null
    };
  }

  componentDidMount() {
    getTasksInfo()
      .then(info => this.setState({ info }));
  }

  render() {
    const { info } = this.state;
    const { name } = this.props;

    return (
      <section className="main-info">
        {
          info &&
          <React.Fragment>
            <Greeting time={new Date().getHours()} name={name} />
            <p>You have {info.total} tasks</p>
            <p>Done: {info.done}</p>
            <p>In progress: {info.inProgress}</p>
            <p>Waiting: {info.waiting}</p>
          </React.Fragment>
        }
      </section>
    );
  }
}
