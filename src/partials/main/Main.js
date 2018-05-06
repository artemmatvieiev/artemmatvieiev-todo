import React from 'react';
import { connect } from 'react-redux';
import { getTasksInfo } from 'services/tasksService';
import { setInfo } from 'store';

import { Greeting } from 'components/greeting';

import './main.scss';

export class MainComponent extends Component {
  componentDidMount() {
    getTasksInfo()
      .then(info => this.props.setInfo(info));
  }

  render() {
    const { user, info } = this.props;

    return (
      <section className="main-info">
        {
          info &&
          <React.Fragment>
            <Greeting time={new Date().getHours()} name={user.firstName} />
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

const mapState = ({ user, info }) => ({
  user,
  info
});

const mapDispatch = dispatch => ({
  setInfo(info) { dispatch(setInfo(info)); }
});

export const Main = connect(mapState, mapDispatch)(MainComponent);
