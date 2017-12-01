import { Component } from 'react';

import { Mount } from './Mount';

import './lifecycleComponent.scss';

export class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      show: true
    };
  }

  render() {
    const { counter, show } = this.state;

    return (
      <div className="lifecycle">
        <button onClick={() => this.setState({ counter: counter + 1 })}>Inc</button>
        <span className="count-text">{this.state.counter}</span>
        <br /><br />
        <button onClick={() => this.setState({ show: !show })}>
          { show ? 'Destroy' : 'Create' }
        </button>

        {show && <Mount code={counter} />}
      </div>
    );
  }
}
