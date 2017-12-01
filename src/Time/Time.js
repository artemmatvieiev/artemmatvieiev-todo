import { Component } from 'react';

export class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { time } = this.state;

    return <span>{ time }</span>;
  }
}
