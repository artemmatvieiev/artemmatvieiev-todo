import React, { Component } from 'react';

export class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: props.className || '',
      text: props.text || 'Button',
      toggleText: props.toggleText || props.text || 'Button'
    }
  }

  clickHandler = () => {
    const { className, text, toggleText } = this.state;
    const { toggleComponentId } = this.props;

    const elem = document.getElementById(toggleComponentId);

    if (/active/i.test(className)) {
      this.setState({
        className: className.replace(' active', ''),
        text: this.props.text || 'Button'
      });
      toggleComponentId ? elem.classList.remove('active') : null
    }
    else {
      this.setState({
        className: `${ className } active`,
        text: `${ toggleText || text }`
      });
      toggleComponentId ? elem.classList.add('active') : null
    }   
  }

  render() {
    const { className, text } = this.state;

    return (
      <button 
        onClick={ this.clickHandler } 
        className={ className }
      >
        { text }
      </button>
    );
  }
};
