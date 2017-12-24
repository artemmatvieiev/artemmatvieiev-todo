import './editableText.scss';

export class EditableText extends Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
      text: 'Text'
    };
  }

  clickHandler = () => {
    this.setState({ hidden: false });
  }

  blurHandler = ({ target }) => {
    this.props.fn(target.value);
    this.setState({
      hidden: true,
      text: target.value || this.state.text
    });
  }

  render() {
    const { hidden, text } = this.state;
    return (
      <div className="editable">
        {
          hidden ? <span onClick={this.clickHandler}>{text}</span>
                 : <input type="text" onBlur={this.blurHandler} placeholder={text} />
        }
      </div>
    );
  }
}

EditableText.defaultProps = {
  fn: _ => _,
};

EditableText.propTypes = {
  fn: PropTypes.func,
};
