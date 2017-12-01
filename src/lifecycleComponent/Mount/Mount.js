import { Component } from 'react';

import './mount.scss';

export class Mount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'init',
      colorBg: '#ccc'
    };
  }

  updateStatus = (e) => {
    this.setState({
      status: `${this.state.status}+`
    });

    e.preventDefault();
  }

  componentWillReceiveProps({ code }) {
    this.setState({ colorBg: '#ccc' });
    if (code % 3 === 0) this.setState({ colorBg: 'green' });
    if (code % 5 === 0) this.setState({ colorBg: 'blue' });
    if (code % 3 === 0 && code % 5 === 0) this.setState({ colorBg: '#0ff' });
    if (code === 0) this.setState({ colorBg: '#ccc' });
  }

  render() {
    const { colorBg } = this.state;

    return (
      <code id="mount" style={{ background: colorBg }}>
        <span>
          The code from props is {this.props.code}<br />
          The code from state is {this.state.status}
        </span>
        <a href="/" onClick={this.updateStatus}>Update status</a>
      </code>
    );
  }
}
