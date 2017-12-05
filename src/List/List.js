export const List = ({
  items,
  clickHandler,
  className,
  field
}) => (
  <ul className={className}>
    {
      items.map((item, index) => (
        <li
          key={item.id || index}
          onClick={() => clickHandler(item)}
        >
          { item[field] }
        </li>
      ))
    }
  </ul>
);

List.defaultProps = {
  items: [],
  clickHandler: _ => _,
  className: '',
  field: 'name'
};

List.propTypes = {
  items: PropTypes.array,
  clickHandler: PropTypes.func,
  className: PropTypes.string,
  field: PropTypes.string
};
