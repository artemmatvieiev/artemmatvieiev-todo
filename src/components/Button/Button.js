export const Button = ({ btnClickHandler, btnText, btnClass }) => (
  <button
    onClick={btnClickHandler}
    className={btnClass}
  >
    { btnText }
  </button>
);

Button.defaultProps = {
  btnClickHandler: _ => _,
  btnClass: '',
  btnText: 'Button'
};

Button.propTypes = {
  btnClickHandler: PropTypes.func,
  btnClass: PropTypes.string,
  btnText: PropTypes.string
};
