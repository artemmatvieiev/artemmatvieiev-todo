export const List = ({
  items,
  clickHandler,
  className,
  field = 'name'
}) => (
  <ul className={className || null}>
    {
      items.map((item, index) => (
        <li
          key={item.id || index}
          onClick={clickHandler ? () => clickHandler(item) : null}
        >
          { item[field] }
        </li>
      ))
    }
  </ul>
);
